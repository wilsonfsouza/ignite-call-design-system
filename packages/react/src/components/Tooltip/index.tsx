import React from 'react'
import * as RadixTooltip from '@radix-ui/react-tooltip'
import { TooltipArrow, TooltipContent, TooltipTrigger } from './styles'
import { Text } from '../Text'

export interface TooltipProps {
  children: React.ReactNode
  content: string
}

export function Tooltip({ children, content }: TooltipProps) {
  return (
    <RadixTooltip.Provider>
      <RadixTooltip.Root open={true}>
        <TooltipTrigger>
          <>{children}</>
        </TooltipTrigger>
        <RadixTooltip.Portal>
          <TooltipContent sideOffset={2}>
            <Text
              size="sm"
              fontWeight="medium"
              lineHeight="short"
              style={{ letterSpacing: '-0.09px', color: '$gray100' }}
            >
              {content}
            </Text>
            <TooltipArrow />
          </TooltipContent>
        </RadixTooltip.Portal>
      </RadixTooltip.Root>
    </RadixTooltip.Provider>
  )
}

Tooltip.displayName = 'Tooltip'
