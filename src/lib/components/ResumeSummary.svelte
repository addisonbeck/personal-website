<script lang="ts">
	import type { Basics } from '$lib/types/Resume';

  export let data: Basics | undefined;
</script>

{#if data?.summary}
  <div class="resume-summary-container">
    <p>{data.summary}</p>
  </div>
{/if}
