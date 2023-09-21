<script lang="ts">
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

<style>
  .resume-header-container {
    display: grid;
    grid-auto-flow: row dense;
  }

  .resume-header-container .name {
    text-align: center;
  }

  .contact-information {
    display: grid;
    grid-auto-flow: column;
    column-gap: 2px;
    align-items: center;
  }

  .contact-information * {
    border-left: 1px solid;
    text-align: center;
  }

</style>
