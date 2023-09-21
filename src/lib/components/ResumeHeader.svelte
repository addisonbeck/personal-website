<script lang="ts">
	import type { Basics } from '$lib/types/Resume';

  export let data: Basics;
</script>

{#if data?.name}
  <div class="resume-header-container">
    <div class="name">
      <h1>{data.name}</h1>
    </div>
    <div class="contact-information">
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

  .resume-header-container .contact-information {
    display: grid;
    grid-auto-flow: column;
    column-gap: 2px;
    align-items: center;
  }

  .resume-header-container .contact-information * {
    border-left: 1px solid;
    text-align: center;
  }

  @media screen and (max-width: 500px) {
    .resume:not(#pdf) .resume-header-container .contact-information {
      grid-auto-flow: row;
    }

    .resume:not(#pdf) .resume-header-container .contact-information * {
      border-left: 0;
      text-align: center;
    }
  }
</style>
