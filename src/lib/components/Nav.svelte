<script lang="ts">
  import './nav.css';

  export let title: { title: string, href: string } | null = { title: "ADDISON BECK", href: "/" };
  export let sections: { title: string, href: string }[] =  [
    { title: "about", href: "about" },
    { title: "resume", href: "resume" },
    { title: "stats", href: "stats" },
    { title: "contact", href: "contact" },
  ]
  export let allCaps: boolean = true;
</script>

<div class="nav">
  {#if title?.title != null}
    <div class="title">
      <a class="title-link" href="{title.href}">{title.title}</a>
    </div>
  {/if}
  <div class="sections">
    {#if sections != null && sections.length > 0}
      {#each sections as section}
        <a class="section" class:uppercase={allCaps} href="{section.href}">{section.title}</a>
      {/each}
    {/if}
  </div>
</div>
