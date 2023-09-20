<script lang="ts">
	import ResumeWeb from "./ResumeWeb.svelte";
	import type { Resume } from "$lib/types/Resume";
	import BlobEditor from "./BlobEditor.svelte";

  export let data: Resume;
  export let mode: "json" | "html" = "json";
  $: resumeJson = data.toJson();
</script>

{#if mode === "json"}
  <div class="resume-json">
    <BlobEditor bind:value={resumeJson}></BlobEditor>
  </div>
{/if}
{#if mode === "html"}
  <div class="resume-web">
    <ResumeWeb bind:data={data}/>
  </div>
{/if}
