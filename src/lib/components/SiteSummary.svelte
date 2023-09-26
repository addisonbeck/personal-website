<script lang="ts">
  import SiteTools from './SiteTools.svelte'
  import name from '$lib/data/Name'
  import urls from '$lib/data/Urls'

  async function load() {
    const svelteLogo = await import(`$lib/assets/sveltelogo.svg?raw`);
    const typescriptLogo = await import('$lib/assets/tslogo.svg?raw');
    const htmlLogo = await import('$lib/assets/htmllogo.svg?raw');
    const cssLogo = await import('$lib/assets/csslogo.svg?raw');
    const doLogo = await import ('$lib/assets/dologo.svg?raw');
    const storybookLogo = await import('$lib/assets/storybooklogo.svg?raw');
    const tools: { title: string, href: string, purpose: string, svg: string}[] =  [
      { title: "Svelte", href: "https://svelte.dev", purpose: "As a front-end component framework", svg: svelteLogo.default },
      { title: "Typescript", href: "https://www.typescriptlang.org", purpose: "To make Javascript more fun to write", svg: typescriptLogo.default},
      { title: "HTML", href: "https://html.spec.whatwg.org", purpose: "For obvious reasons", svg: htmlLogo.default},
      { title: "CSS with CSS Grid", href: "https://www.w3schools.com/css/css_grid.asp", purpose: "Also for obvious reasons", svg: cssLogo.default},
      { title: "Digital Ocean", href: "https://www.digitalocean.com/", purpose: "As a hosting platform", svg: doLogo.default},
      { title: "Storybook", href: "https://storybook.js.org", purpose: "During development as a component library", svg: storybookLogo.default},
    ]
    return tools;
  }
</script>
<div class="site-summary">
  {#await load() then tools}
    <div class="site-summary-heading">
      <h2>Hi, I'm {name.first}</h2>
    </div>
    <div class="site-summary-body">
      <p>
        I've been a software engineer for almost a decade.
        I've written code used by millions of people.
        This site in particular is built using:
      </p>
      <SiteTools {tools}/>
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
