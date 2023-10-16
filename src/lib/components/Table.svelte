<div class="table">
  {#if $$slots.header}
    <div class="table-header">
      <slot name="header"/>
    </div>
  {/if}
  <div class="table-body">
    <slot/>
  </div>
</div>

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

  :global(.table-header * *) {
    text-align: center;
  }

  .table-body {
    display: grid;
  }
</style>
