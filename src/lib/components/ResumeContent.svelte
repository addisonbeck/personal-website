<script lang="ts">
	import ResumeWeb from "./ResumeWeb.svelte";
	import type { Resume, ResumeProperties } from "$lib/types/Resume";
	import BlobEditor from "./BlobEditor.svelte";

  export let data: Resume;
  const originalData = data;
  
  export let mode: "json" | "html" = "json";

  $: resumeJson = originalData.toJson();
  $: { 
    let temp: ResumeProperties;
    try {
      temp = JSON.parse(resumeJson);
    } catch {
      temp = data.properties;
    }
    data.properties = <ResumeProperties>temp;
  };
</script>

<div class="resume-json" hidden={mode != "json"}>
  <BlobEditor bind:value={resumeJson}></BlobEditor>
</div>
<div class="resume-web" hidden={mode != "html"}>
  <ResumeWeb bind:data={data}/>
</div>
