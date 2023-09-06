import type { Preview } from '@storybook/svelte';
import '../src/lib/components/layout.css';

const preview: Preview = {
  parameters: {
    themes: {
      default: 'light',
      list: [
        { name: 'light', class: 'light', color: '#ffffff' },
        { name: 'dark', class: 'dark', color: '#000000' }
      ],
    },
  },
};

export default preview;
