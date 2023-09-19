<script lang="ts">
  import { education } from '$lib/data/Resume'
  function formatDate(s?: string) {
    if (s == null) {
      return null;
    }
    const dateFormat = new Intl.DateTimeFormat('en-GB', { year: "numeric" })
    return ` - ${dateFormat.format(Date.parse(s))}`;
  }
</script>

<div class="education-container">
  <h3>Education</h3>
  {#each education as item}
    <h4>{item.studyType} {item.area}</h4>
    <div><a href="{item.url}" target="_blank">{item.institution}</a>{formatDate(item.endDate)}</div>
  {/each}
</div>
