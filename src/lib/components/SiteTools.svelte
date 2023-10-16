<script lang="ts">
  import './sitetools.css';
  import Table from './Table.svelte'
  import TableRow from './TableRow.svelte'
  import TableRowItem from './TableRowItem.svelte'
  export let tools: { title: string, href: string, purpose: string, svg: string }[];
</script>

{#if tools}
  <Table>
    <TableRow slot="header">
      <TableRowItem>Tool</TableRowItem>
      <TableRowItem>Purpose</TableRowItem>
    </TableRow>
    {#each tools as tool}
      <TableRow>
        <TableRowItem>
          <img class="table-svg" src="{tool.svg}" alt="{tool.title} logo"/>
          <a href="{tool.href}">{tool.title}</a>
        </TableRowItem>
        <TableRowItem>
          {@html tool.purpose}
        </TableRowItem>
      </TableRow>
    {/each}
  </Table>
{/if}

<style>
  .table-svg {
    height: 1em;
    width: auto
  }
</style>
