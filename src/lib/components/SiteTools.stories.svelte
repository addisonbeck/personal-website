<script context="module">
  import SiteTools from './SiteTools.svelte';
  import { Story } from '@storybook/addon-svelte-csf';

  export const meta = {
    title: "Components/Home/Site Tools",
    component: SiteTools,
    tags: ['autodocs']
  }
</script>

<Story name="Default">
  <SiteTools></SiteTools>
</Story>

<script lang="ts">
  async function load() {
    const tools = await (await import ('../data/SiteTools')).default();
    return tools;
  } 
</script>

<Story name="Hydrated">
  {#await load() then tools}
    <SiteTools tools={tools}></SiteTools>
  {/await}
</Story>
