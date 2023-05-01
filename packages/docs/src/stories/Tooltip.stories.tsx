import type { StoryObj, Meta } from '@storybook/react'
import {
  Box,
  Text,
  Tooltip,
  TooltipProps,
} from '@design-system-scheduler-ui/react'

export default {
  title: 'Data display/Tooltip',
  component: Tooltip,
  args: {},
  argTypes: {
    children: {
      control: {
        type: null,
      },
    },
  },
  decorators: [
    (Story) => {
      return (
        <Box
          css={{
            display: 'flex',
            maxWidth: 'max-content',
          }}
        >
          {Story()}
        </Box>
      )
    },
  ],
} as Meta<TooltipProps>

export const Primary: StoryObj<TooltipProps> = {
  args: {
    children: <Text>25</Text>,
    content: 'April 25 - Available',
  },
}
