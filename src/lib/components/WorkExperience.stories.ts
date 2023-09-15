import type { Meta, StoryObj } from '@storybook/svelte';
import WorkExperience from './WorkExperience.svelte';

const meta = {
  title: 'Work Experience',
  component: WorkExperience,
  tags: ['autodocs'],
} satisfies Meta<WorkExperience>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
};
