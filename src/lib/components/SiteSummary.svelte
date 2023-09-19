<script lang="ts">
  import SiteTools from './SiteTools.svelte'
</script>

<div class="site-summary">
  <div class="site-summary-heading">
    <h2>Hi, I'm Addison</h2>
  </div>
  <div class="site-summary-body">
    <p>
      I've been a software engineer for almost a decade.
      I've written code used by millions of people.
      This site in particular is built using:
    </p>
    <SiteTools />
    <p>
      You can check out the source code on <a href="https://github.com/addisonbeck/personal-website" target="_blank">GitHub</a>. 
      PR's are welcome 🤠
    </p>
    <p>
      <strong>Yes, yes,</strong> I understand that this stack might be overkill for a small personal site. I don't have a boss here! I hope you like it.
    </p>
    <p>
      If you want to read more about me you can do that <a class="site-summary-link" href="/about">here</a>. If after that you want my resume, you can grab that <a class="self-summary-link" href="/resume">here</a>. If you want to skip straight to sending over an offer you can get in touch with me <a class="self-summary-link" href="/contact">here</a>.
    </p>
  </div>
</div>

<style>
  .site-summary {
    grid-column: 2;
    display: grid;
    grid-template-rows: auto 1fr;
    grid-template-columns: 1fr 90% 1fr;
    border: 1px solid;
  }

  .site-summary-heading {
    grid-column: 2;
  }

  .site-summary-body {
    grid-column: 2;
    font-size: 20px;
  }
</style>
