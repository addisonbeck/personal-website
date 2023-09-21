<script lang="ts">
	import type { Resume } from "$lib/types/Resume";
	import ResumePdf from "./ResumePdf.svelte";
	import ResumePlay from "./ResumePlay.svelte";
  
  export let resume: Resume;
  export let mode: "html" | "json";
</script>

<ResumePlay bind:mode></ResumePlay>
<ResumePdf bind:data={resume}></ResumePdf>
