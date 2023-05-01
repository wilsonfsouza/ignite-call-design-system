import { styled, keyframes } from '../../styles'
import * as RadixTooltip from '@radix-ui/react-tooltip'

const slideUpAndFade = keyframes({
  from: {
    opacity: 0,
    transform: 'translateY(2px)',
  },
  to: {
    opacity: 1,
    transform: 'translateY(0)',
  },
})

const slideRightAndFade = keyframes({
  from: {
    opacity: 0,
    transform: 'translateX(-2px)',
  },
  to: {
    opacity: 1,
    transform: 'translateX(0)',
  },
})

const slideDownAndFade = keyframes({
  from: {
    opacity: 0,
    transform: 'translateY(-2px)',
  },
  to: {
    opacity: 1,
    transform: 'translateY(0)',
  },
})

const slideLeftAndFade = keyframes({
  from: {
    opacity: 0,
    transform: 'translateX(2px)',
  },
  to: {
    opacity: 1,
    transform: 'translateX(0)',
  },
})

export const TooltipTrigger = styled(RadixTooltip.Trigger, {
  all: 'unset',
  width: 'fit-content',
})

export const TooltipContent = styled(RadixTooltip.Content, {
  backgroundColor: '$gray900',
  padding: '$3 $4',
  borderRadius: '$xs',
  userSelect: 'none',
  animationDuration: '400ms',
  animationTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
  willChange: 'transform, opacity',

  '&[data-state="delayed-open"]': {
    '[data-side="top"]': {
      animationName: slideDownAndFade,
    },
    '[data-side="right"]': {
      animationName: slideLeftAndFade,
    },
    '[data-side="bottom"]': {
      animationName: slideUpAndFade,
    },
    '[data-side="left"]': {
      animationName: slideRightAndFade,
    },
  },
})

export const TooltipArrow = styled(RadixTooltip.Arrow, {
  fill: '$gray900',
})
