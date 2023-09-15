import type { Meta, StoryObj } from '@storybook/svelte';
import ResumePdf from './ResumePdf.svelte';

const meta = {
  title: 'Resume PDF',
  component: ResumePdf,
  tags: ['autodocs'],
} satisfies Meta<ResumePdf>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
};
