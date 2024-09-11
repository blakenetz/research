import { memo, useContext } from 'react'
import { Box } from 'theme-ui'
import { CostContext } from '../context/cost'

/** @param {Options} */
const Cost = ({ options }) => {
  const { horizon, shortCostCurve } = options

  const { discountedCost, standardDeviation } = useContext(CostContext)

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
