import type { Meta, StoryObj } from '@storybook/svelte';
import About from './About.svelte';

const meta = {
	title: 'Components/About',
	component: About,
	tags: ['autodocs']
} satisfies Meta<About>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
