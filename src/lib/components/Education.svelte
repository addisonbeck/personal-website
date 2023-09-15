<script lang="ts">
  import { Resume } from '$lib/data/Resume'
  export const data: typeof Resume.education = Resume.education;  

  function formatDate(s: string) {
    const dateFormat = new Intl.DateTimeFormat('en-GB', { year: "numeric" })
    return dateFormat.format(Date.parse(s));
  }
</script>

<div class="education-container">
  <h3>Education</h3>
  {#each data as item}
    <h4>{item.studyType} {item.area}</h4>
    <div><a href="{item.url}">{item.institution}</a> - {formatDate(item.endDate)}</div>
  {/each}
</div>
