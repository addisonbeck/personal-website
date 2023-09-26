import type { Meta, StoryObj } from '@storybook/svelte';
import ResumeContent from './ResumeContent.svelte';

const meta = {
	title: 'Components/Resume/Content',
	component: ResumeContent,
	tags: ['autodocs']
} satisfies Meta<ResumeContent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Web: Story = {
	args: {
		mode: 'web'
	}
};
