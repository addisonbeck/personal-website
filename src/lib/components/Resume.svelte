<script lang="ts">
  import ResumeContent from "./ResumeContent.svelte"
	import ResumeControls from "./ResumeControls.svelte";
  import name from "$lib/data/Name"

  export let mode: "json" | "html" = "json";
  $: fileName = "resume." + mode;

  function toggleMode() {
    mode = mode === "json" ? "html" : "json";
  }
</script>
<svelte:head>
    <title>Resume | {name.full}</title>
    <meta name="description" content="{name.full} is a software engineer with almost a decade in the field. {name.first} has worked on teams small and large, and loves OSS." />
</svelte:head>
<div class="resume-container-outer">
  <div class="resume-container-inner">
    <div class="resume-controls">
      <ResumeControls on:toggleMode="{toggleMode}" bind:fileName="{fileName}"/>
    </div>
    <div class="resume-content">
      <ResumeContent bind:mode="{mode}"/>
    </div>
  </div>
</div>

<style>
  .resume-container-outer {
    display: grid;
    grid-template-columns: 1fr minmax(300px, 1000px) 1fr;
    padding: 10px;
  }

  .resume-container-inner {
    grid-column: 2;
    border: 1px solid;
    border-radius: 10px;
    display: grid;
    grid-template-rows: auto 1fr;
  }
</style>
