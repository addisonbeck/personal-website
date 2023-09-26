import type { Meta, StoryObj } from '@storybook/svelte';
import ResumeHeader from './ResumeHeader.svelte';

const meta = {
	title: 'Components/Resume/Header',
	component: ResumeHeader,
	tags: ['autodocs']
} satisfies Meta<ResumeHeader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
