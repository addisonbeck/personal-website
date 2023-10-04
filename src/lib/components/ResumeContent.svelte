<script lang="ts">
	import ResumeWeb from "./ResumeWeb.svelte";
	import type { ResumeProperties } from "$lib/types/Resume";
	import Resume from "$lib/types/Resume";
	import BlobEditor from "./BlobEditor.svelte";

  export let data: Resume = new Resume();
  const originalData = data;
  
  export let mode: "json" | "html" = "json";

  $: resumeJson = originalData?.toJson();
  $: { 
    if (data != null) {
      let temp: ResumeProperties | undefined;
      try {
        temp = resumeJson ? 
          JSON.parse(resumeJson) :
          undefined;
      } catch {
        temp = data.properties;
      }
      data.properties = <ResumeProperties>temp;
    }
  };
</script>

{#if data != null}
  <div class="resume-json" hidden={mode != "json"}>
    <BlobEditor bind:value={resumeJson}></BlobEditor>
  </div>
  <div class="resume-web" hidden={mode != "html"}>
    <ResumeWeb bind:data={data}/>
  </div>
{/if}
