import type { Meta, StoryObj } from '@storybook/svelte';
import Resume from './Resume.svelte';

const meta = {
  title: 'Components/Resume',
  component: Resume,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<Resume>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
};


export const Web: Story = {
  args: {
    mode: "html"
  }
};
