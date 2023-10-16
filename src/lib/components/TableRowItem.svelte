<span class="table-cell">
  <slot/>
</span>

<style>
  .table-cell {
    padding: 10px;
    display: grid;
    grid-auto-flow: column dense; 
    justify-content: start;
    align-items: center;
    column-gap: 5px;
  }

  :global(.table-cell + .table-cell) {
    border-left: 1px solid;
  }
</style>

