<script lang="ts">
  import ResumeHeader from "./ResumeHeader.svelte"
  import ResumeSummary from "./ResumeSummary.svelte"
  import Education from "./Education.svelte"
  import WorkExperience from "./WorkExperience.svelte"
  import Skills from "./Skills.svelte"
	import type { ResumeProperties } from "$lib/types/Resume";

  export let data: ResumeProperties | undefined;
</script>

<div class="resume-sections">
  {#if data?.basics}
    <ResumeHeader bind:data={data.basics}/>
    <ResumeSummary bind:data={data.basics}/>
  {/if}
  {#if data?.skills}
    <Skills bind:data={data.skills}/>
  {/if}
  {#if data?.work}
    <WorkExperience bind:data={data.work}/>
  {/if}
  {#if data?.education}
    <Education bind:data={data.education}/>
  {/if}
</div>
