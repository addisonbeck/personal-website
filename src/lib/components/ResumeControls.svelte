<script lang="ts">
	import ResumePdf from "./ResumePdf.svelte";
	import ResumePlay from "./ResumePlay.svelte";
	import { createEventDispatcher } from 'svelte';

  export let fileName: string = "resume.html";

	const dispatch = createEventDispatcher();

	function toggleMode() {
		dispatch('toggleMode');
	}
</script>

<div class="resume-controls">
  <div class="filename">
    { fileName } 
  </div>
  <div class="actions">
    <ResumePlay on:play={toggleMode}></ResumePlay>
    <ResumePdf></ResumePdf>
  </div>
</div>

<style>
  .resume-controls {
    display: grid;
    grid-template-columns: 1fr auto;
    padding: 5px 5px 5px 20px;
    border-bottom: 1px dotted;
    align-items: center;
  }

  .resume-controls .actions {
    display: grid;
    grid-auto-flow: column dense;
    column-gap: 10px;
  }
</style>
