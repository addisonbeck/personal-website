import type { Meta, StoryObj } from '@storybook/svelte';
import ResumeHeader from './ResumeHeader.svelte';
import { basics } from '$lib/data/Resume';

const meta = {
	title: 'Components/Resume/Header',
	component: ResumeHeader,
	tags: ['autodocs']
} satisfies Meta<ResumeHeader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const Hydrated: Story = {
  args: {
    data: basics
  }
};
