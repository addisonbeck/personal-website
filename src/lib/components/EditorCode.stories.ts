import type { Meta, StoryObj } from '@storybook/svelte';
import EditorCode from './EditorCode.svelte';

const meta = {
  title: 'Controls/Editor/Code',
  component: EditorCode,
  tags: ['autodocs'],
} satisfies Meta<EditorCode>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: "editor-title"
  }
};
