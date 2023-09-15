<script lang="ts">
  import { Resume } from '$lib/data/Resume'
  export let data: typeof Resume.basics.summary = Resume.basics.summary;  
</script>

<div class="resume-summary-container">
  <p>{data}</p>
</div>
