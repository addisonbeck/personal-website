<script lang="ts">
	import { onMount } from 'svelte'
  import { allEmails } from '$lib/data/Email'
  import name from '$lib/data/Name'
	import type Email from '$lib/types/Email';

  export let messageOptions: Email[] = allEmails;
  $: message = messageOptions[0];

  function shuffleMessage() {
    message = messageOptions[messageOptions.indexOf(message) + 1] ?? messageOptions[0];
  }

  onMount(() => {
		setInterval(() => {
      shuffleMessage();
		}, 1500);
  });
</script>
<svelte:head>
    <title>Contact | {name.full}</title>
    <meta name="description" content="You can reach {name.first} by email at {message.full}" />
</svelte:head>
<div class="contact-container">
  <div class="contact-card">
    <span>Shoot me an email at </span>
    <a data-testid="email-address" href='mailto:{message.full}'>
      {message.full}
    </a>
  </div>
</div>

<style>
  .contact-container {
    display: grid;
    grid-template-columns: 1fr minmax(220px, 600px) 1fr;
    align-items: center;
    justify-items: center;
  }

  .contact-card {
    text-align: center;
    grid-column: 2;
    grid-row: 2;
    padding: 20px;
    margin-top: 20%;
    display: grid;
    grid-template-rows: 1fr 1fr;
    row-gap: 10px;
  }
</style>
