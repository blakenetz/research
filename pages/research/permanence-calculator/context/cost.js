import { createContext, useState, useEffect } from 'react'
import { piecewise, quantize, interpolateNumber } from 'd3-interpolate'

export const CostContext = createContext({})

const nsims = 50

/**
 * Properties used in performing calculations
 * @typedef {object} Options
 * @property {number} discountRate
 * @property {number} shortDuration
 * @property {number} projectRisk
 * @property {number} switchingTime
 * @property {boolean} switchingTimeActive
 * @property {number} horizon
 * @property {number[]} shortCostCurve
 * @property {number[]} longCostCurve
 * @property {number[]} longCostArray
 * @property {number[]} longCostArrayForCalc
 */

/** @type {Options} */
const initOptions = {
  discountRate: 3,
  shortDuration: 10,
  projectRisk: 10,
  switchingTime: 50,
  switchingTimeActive: true,
  horizon: 1000,
  shortCostCurve: [
    [0, 20],
    [20, 20],
    [40, 20],
    [60, 20],
    [80, 20],
    [100, 20],
  ],
  longCostCurve: [
    [0, 500],
    [20, 500],
    [40, 500],
    [60, 500],
    [80, 500],
    [100, 500],
  ],
  longCostArray: [],
  longCostArrayForCalc: [],
}

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

export default function CostProvider(props) {
  const [discountedCost, setDiscountedCost] = useState(0)
  const [standardDeviation, setStandardDeviation] = useState(0)
  const [options, setOptions] = useState(initOptions)

  useEffect(() => {
    const sims = Array.from({ length: nsims }, () => simulate(options))

    const nextDiscountedCosts =
      sims.map((o) => o.discountedCost).reduce((a, b) => a + b, 0) / nsims

    const nextStandardDeviation = Math.sqrt(
      sims
        .map((o) => Math.pow(o.discountedCost - nextDiscountedCosts, 2))
        .reduce((a, b) => a + b, 0) / nsims
    )

    setDiscountedCost(nextDiscountedCosts)
    setStandardDeviation(nextStandardDeviation)
  }, [options])

  return (
    <CostContext.Provider
      {...props}
      value={{
        discountedCost,
        standardDeviation,
        options,
        setOptions,
      }}
    />
  )
}
