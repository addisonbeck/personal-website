<script lang="ts">
  export let data: string[];
</script>
<div class="code-container">
  <div class="code-table">
    {#each data as line, i}
      <div class="row">
        <div class="table-cell line-number">
          {i + 1}
        </div>
        <div class="table-cell line-content">
          <div class="pre-text">{line}</div>
        </div>
      </div>
    {/each}
  </div>
</div>

<style>
  .code-table {
    white-space: pre;
    overflow: auto;
  }

  .row {
    display: grid;
    grid-template-columns: 35px auto;
    column-gap: 10px;
  }

  .code-table {
    font-family: monospace;
    padding: 0;
  }

  .line-number {
    -webkit-user-select: none;
    user-select: none;
    text-align: end;
  }

  .pre-text {
    margin: 0;
  }
</style>
