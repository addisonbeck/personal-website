import type { Meta, StoryObj } from '@storybook/svelte';
import SiteSummary from './SiteSummary.svelte';

const meta = {
	title: 'Components/Home/Site Summary',
	component: SiteSummary,
	tags: ['autodocs']
} satisfies Meta<SiteSummary>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
