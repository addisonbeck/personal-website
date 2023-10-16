<script lang="ts">
  import name from '$lib/data/Name'
  import urls from '$lib/data/Urls'
  import SiteTools from './SiteTools.svelte'
</script>
<div class="site-summary">
  {#await import('$lib/data/SiteTools') then tools}
    <div class="site-summary-heading">
      <h2>Hi, I'm {name.first}</h2>
    </div>
    <div class="site-summary-body">
      <p>
        I've been a software engineer for almost a decade.
        I've written code used by millions of people.
        This site in particular is built using:
      </p>
      <SiteTools tools={tools.default}></SiteTools>
      <p>
        You can check out the source code on <a href="{urls.githubProjectRepo.full}" target="_blank">GitHub</a>. 
        PR's are welcome 🤠
      </p>
      <p>
        If you want to read more about me you can grab my resume <a class="self-summary-link" href="/resume">here</a>. If you want to skip straight to sending over an offer you can get in touch with me <a class="self-summary-link" href="/contact">here</a>.
      </p>
    </div>
  {/await}
</div>

<style>
  .site-summary {
    grid-column: 2;
    display: grid;
    grid-template-rows: auto 1fr;
    grid-template-columns: 1fr 90% 1fr;
    border: 1px solid;
    min-height: 650px;
  }

  .site-summary-heading {
    grid-column: 2;
  }

  .site-summary-body {
    grid-column: 2;
    font-size: 20px;
  }
</style>
