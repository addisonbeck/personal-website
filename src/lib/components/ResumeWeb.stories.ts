import type { Meta, StoryObj } from '@storybook/svelte';
import ResumeWeb from './ResumeWeb.svelte';
import resume from "$lib/data/Resume";

const meta = {
	title: 'Components/Resume/Web',
	component: ResumeWeb,
	tags: ['autodocs']
} satisfies Meta<ResumeWeb>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const Hydrated: Story = {
  args: {
    data: resume
  }
};
