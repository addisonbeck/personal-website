<script lang="ts">
  import { Resume } from '$lib/data/Resume'
  export const data: typeof Resume.skills = Resume.skills;  
</script>

<div class="resume-summary-container">
  <h3>Skills</h3>
  <ul>
    {#each data as item}
      <li>{item.name}</li>
    {/each}
  </ul>
</div>
