<script lang="ts">
	import Resume from "$lib/types/Resume";
	import ResumePdf from "./ResumePdf.svelte";
	import ResumePlay from "./ResumePlay.svelte";
  
  export let resume: Resume = new Resume();
  export let mode: "html" | "json" = "json";
</script>

<ResumePlay bind:mode></ResumePlay>
<ResumePdf bind:data={resume}></ResumePdf>
