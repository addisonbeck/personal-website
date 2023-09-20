<script lang="ts">
	import EditorControls from "./EditorControls.svelte";

  export let title: string
</script>

<div class="editor-container">
  <div class="editor-controls">
    <EditorControls bind:title="{title}">
      <slot name="controls"/>
    </EditorControls>
  </div>
  <div class="editor-content">
    <slot name="content"/>
  </div>
</div>

<style>
  .editor-container {
    border: 1px solid;
    border-radius: 10px;
    overflow: hidden;
  }
</style>
