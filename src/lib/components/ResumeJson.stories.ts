import type { Meta, StoryObj } from '@storybook/svelte';
import ResumeJson from './ResumeJson.svelte';

const meta = {
  title: 'Components/Resume/Json',
  component: ResumeJson,
  tags: ['autodocs'],
} satisfies Meta<ResumeJson>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
};
