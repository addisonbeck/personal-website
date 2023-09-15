<script lang="ts">
  import svelteLogo from '$lib/assets/sveltelogo.svg';
  import typescriptLogo from '$lib/assets/tslogo.svg';
  import htmlLogo from '$lib/assets/htmllogo.svg';
  import cssLogo from '$lib/assets/csslogo.svg';
  import doLogo from '$lib/assets/dologo.svg';
  import storybookLogo from '$lib/assets/storybooklogo.svg';

  export let tools: { title: string, href: string, purpose: string, svg: string}[] =  [
    { title: "Svelte", href: "https://svelte.dev", purpose: "As a front-end component framework", svg: svelteLogo },
    { title: "Typescript", href: "https://www.typescriptlang.org", purpose: "To make Javascript more fun to write", svg: typescriptLogo},
    { title: "HTML", href: "https://html.spec.whatwg.org", purpose: "For obvious reasons", svg: htmlLogo},
    { title: "CSS with CSS Grid", href: "https://www.w3schools.com/css/css_grid.asp", purpose: "Also for obvious reasons", svg: cssLogo},
    { title: "Digital Ocean", href: "https://www.digitalocean.com/", purpose: "As a hosting platform", svg: doLogo},
    { title: "Storybook", href: "https://storybook.js.org", purpose: "During development as a component library", svg: storybookLogo},
  ]
</script>

<div class="site-tools">
  <div class="site-tools-heading">
    <span class="cell left-cell">Tool</span>
    <span class="cell right-cell">Purpose</span>
  </div>
  <div class="site-tools-body">
    {#each tools as tool}
      <div class="site-tools-item">
        <div class="site-tools-item-link cell left-cell">
          <img class="site-tools-item-link-svg" src="{tool.svg}" alt="{tool.title} logo">
          <a href="{tool.href}" target="_blank">{tool.title}</a>
        </div>
        <div class="cell right-cell">
          {tool.purpose}
        </div>
      </div>
    {/each}
  </div>
</div>

<style>
  .site-tools {
    display: grid;
    grid-template-rows: auto 1fr;
  }

  .site-tools-heading {
    display: grid;
    grid-template-columns: 1fr 1fr;
    border-top: 1px solid;
    text-align: center;
    font-weight: 700; 
  }

  .site-tools-body {
    display: grid;
    grid-auto-flow: row;
  }

  .site-tools-item {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }

  .cell {
    padding: 10px;
  }

  .left-cell {
    border: 1px solid;
    border-right: 0;
    border-top: 0;
  }

  .right-cell {
    border: 1px solid;
    border-top: 0;
  }

  .site-tools-item-link {
    display: grid;
    grid-template-columns: auto 1fr;
    align-items: center;
    column-gap: 20px;
  }

  .site-tools-item-link-svg {
    height: 1em;
    width: auto;
  }

  @media (max-width: 400px) {
    .site-tools-item-link {
      grid-template-columns: 1fr;
      grid-template-rows: 1fr 1fr;
      align-items: center;
      justify-items: center;
    }
  }
</style>
