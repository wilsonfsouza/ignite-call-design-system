import type { StoryObj, Meta } from '@storybook/react'
import { Heading, HeadingProps } from '@ignite-ui/react'

export default {
  title: 'Typography/Heading',
  component: Heading,
  args: {
    children: 'Custom Title',
  },
} as Meta<HeadingProps>

export const Primary: StoryObj<HeadingProps> = {}

export const CustomTag: StoryObj<HeadingProps> = {
  args: {
    as: 'h1',
    children: 'H1 Heading',
  },
  parameters: {
    docs: {
      description: {
        story:
          'By default, the `<Heading />` component will always be a `h2`; however, by using the `as` property, we can change the HTML tag to other headings. <br><br> For example, we can assign property `as` to a `h1`.',
      },
    },
  },
}
