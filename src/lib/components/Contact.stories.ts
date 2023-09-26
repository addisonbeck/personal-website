import type { Meta, StoryObj } from '@storybook/svelte';
import Contact from './Contact.svelte';

const meta = {
	title: 'Components/Contact',
	component: Contact,
	tags: ['autodocs']
} satisfies Meta<Contact>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
