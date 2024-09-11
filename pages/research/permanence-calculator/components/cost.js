import { useEffect, useMemo, memo, useState } from 'react'
import { Box } from 'theme-ui'
import { piecewise, quantize, interpolateNumber } from 'd3-interpolate'

/**
 * @typedef {import('./calculator').Options} Options
 */

/** @param {Options} */
const projectFail = ({ shortDuration, projectRisk }) => {
  let counter = 1
  while (counter < shortDuration) {
    if (Math.random() < projectRisk / 100) {
      return counter
    } else {
      counter += 1
    }
  }
  return 0
}

/** @param {Options} options*/
const simulate = (options) => {
  const {
    shortDuration,
    horizon,
    switchingTime,
    switchingTimeActive,
    longCostArrayForCalc,
    shortCostCurve,
    discountRate,
  } = options

  const shortCostCurveValues = shortCostCurve.map((d) => d[1])
  const shortCostPiecewise = piecewise(interpolateNumber, shortCostCurveValues)
  const shortCostArray = quantize(shortCostPiecewise, 100)

  let counter = 0
  let skip = 0
  let cost = Array(horizon + shortDuration).fill(0)
  const years = Array.from({ length: horizon + shortDuration }, (_v, i) => i)
  const discount = years.map((y) => 1 / Math.pow(1 + discountRate / 100, y))

  while (counter < horizon) {
    if (counter >= switchingTime && switchingTimeActive) {
      cost[switchingTime] = longCostArrayForCalc[Math.min(switchingTime, 99)]
      counter = horizon
      skip = 1
    } else {
      cost[counter] = shortCostArray[Math.min(counter, 99)]
      let projectFailYear = projectFail(options)
      if (projectFailYear == 0) {
        counter += shortDuration
      } else {
        counter += projectFailYear
      }
    }
  }

  if ((counter >= horizon) & (skip == 0) && switchingTimeActive) {
    cost[counter] = longCostArrayForCalc[Math.min(counter, 99)]
  }

  const discountedCost = cost
    .map((c, i) => c * discount[i])
    .reduce((a, b) => {
      return (a || 0) + (b || 0)
    }, 0)

  return { discountedCost }
}

/** @param {Options} */
const Cost = ({ options }) => {
  const { horizon, shortCostCurve } = options

  const nsims = 50

  const sims = useMemo(
    () =>
      Array(nsims)
        .fill(0)
        .map(() => simulate(options)),
    [options]
  )

  const [discountedCost, setDiscountedCost] = useState(0)
  const [standardDeviation, setStandardDeviation] = useState(0)

  useEffect(() => {
    const nextDiscountedCosts =
      sims.map((o) => o.discountedCost).reduce((a, b) => a + b, 0) / nsims
    const nextStandardDeviation = Math.sqrt(
      sims
        .map((o) => Math.pow(o.discountedCost - nextDiscountedCosts, 2))
        .reduce((a, b) => a + b, 0) / nsims
    )

    setDiscountedCost(nextDiscountedCosts)
    setStandardDeviation(nextStandardDeviation)
  }, [sims])

  const buyerFail = () => {
    let counter = 1
    while (counter < horizon) {
      if (Math.random() < buyerRisk) {
        return counter
      } else {
        counter += 1
      }
    }
    return 0
  }

  return (
    <Box>
      <Box
        sx={{
          display: ['inline-block', 'inline-block', 'block'],
          fontSize: [3, 3, 3, 4],
          fontFamily: 'faux',
          letterSpacing: 'faux',
          mr: [2, 2, 0, 0],
          mt: [2, 2, 5, 6],
          pt: [1, 1, 0, 0],
        }}
      >
        If a temporary project now costs...
      </Box>
      <Box
        sx={{
          display: ['inline-block', 'inline-block', 'block'],
          fontSize: [4, 4, 6, 7],
          fontFamily: 'mono',
          letterSpacing: '0.02em',
          color: 'pink',
          mt: [0, 0, 2],
          mb: [1, 1, 2],
        }}
      >
        ${shortCostCurve[0][1].toFixed(0)}
        <Box
          sx={{
            display: 'inline-block',
            fontSize: [3, 3, 3, 4],
            fontFamily: 'faux',
            letterSpacing: 'faux',
            color: 'secondary',
            ml: [2],
          }}
        >
          per tCO₂
        </Box>
      </Box>
      <Box
        sx={{
          display: ['inline-block', 'inline-block', 'block'],
          fontSize: [3, 3, 3, 4],
          fontFamily: 'faux',
          letterSpacing: 'faux',
          mr: [2, 2, 0, 0],
        }}
      >
        you actually need to budget...
      </Box>
      <Box
        sx={{
          display: ['inline-block', 'inline-block', 'block'],
          fontSize: [4, 4, 6, 7],
          fontFamily: 'mono',
          letterSpacing: '0.02em',
          color: 'pink',
          my: [0, 0, 2],
        }}
      >
        ${discountedCost.toFixed(0)}
        <Box
          sx={{
            display: 'inline-block',
            mx: [2],
          }}
        >
          ±
        </Box>
        {standardDeviation.toFixed(0)}
        <Box
          sx={{
            display: 'inline-block',
            fontSize: [3, 3, 3, 4],
            fontFamily: 'faux',
            letterSpacing: 'faux',
            color: 'secondary',
            ml: [2],
          }}
        >
          per tCO₂
        </Box>
      </Box>
      <Box
        sx={{
          display: ['none', 'none', 'block'],
          fontSize: [3, 3, 3, 4],
          fontFamily: 'faux',
          letterSpacing: 'faux',
        }}
      >
        for permanent carbon removal.
      </Box>
    </Box>
  )
}

export default memo(Cost, ({ options: prev }, { options: next }) => {
  return Object.keys(prev).every((key) => {
    return Array.isArray(prev[key])
      ? JSON.stringify(prev[key]) === JSON.stringify(next[key])
      : prev[key] === next[key]
  })
})
