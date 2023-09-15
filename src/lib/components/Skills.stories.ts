import type { Meta, StoryObj } from '@storybook/svelte';
import Skills from './Skills.svelte';

const meta = {
  title: 'Resume/Skills',
  component: Skills,
  tags: ['autodocs'],
} satisfies Meta<Skills>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
};
