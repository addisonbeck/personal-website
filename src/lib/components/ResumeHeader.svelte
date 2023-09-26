<script lang="ts">
  import "./resumeHeader.css";
	import type { Basics } from '$lib/types/Resume';

  export let data: Basics;
  const githubProfile = data?.profiles?.filter(x => x.url?.includes("github")).pop()?.url?.replace("https://", "")
</script>

{#if data?.name}
  <div class="resume-header-container">
    <div class="name">
      <h1>{data.name}</h1>
    </div>
    <div class="contact-information">
      {#if data.email}
        <a href="mailto:{data.email}">{data.email}</a>
      {/if}
      {#if data.url}
        <a href="/" target="_blank">{data.url}</a>
      {/if}
      {#if githubProfile}
        <a href="https://{githubProfile}" target="_blank">{githubProfile}</a>
      {/if}
      {#if data.phone}
        <span>{data.phone}</span>
      {/if}
    </div>
  </div>
{/if}
