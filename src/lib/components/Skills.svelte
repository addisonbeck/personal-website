<script lang="ts">
	import type { Skills } from '$lib/types/Resume';

  export let data: Skills;
</script>

<div class="resume-summary-container">
  <h3>Skills</h3>
  <ul>
    {#each data as item}
      <li>{item.name}</li>
    {/each}
  </ul>
</div>
