<script lang="ts">
  import ResumeSections from "./ResumeSections.svelte"
</script>
<div id="resume" class="resume">
  <ResumeSections/>
</div>
<style>
  .resume {
    grid-column: 2;
    display: grid;
    grid-auto-flow: row;
    padding: 10px;
  }
</style>
