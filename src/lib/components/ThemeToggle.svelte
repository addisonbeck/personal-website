<script lang="ts">
  import Button from "./Button.svelte"
  export let svg: string;
  let config = {
    id: "themeToggle",
    type: "round"
  }

  function click() {
    const isDark = localStorage.getItem('theme') === "dark" || (!('theme' in localStorage) && preference === 'dark')
    if (isDark) {
        localStorage.setItem('theme', 'light');
        document.documentElement.classList.remove('dark');
        document.documentElement.classList.add('light');
    } else {
        localStorage.setItem('theme', 'dark');
        document.documentElement.classList.remove('light');
        document.documentElement.classList.add('dark');
    }
  }
</script>
<div class="theme-toggle-container">
  <Button bind:id={config.id} bind:type={config.type} on:click={click}>
    {@html svg} 
  </Button>
</div>

<style>
  .theme-toggle-container {
    text-align: center;
  }
</style>
