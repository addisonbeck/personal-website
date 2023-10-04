import type { Meta, StoryObj } from '@storybook/svelte';
import Skills from './Skills.svelte';
import { skills } from '$lib/data/Resume';

const meta = {
	title: 'Components/Resume/Skills',
	component: Skills,
	tags: ['autodocs']
} satisfies Meta<Skills>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const Hydrated: Story = {
  args: {
    data: skills
  }
};
