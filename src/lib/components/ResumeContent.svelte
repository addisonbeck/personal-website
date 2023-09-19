<script lang="ts">
  import ResumeJson from "./ResumeJson.svelte"
	import ResumeWeb from "./ResumeWeb.svelte";
  export let mode: "json" | "html" = "json";

</script>
<div class="resume-content-container">
  {#if mode === "json"}
    <div class="resume-json">
      <ResumeJson/>
    </div>
  {/if}
  {#if mode === "html"}
    <div class="resume-web">
      <ResumeWeb/>
    </div>
  {/if}
</div>
<style>
  .resume-content-container {
    display: grid;
    grid-template-columns: 1fr minmax(300px, 1000px) 1fr;
  }

  .resume-json, .resume-web {
    grid-column: 2
  }
</style>
