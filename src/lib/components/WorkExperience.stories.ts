import type { Meta, StoryObj } from '@storybook/svelte';
import WorkExperience from './WorkExperience.svelte';
import { work } from '$lib/data/Resume';

const meta = {
	title: 'Components/Resume/Work Experience',
	component: WorkExperience,
	tags: ['autodocs']
} satisfies Meta<WorkExperience>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const Hydrated: Story = {
  args: {
    data: work
  }
};
