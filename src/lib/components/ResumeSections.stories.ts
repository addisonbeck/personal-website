import type { Meta, StoryObj } from '@storybook/svelte';
import ResumeSections from './ResumeSections.svelte';
import { properties } from "$lib/data/Resume";

const meta = {
	title: 'Components/Resume/Sections',
	component: ResumeSections,
	tags: ['autodocs']
} satisfies Meta<ResumeSections>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const Hydrated: Story = {
  args: {
    data: properties
  }
};
