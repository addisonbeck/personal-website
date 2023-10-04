<script lang="ts">
	import type { Skills } from '$lib/types/Resume';

  export let data: Skills | undefined;
</script>

{#if data && data[0]}
  <div class="resume-summary-container">
    <h3>Skills</h3>
    <ul>
      {#each data as item}
        {#if item?.name}
          <li>{item.name}</li>
        {/if}
      {/each}
    </ul>
  </div>
{/if}
