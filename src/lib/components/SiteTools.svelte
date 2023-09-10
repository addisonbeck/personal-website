<script lang="ts">
  import './siteTools.css';
  import svelteLogo from '$lib/assets/sveltelogo.svg';
  import typescriptLogo from '$lib/assets/tslogo.svg';
  import htmlLogo from '$lib/assets/htmllogo.svg';
  import cssLogo from '$lib/assets/csslogo.svg';
  import doLogo from '$lib/assets/dologo.svg';
  import storybookLogo from '$lib/assets/storybooklogo.svg';

  export let tools: { title: string, href: string, purpose: string, svg string}[] =  [
    { title: "Svelte", href: "https://svelte.dev", purpose: "As a front-end component framework", svg: svelteLogo },
    { title: "Typescript", href: "https://www.typescriptlang.org", purpose: "To make Javascript more fun to write", svg: typescriptLogo},
    { title: "HTML", href: "https://html.spec.whatwg.org", purpose: "For obvious reasons", svg: htmlLogo},
    { title: "CSS with CSS Grid", href: "https://www.w3schools.com/css/css_grid.asp", purpose: "Also for obvious reasons", svg: cssLogo},
    { title: "Digital Ocean Apps", href: "https://www.digitalocean.com/go/app-platform", purpose: "As a hosting platform", svg: doLogo},
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
          <a href="{tool.href}">{tool.title}</a>
        </div>
        <div class="cell right-cell">
          {tool.purpose}
        </div>
      </div>
    {/each}
  </div>
</div>
