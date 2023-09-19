import type { Meta, StoryObj } from '@storybook/svelte';
import ResumeControls from './ResumeControls.svelte';

const meta = {
  title: 'Resume/Controls',
  component: ResumeControls,
  tags: ['autodocs'],
} satisfies Meta<ResumeControls>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
};
