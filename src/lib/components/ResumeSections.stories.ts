import type { Meta, StoryObj } from '@storybook/svelte';
import ResumeSections from './ResumeSections.svelte';

const meta = {
  title: 'Resume Sections',
  component: ResumeSections,
  tags: ['autodocs'],
} satisfies Meta<ResumeSections>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
};
