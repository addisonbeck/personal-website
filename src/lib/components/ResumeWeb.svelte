<script lang="ts">
	import type { Resume } from "$lib/types/Resume";
  import ResumeSections from "./ResumeSections.svelte"
  export let data: Resume;
</script>
<div id="resume" class="resume">
  <ResumeSections bind:data={data.properties}/>
</div>

<style>
  .resume {
    padding: 10px 10px 10px 10px;
  }
</style>
