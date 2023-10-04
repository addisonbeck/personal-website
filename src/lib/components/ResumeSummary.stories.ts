import type { Meta, StoryObj } from '@storybook/svelte';
import ResumeSummary from './ResumeSummary.svelte';
import { basics } from "$lib/data/Resume";

const meta = {
	title: 'Components/Resume/Summary',
	component: ResumeSummary,
	tags: ['autodocs']
} satisfies Meta<ResumeSummary>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Hydrated: Story = {
  args: {
    data: basics
  }
};
