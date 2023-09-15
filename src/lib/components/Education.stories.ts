import type { Meta, StoryObj } from '@storybook/svelte';
import Education from './Education.svelte';

const meta = {
  title: 'Education',
  component: Education,
  tags: ['autodocs'],
} satisfies Meta<Education>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
};
