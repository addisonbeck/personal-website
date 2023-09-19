<script lang="ts">
  import { skills } from '$lib/data/Resume'
</script>

<div class="resume-summary-container">
  <h3>Skills</h3>
  <ul>
    {#each skills as item}
      <li>{item.name}</li>
    {/each}
  </ul>
</div>
