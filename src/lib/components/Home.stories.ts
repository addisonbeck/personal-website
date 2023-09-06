import type { Meta, StoryObj } from '@storybook/svelte';
import Home from './Home.svelte';

const meta = {
  title: 'Home',
  component: Home,
  tags: ['autodocs'],
} satisfies Meta<Home>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
};
