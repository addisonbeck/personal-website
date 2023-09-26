import type { Meta, StoryObj } from '@storybook/svelte';
import EditorControls from './EditorControls.svelte';

const meta = {
	title: 'Controls/Editor/Controls',
	component: EditorControls,
	tags: ['autodocs']
} satisfies Meta<EditorControls>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		title: 'editor-title'
	}
};
