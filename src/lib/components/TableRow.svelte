<div class="table-row">
  <slot/>
</div>

<style>
  .table-row {
    display: grid;
    grid-auto-flow: column;
    grid-auto-columns: 1fr;
    border-right: 1px solid;
    border-left: 1px solid;
    border-top: 1px solid;
  }
</style>
