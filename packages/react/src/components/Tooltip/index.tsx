import React from 'react'
import * as RadixTooltip from '@radix-ui/react-tooltip'
import {
  TooltipArrow,
  TooltipContent,
  TooltipTrigger,
  TooltipContentText,
} from './styles'

export interface TooltipProps {
  children: React.ReactNode
  content: string
}

export function Tooltip({ children, content }: TooltipProps) {
  return (
    <RadixTooltip.Provider>
      <RadixTooltip.Root>
        <TooltipTrigger>
          <>{children}</>
        </TooltipTrigger>
        <RadixTooltip.Portal>
          <TooltipContent sideOffset={2}>
            <TooltipContentText>{content}</TooltipContentText>
            <TooltipArrow />
          </TooltipContent>
        </RadixTooltip.Portal>
      </RadixTooltip.Root>
    </RadixTooltip.Provider>
  )
}

Tooltip.displayName = 'Tooltip'
