import type SiteTools from '../types/SiteTools';

async function load(): Promise<SiteTools> {
  const svelteLogo = await import(`$lib/assets/sveltelogo.svg`);
  const typescriptLogo = await import('$lib/assets/tslogo.svg');
  const htmlLogo = await import('$lib/assets/htmllogo.svg');
  const cssLogo = await import('$lib/assets/csslogo.svg');
  const doLogo = await import ('$lib/assets/dologo.svg');
  const storybookLogo = await import('$lib/assets/storybooklogo.svg');
  const tools: SiteTools =  [
    { title: "Svelte", href: "https://svelte.dev", purpose: "As a front-end component framework", svg: svelteLogo.default },
    { title: "Typescript", href: "https://www.typescriptlang.org", purpose: "To make Javascript more fun to write", svg: typescriptLogo.default},
    { title: "HTML", href: "https://html.spec.whatwg.org", purpose: "For obvious reasons", svg: htmlLogo.default},
    { title: "CSS with CSS Grid", href: "https://www.w3schools.com/css/css_grid.asp", purpose: "Also for obvious reasons", svg: cssLogo.default},
    { title: "Digital Ocean", href: "https://www.digitalocean.com/", purpose: "As a hosting platform", svg: doLogo.default},
    { 
      title: "Storybook",
      href: "https://storybook.js.org",
      purpose: "<span>During development as a component library. You can find mine at <a href=\"https://storybook.addisonbeck.com\">storybook.addisonbeck.com</a></span>",
      svg: storybookLogo.default
    },
  ]
  return tools;
}

export default load;

