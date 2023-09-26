import type { Meta, StoryObj } from '@storybook/svelte';
import ResumePdf from './ResumePdf.svelte';

const meta = {
	title: 'Controls/Button/Resume Download',
	component: ResumePdf,
	tags: ['autodocs']
} satisfies Meta<ResumePdf>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const OpenPdf: Story = {
	args: {
		action: 'open'
	}
};
