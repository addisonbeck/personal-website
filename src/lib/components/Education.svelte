<script lang="ts">
  import { Resume } from '$lib/data/Resume'
  export let data: typeof Resume.education = Resume.education;  
</script>

<div class="education-container">
  <h3>Education</h3>
  {#each data as item}
    <h4>{item.studyType} {item.area}</h4>
    <div><a href="{item.url}">{item.institution}</a> - {item.endDate}</div>
  {/each}
</div>
