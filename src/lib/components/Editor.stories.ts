import type { Meta, StoryObj } from '@storybook/svelte';
import Editor from './Editor.svelte';

const meta = {
	title: 'Controls/Editor',
	component: Editor,
	tags: ['autodocs']
} satisfies Meta<Editor>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
