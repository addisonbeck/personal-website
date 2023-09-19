<script lang="ts">
  import { work } from '$lib/data/Resume'

  function formatDate(s: string) {
    const dateFormat = new Intl.DateTimeFormat('en-GB', { month: "short", year: "numeric" })
    return dateFormat.format(Date.parse(s));
  }
</script>

<div class="resume-work-experience-container">
  <h3>Work Experience</h3>
  {#each work as item}
    <div class="work-experience-item-header">
      <h4><a href="{item.url}" target="_blank">{item.name}</a></h4><span>|</span><span>{formatDate(item.startDate)} - {formatDate(item.endDate)}</span>
    </div>
    <p>{item.summary}</p>
    <ul>
      {#if typeof item.highlights != undefined}
        {#each item.highlights as highlight}
          <li>{highlight}</li>
        {/each}
      {/if}
    </ul>
  {/each}
</div>

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
