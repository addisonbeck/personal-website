import type { Meta, StoryObj } from '@storybook/svelte';
import BlobEditor from './BlobEditor.svelte';

const meta = {
  title: 'Controls/Editor/Blob Editor',
  component: BlobEditor,
  tags: ['autodocs'],
} satisfies Meta<BlobEditor>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
};
