import type { Meta, StoryObj } from '@storybook/svelte';
import Home from './Home.svelte';

const meta = {
	title: 'Components/Home',
	component: Home,
	tags: ['autodocs'],
	parameters: {
		layout: 'fullscreen'
	}
} satisfies Meta<Home>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
