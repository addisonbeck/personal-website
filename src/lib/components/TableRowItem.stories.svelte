<script context="module">
  import TableRowItem from './TableRowItem.svelte';
  import { Story } from '@storybook/addon-svelte-csf';

  export const meta = {
    title: "Controls/Table/Row Item",
    component: TableRowItem,
    tags: ['autodocs']
  }
</script>

<Story name="Default">
  <TableRowItem></TableRowItem>
</Story>

<Story name="Hydrated">
  <TableRowItem>I'm a row item!</TableRowItem>
</Story>
