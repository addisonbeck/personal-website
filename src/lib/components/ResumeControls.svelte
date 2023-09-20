<script lang="ts">
	import type { Resume } from "$lib/types/Resume";
	import ResumePdf from "./ResumePdf.svelte";
	import ResumePlay from "./ResumePlay.svelte";
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();
  
  export let resume: Resume;

	function toggleMode() {
		dispatch('toggleMode');
	}
</script>

<ResumePlay on:play={toggleMode}></ResumePlay>
<ResumePdf bind:data={resume}></ResumePdf>
