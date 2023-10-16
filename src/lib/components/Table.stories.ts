import type { Meta, StoryObj } from '@storybook/svelte';
import Table from './Table.svelte';

const meta = {
	title: 'Controls/Table',
	component: Table,
	tags: ['autodocs']
} satisfies Meta<Table>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
