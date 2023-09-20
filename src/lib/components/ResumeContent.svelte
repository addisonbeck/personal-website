<script lang="ts">
	import ResumeWeb from "./ResumeWeb.svelte";
	import EditorCode from "./EditorCode.svelte";
	import type { Resume } from "$lib/types/Resume";

  export let data: Resume;
  export let mode: "json" | "html" = "json";
  $: resumeJsonStringArray = data.toJson().split("\n");
</script>

{#if mode === "json"}
  <div class="resume-json">
    <EditorCode bind:data={resumeJsonStringArray}/>
  </div>
{/if}
{#if mode === "html"}
  <div class="resume-web">
    <ResumeWeb bind:data={data}/>
  </div>
{/if}
