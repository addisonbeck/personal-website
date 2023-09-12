<script lang="ts">
  import './nav.css';

  export let title: { large: string, small: string, href: string } | null = { large: "ADDISON BECK", small: "AB:", href: "/" };
  export let sections: { title: string, href: string }[] =  [
    { title: "about", href: "about" },
    { title: "resume", href: "resume" },
    { title: "contact", href: "contact" },
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
