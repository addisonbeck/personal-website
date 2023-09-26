<script lang="ts">
  export let title = "";
</script>

<div class="editor-controls">
  <div class="title">
    { title } 
  </div>
  <div class="actions">
    <slot/>
  </div>
</div>

<style>
  .editor-controls {
    display: grid;
    grid-template-columns: 1fr auto;
    padding: 5px 5px 5px 20px;
    border-bottom: 1px dotted;
    align-items: center;
  }

  .editor-controls .actions {
    display: grid;
    grid-auto-flow: column dense;
    column-gap: 5px;
    justify-items: end;
  }
</style>
