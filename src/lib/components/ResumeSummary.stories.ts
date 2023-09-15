import type { Meta, StoryObj } from '@storybook/svelte';
import ResumeSummary from './ResumeSummary.svelte';

const meta = {
  title: 'Resume/Summary',
  component: ResumeSummary,
  tags: ['autodocs'],
} satisfies Meta<ResumeSummary>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
};
