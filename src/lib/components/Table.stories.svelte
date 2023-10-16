<script context="module">
  import Table from './Table.svelte';
  import TableRow from './TableRow.svelte';
  import TableRowItem from './TableRowItem.svelte';
  import { Story, Template } from '@storybook/addon-svelte-csf';

  export const meta = {
    title: "Controls/Table",
    component: Table,
    tags: ['autodocs']
  }
</script>

<Story name="Default">
  <Table></Table>
</Story>

<script lang="ts">
  const headerItems: string[] = [
    "Header 1",
    "Header 2"
  ]
  const rows: string[][] = [
    ["Row 1:1", "Row 2:2"],
    ["Row 2 1", "Row 2 2"]
  ]
</script>

<Template let:args>
  <Table {...args}>
    <svelte:fragment slot="header">
      {#if !args.hideHeader}
        <TableRow>
          {#each headerItems as header}
            <TableRowItem>{@html header}</TableRowItem>
          {/each}
        </TableRow>
      {/if}
    </svelte:fragment>
    {#each rows as row}
      <TableRow>
        {#each row as item}
          <TableRowItem>{@html item}</TableRowItem>
        {/each}
      </TableRow>
    {/each}
  </Table>
</Template>

<Story name="Hydrated"/>
<Story name="Start-aligned Header" args={{headerAlignment: "start"}}/>
<Story name="No Header" args={{hideHeader: true}}/>
