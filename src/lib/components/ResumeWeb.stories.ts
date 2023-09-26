import type { Meta, StoryObj } from '@storybook/svelte';
import ResumeWeb from './ResumeWeb.svelte';

const meta = {
	title: 'Components/Resume/Web',
	component: ResumeWeb,
	tags: ['autodocs']
} satisfies Meta<ResumeWeb>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
