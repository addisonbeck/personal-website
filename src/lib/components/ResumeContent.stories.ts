import type { Meta, StoryObj } from '@storybook/svelte';
import ResumeContent from './ResumeContent.svelte';
import resume from '$lib/data/Resume';

const meta = {
	title: 'Components/Resume/Content',
	component: ResumeContent,
	tags: ['autodocs']
} satisfies Meta<ResumeContent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Hydrated: Story = {
  args: {
    data: resume
  }
};

export const Html: Story = {
	args: {
		mode: 'html',
    data: resume
	}
};
