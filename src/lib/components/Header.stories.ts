import type { Meta, StoryObj } from '@storybook/svelte';
import Header from './Header.svelte';

const meta = {
  title: 'Components/Layout/Header',
  component: Header,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<Header>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
};
