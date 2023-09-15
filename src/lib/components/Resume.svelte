<script lang="ts">
  import ResumePdf from "./ResumePdf.svelte"
  import ResumeWeb from "./ResumeWeb.svelte"
</script>
<svelte:head>
    <title>Resume | Addison Beck</title>
    <meta name="description" content="Addison Beck is a software engineer with almost a decade in the field. Addison has worked on teams small and large, and loves OSS." />
</svelte:head>
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
