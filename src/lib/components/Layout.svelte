<script lang="ts">
  import Header from './Header.svelte';
  import './layout.css'
</script>
<div class="root-container">
  <div class="header-section">
    <Header />
  </div>
  <div class="main-section">
    <main>
      <slot />
    </main>
  </div>
</div>
