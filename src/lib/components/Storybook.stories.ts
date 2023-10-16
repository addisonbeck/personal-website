import type { Meta, StoryObj } from '@storybook/svelte';
import Storybook from './Storybook.svelte';

const meta = {
	title: 'Welcome',
	component: Storybook,
	parameters: {
		layout: 'fullscreen'
	}
} satisfies Meta<Storybook>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Welcome: Story = {};
