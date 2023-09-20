import type { Meta, StoryObj } from '@storybook/svelte';
import ThemeToggle from './ThemeToggle.svelte';

const meta = {
  title: 'Controls/Button/Theme Toggle',
  component: ThemeToggle,
  tags: ['autodocs'],
} satisfies Meta<ThemeToggle>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
};
