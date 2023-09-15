<script lang="ts">
  import { Resume } from '$lib/data/Resume'
  export const data: typeof Resume.work = Resume.work;  
  const t = new Intl.DateTimeFormat('en-GB', { month: "short", year: "numeric" })

  function formatDate(s: string) {
    return t.format(Date.parse(s));
  }
</script>

<div class="resume-work-experience-container">
  <h3>Work Experience</h3>
  {#each data as item}
    <div class="work-experience-item-header">
      <h4><a href="{item.url}">{item.name}</a></h4><span>|</span><span>{formatDate(item.startDate)} - {formatDate(item.endDate)}</span>
    </div>
    <p>{item.summary}</p>
    <ul>
      {#each item.highlights as highlight}
        <li>{highlight}</li>
      {/each}
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
