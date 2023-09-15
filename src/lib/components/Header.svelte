<script lang="ts">
  import Nav from './Nav.svelte';
  import ThemeToggle from './ThemeToggle.svelte';
</script>

<header>
  <div class="header">
    <Nav />
    <div class="theme-toggle-section">
      <ThemeToggle />
    </div>
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
  }
</style>
