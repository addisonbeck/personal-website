import type { Meta, StoryObj } from '@storybook/svelte';
import DropdownButton from './DropdownButton.svelte';

const meta = {
  title: 'Controls/Button/Dropdown',
  component: DropdownButton,
  tags: ['autodocs'],
} satisfies Meta<DropdownButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
};
