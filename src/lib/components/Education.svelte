<script lang="ts">
	import type { Education } from '$lib/types/Resume';

  export let data: Education;

  function formatDate(s?: string, addSpace = false) {
    if (s == null) {
      return null;
    }
    const dateFormat = new Intl.DateTimeFormat('en-GB', { year: "numeric" })
    let output = dateFormat.format(Date.parse(s));
    if (addSpace) {
      output = ' - ' + s;
    }
    return output;
  }
</script>

{#if data && data[0]}
  <div class="education-container">
    <h3>Education</h3>
    {#each data as item}
      {#if item.studyType && item.area}
        <h4>{item.studyType} {item.area}</h4>
        <div>
          {#if item.institution}
            {#if item.url}
              <a href="{item.url}" target="_blank">{item.institution}</a>
            {:else}
              {item.institution}
            {/if}
          {/if}
          {#if item.endDate}
            {formatDate(item.endDate, item.institution != null)}
          {/if}
        </div>
      {/if}
    {/each}
  </div>
{/if}
