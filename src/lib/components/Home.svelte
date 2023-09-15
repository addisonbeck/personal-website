<script lang="ts">
  import SiteSummary from './SiteSummary.svelte'
</script>
<svelte:head>
    <title>Addison Beck</title>
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
