<script lang="ts">
  import SiteSummary from './SiteSummary.svelte'
  import name from '$lib/data/Name'
  const description = `${name.full} is a software engineer with a decade of experience. He is also a partner, father, home cook, and Mothman fan.`
</script>
<svelte:head>
    <title>{name.full}</title>
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
