import type { Meta, StoryObj } from '@storybook/svelte';
import Education from './Education.svelte';
import { education } from '$lib/data/Resume';

const meta = {
	title: 'Components/Resume/Education',
	component: Education,
	tags: ['autodocs']
} satisfies Meta<Education>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Hydrated: Story = {
  args: {
    data: education
  }
};

