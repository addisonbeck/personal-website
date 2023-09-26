import type { Meta, StoryObj } from '@storybook/svelte';
import Button from './Button.svelte';

const meta = {
	title: 'Controls/Button',
	component: Button,
	tags: ['autodocs']
} satisfies Meta<Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Round: Story = {
	args: {
		type: 'round'
	}
};
