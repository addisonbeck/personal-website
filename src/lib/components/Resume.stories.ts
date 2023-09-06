import type { Meta, StoryObj } from '@storybook/svelte';
import Resume from './Resume.svelte';

const meta = {
  title: 'Resume',
  component: Resume,
  tags: ['autodocs'],
} satisfies Meta<Resume>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
};
