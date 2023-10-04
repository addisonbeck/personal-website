<script lang="ts">
  import config from "$lib/data/Header"
  export let allCaps = true;
</script>

<nav class="nav">
  {#if config?.title?.large != null && config?.title?.small != null}
    <div class="title">
      <a class="title-link title-large" href="{config?.title.href}">{config?.title.large}</a>
      <a class="title-link title-small" href="{config?.title.href}">{config?.title.small}</a>
    </div>
  {/if}
  <div class="sections">
    {#if config?.sections != null && config?.sections.length > 0}
      {#each config?.sections as section}
        <a class="section" class:uppercase={allCaps} href="{section.href}">{section.title}</a>
      {/each}
    {/if}
  </div>
</nav>

<style>
  .nav {
    display: grid;
    grid-template-columns: minmax(min-content, 1fr) auto;
    align-items: center;
    column-gap: 10px;
  }

  .nav .title .title-link {
    line-height: 1;
    font-weight: 700;
    font-size: 14px;
    text-decoration: none;
  }

  .nav .title .title-small {
    display: none;
  }

  .nav .sections {
    display: grid;
    grid-auto-flow: column dense;
    column-gap: 10px;
    font-size: 12px;
    padding-right: 5px;
  }

  .nav .sections .section {
    text-underline-offset: 10px;
  }

  @media screen and (max-width: 500px) {
    .nav .title .title-large {
       display: none;
    }

    .nav .title .title-small {
       display: inherit;
    }
  }
</style>
