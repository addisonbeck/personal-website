<script lang="ts">
  export let headerAlignment: "center" | "start" = "center";
</script>

{#if $$slots.default || $$slots.header}
  <div class="table">
    {#if $$slots.header}
      <div class="table-header {headerAlignment}">
        <slot name="header"/>
      </div>
    {/if}
    <div class="table-body">
      <slot/>
    </div>
  </div>
{/if}

<style>
  .table {
    display: grid;
    grid-template-rows: auto 1fr;
    border-bottom: 1px solid;
  }

  .table-header {
    display: grid;
    grid-auto-flow: column;
    font-weight: 700;
  }

  :global(.table-header.center .table-row .table-cell) {
    justify-content: center;
  }

  .table-body {
    display: grid;
  }
</style>
