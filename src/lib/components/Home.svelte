<script lang="ts">
  import SiteSummary from './SiteSummary.svelte'
  const description = "Addison Beck is a software engineer with a decade of experience. He is also a partner, father, home cook, and Mothman fan."
</script>
<svelte:head>
    <title>Addison Beck</title>
    <meta name="description" content={description} />
</svelte:head>
<div class="home-container">
  <SiteSummary />
</div>

<style>
  .home-container {
    display: grid;
    grid-template-columns: 1fr minmax(320px, 1000px) 1fr;
  }
</style>
