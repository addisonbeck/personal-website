import type { Meta, StoryObj } from '@storybook/svelte';
import ResumePlay from './ResumePlay.svelte';

const meta = {
	title: 'Controls/Button/Resume Play',
	component: ResumePlay,
	tags: ['autodocs']
} satisfies Meta<ResumePlay>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
