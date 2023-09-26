import type { Meta, StoryObj } from '@storybook/svelte';
import SiteTools from './SiteTools.svelte';

const meta = {
	title: 'Components/Home/Site Tools',
	component: SiteTools,
	tags: ['autodocs']
} satisfies Meta<SiteTools>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
