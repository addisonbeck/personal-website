import type { Meta, StoryObj } from '@storybook/svelte';
import BlobEditor from './BlobEditor.svelte';
import { json } from '$lib/data/Resume'

const meta = {
	title: 'Controls/Editor/Blob Editor',
	component: BlobEditor,
	tags: ['autodocs']
} satisfies Meta<BlobEditor>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
};

export const Populated: Story = {
  args: {
    value: json
  }
};
