<span class="table-cell">
  <slot/>
</span>

<style>
  .table-cell {
    padding: 10px;
    display: flex;
    align-items: center;
  }

  :global(.table-cell + .table-cell) {
    border-left: 1px solid;
  }
</style>

