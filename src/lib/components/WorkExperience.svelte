<script lang="ts">
	import type { Work } from '$lib/types/Resume';

  export let data: Work;

  function formatDate(s: string) {
    const dateFormat = new Intl.DateTimeFormat('en-GB', { month: "short", year: "numeric" })
    return dateFormat.format(Date.parse(s));
  }
</script>

{#if data && data[0]}
  <div class="resume-work-experience-container">
    <h3>Work Experience</h3>
    {#each data as item}
      {#if item.name}
        <div class="work-experience-item-header">
          <h4>
            {#if item.url}
              <a href="{item.url}" target="_blank">
                {item.name}
              </a>
            {:else}
              {item.name}
            {/if}
          </h4>
          {#if item.startDate && item.endDate}
            <span>|</span>
            <span>
              {formatDate(item.startDate)} 
              - {formatDate(item.endDate)}
            </span>
          {/if}
        </div>
        {#if item.summary}
          <p>{item.summary}</p>
        {/if}
        {#if item.highlights && item.highlights[0]}
          <ul>
            {#each item.highlights as highlight}
              <li>{highlight}</li>
            {/each}
          </ul>
        {/if}
      {/if}
    {/each}
  </div>
{/if}

<style>
  .work-experience-item-header {
    padding-top: 10px;
    display: grid;
    grid-template-columns: auto auto 1fr;
    align-items: end;
    column-gap: 5px;
  }

  .work-experience-item-header * {
    margin: 0;
  }
</style>
