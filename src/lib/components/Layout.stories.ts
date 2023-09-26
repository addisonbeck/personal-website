import type { Meta, StoryObj } from '@storybook/svelte';
import Layout from './Layout.svelte';

const meta = {
	title: 'Components/Layout',
	component: Layout,
	tags: ['autodocs'],
	parameters: {
		layout: 'fullscreen'
	}
} satisfies Meta<Layout>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
