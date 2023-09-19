<script lang="ts">
  import { json } from "$lib/data/Resume"
  const jsonArray = json.split("\n");
</script>
<div id="resumeJson" class="resume-json">
  <div class="json-table">
    {#each jsonArray as line, i}
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
  .json-table {
    display: grid;
    grid-template-rows: 1fr;
    white-space: pre;
    overflow: auto;
  }

  .row {
    display: grid;
    grid-template-columns: 35px auto;
    column-gap: 10px;
  }

  .table-cell {
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
