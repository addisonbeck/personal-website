<script lang="ts">
  export let title: { large: string, small: string, href: string } | null = { large: "ADDISON BECK", small: "AB:", href: "/" };
  export let sections: { title: string, href: string }[] =  [
    // { title: "about", href: "/about" },
    { title: "resume", href: "/resume" },
    { title: "contact", href: "/contact" },
  ]
  export let allCaps: boolean = true;
</script>

<nav class="nav">
  {#if title?.large != null && title?.small != null}
    <div class="title">
      <a class="title-link title-large" href="{title.href}">{title.large}</a>
      <a class="title-link title-small" href="{title.href}">{title.small}</a>
    </div>
  {/if}
  <div class="sections">
    {#if sections != null && sections.length > 0}
      {#each sections as section}
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
