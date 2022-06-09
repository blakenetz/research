import { forwardRef, useEffect, useMemo, useState } from 'react'
import { Box, Divider } from 'theme-ui'
import { useBreakpointIndex } from '@theme-ui/match-media'
import { Expander } from '@carbonplan/components'

const sx = {
  heading: {
    mt: [4, 4, 0, 0],
    mb: [3, 3, 4, 5],
    fontSize: [3, 3, 3, 4],
    fontFamily: 'heading',
    letterSpacing: 'smallcaps',
    textTransform: 'uppercase',
  },
  expander: {
    color: 'secondary',
    fontSize: [1, 1, 1, 2],
    fontFamily: 'mono',
    letterSpacing: 'mono',
    textTransform: 'uppercase',
    transition: 'opacity 0.15s',
  },
}

const List = forwardRef(
  ({ id, label, items, selected, filter, limit = 4, Entries }, ref) => {
    const index = useBreakpointIndex({ defaultIndex: 2 })
    const showAllItems = index < 2
    const [{ expanded, initial }, setExpanded] = useState({
      expanded: false,
      initial: true,
    })
    const visibleItems = useMemo(() => {
      if (showAllItems || items.length <= limit || expanded) {
        return items
      } else {
        return filter ? filter(items) : items.slice(0, limit)
      }
    }, [expanded, items, filter, limit, showAllItems])

    // Scroll to top of section when expander is closed
    useEffect(() => {
      if (!initial && !expanded && !showAllItems) {
        document.querySelector(`#${id}`).scrollIntoView({
          behavior: 'smooth',
        })
      }
    }, [expanded, showAllItems, initial])

    return (
      <Box
        ref={ref}
        sx={{
          mt: [4, 4, 0, 0],
          mb: [4, 6, 6, 7],
          display: [
            selected ? 'inherit' : 'none',
            selected ? 'inherit' : 'none',
            'inherit',
            'inherit',
          ],
        }}
      >
        <Divider
          sx={{
            width: '100%',
            mt: [0],
            mb: [4, 5, 6, 7],
            display: ['none', 'none', 'inherit', 'inherit'],
          }}
        />

        <Box
          id={showAllItems ? undefined : id}
          sx={{
            ...sx.heading,
            scrollMarginTop: [null, null, '103px', '117px'],
            display: ['none', 'none', 'inherit', 'inherit'],
            mb: [4, 5, 6, 7],
          }}
        >
          {label}
        </Box>

        <Box
          id={showAllItems ? id : undefined}
          sx={{ scrollMarginTop: ['170px', '138px'] }}
        >
          <Entries items={visibleItems} />
          {!showAllItems && items.length > limit && (
            <Box
              onClick={() =>
                setExpanded({ expanded: !expanded, initial: false })
              }
              sx={{
                ...sx.expander,
                transition: 'color 0.25s',
                cursor: 'pointer',
                width: 'fit-content',
                '@media (hover: hover) and (pointer: fine)': {
                  '&:hover': {
                    color: 'primary',
                  },
                  [`&:hover > #${id}-expander`]: {
                    stroke: 'primary',
                  },
                },
              }}
            >
              <Expander
                id={`${id}-expander`}
                value={expanded}
                sx={{
                  position: 'relative',
                  mr: 2,
                  ml: '-3px',
                  top: '1px',
                  width: [20, 20, 21, 22],
                }}
              />
              {expanded ? 'Show fewer' : 'Show more'}
            </Box>
          )}
        </Box>
      </Box>
    )
  }
)

export default List
