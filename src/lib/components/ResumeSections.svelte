<script lang="ts">
  import ResumeHeader from "./ResumeHeader.svelte"
  import ResumeSummary from "./ResumeSummary.svelte"
  import Education from "./Education.svelte"
  import WorkExperience from "./WorkExperience.svelte"
  import Skills from "./Skills.svelte"
	import type { ResumeProperties } from "$lib/types/Resume";

  export let data: ResumeProperties;
</script>

<div class="resume-sections">
  <ResumeHeader bind:data={data.basics}/>
  <ResumeSummary bind:data={data.basics}/>
  <Skills bind:data={data.skills}/>
  <WorkExperience bind:data={data.work}/>
  <Education bind:data={data.education}/>
</div>
