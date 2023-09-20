import type { Meta, StoryObj } from '@storybook/svelte';
import Nav from './Nav.svelte';

const meta = {
  title: 'Components/Layout/Header/Nav',
  component: Nav,
  tags: ['autodocs'],
} satisfies Meta<Nav>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
};

export const Lowercase: Story = {
  args: {
    allCaps: false, 
  }
};

export const NoTitle: Story = {
  args: {
    title: null,
  },
};

export const NoHref: Story = {
  args: {
    title: { large: "No Link", small: "NL:" },
  },
};

export const NoSections: Story = {
  args: {
    sections: null,
  },
};

