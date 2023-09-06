import type { Meta, StoryObj } from '@storybook/svelte';
import Stats from './Stats.svelte';

const meta = {
  title: 'Stats',
  component: Stats,
  tags: ['autodocs'],
} satisfies Meta<Stats>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
};
