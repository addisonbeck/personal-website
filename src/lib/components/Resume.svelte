<script lang="ts">
  import name from "$lib/data/Name"
  import resume from "$lib/data/Resume"
	import type { Resume } from "$lib/types/Resume";

  let data: Resume = resume;

  export let mode: "json" | "html" = "json";
  $: fileName = "resume." + mode;

  const loadEditor = async () => {
    const editor = (await import('./Editor.svelte')).default;
    const controls = (await import('./ResumeControls.svelte')).default;
    const content = (await import('./ResumeContent.svelte')).default;

    return { editor, controls, content };
  }
</script>

<svelte:head>
    <title>Resume | {name.full}</title>
    <meta name="description" content="{name.full} is a software engineer with almost a decade in the field. {name.first} has worked on teams small and large, and loves OSS." />
</svelte:head>

<div class="resume-container-outer">
  <div class="resume-container-inner">
    {#await loadEditor() then Editor}
      <Editor.editor bind:title={fileName}>
        <Editor.controls bind:mode slot="controls" bind:resume={data}/>
        <div class="resume-content" slot="content">
          <Editor.content bind:mode bind:data/>
        </div>
      </Editor.editor>
    {/await}
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
    display: grid;
    grid-template-rows: auto 1fr;
  }

  .resume-content {
    max-height: 700px;
    overflow: auto;
  }
</style>
