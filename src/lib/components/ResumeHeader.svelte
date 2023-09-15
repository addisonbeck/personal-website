<script lang="ts">
  import { Resume } from '$lib/data/Resume'
  export let data: typeof Resume.basics = Resume.basics;  

  const email = data.email.replace("https://", "")
  const githubProfile = data.profiles[0].url.replace("https://", "")
</script>

<div class="resume-header-container">
  <div class="name">
    <h1>{data.name}</h1>
  </div>
  <div class="contact-information">
    <a href="mailto:{data.email}">{email}</a>
    <a href="/" target="_blank">{data.url}</a>
    <a href="{data.profiles[0].url}" target="_blank">{githubProfile}</a>
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
