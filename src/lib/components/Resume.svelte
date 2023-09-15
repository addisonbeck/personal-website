<script lang="ts">
  import ResumePdf from "./ResumePdf.svelte"
  import ResumeWeb from "./ResumeWeb.svelte"
</script>

<div class="resume-container">
  <ResumePdf/>
  <ResumeWeb/>
</div>

<style>
  .resume-container {
    display: grid;
    grid-template-columns: 1fr minmax(320px, 1000px) 1fr;
  }
</style>
