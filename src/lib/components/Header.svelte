<script lang="ts">
  import Nav from './Nav.svelte';
  import ThemeToggle from './ThemeToggle.svelte';

  async function load() {
    const themeToggle = (await import(`$lib/assets/themetoggle.svg?raw`)).default;
    return themeToggle;
  }
</script>

<header>
  <div class="header">
    {#await load() then themeSvg}
      <Nav />
      <div class="theme-toggle-section">
        <ThemeToggle svg={themeSvg}/>
      </div>
    {/await}
  </div>
</header>

<style>
  * {
    --header-bg-color: var(--primary);
    --header-border-color: var(--accent);
  }

  .header {
    padding: 15px 20px;
    background-color: var(--header-bg-color);
    border-bottom: 1px solid var(--header-border-color);
    display: grid;
    grid-template-columns: 1fr auto;
    min-height: 36px;
    align-items: center;
  }
</style>
