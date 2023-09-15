<script lang="ts">
  import { Resume } from '$lib/data/Resume'
  export let data: typeof Resume.basics = Resume.basics;  
</script>

<div class="resume-header-container">
  <div class="name">
    <h1>{data.name}</h1>
  </div>
  <div class="contact-information">
    <p>{data.email}</p>
    <p>{data.url}</p>
    <p>{data.profiles[0].url}</p>
    <p>{data.phone}</p>
  </div>
</div>

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
