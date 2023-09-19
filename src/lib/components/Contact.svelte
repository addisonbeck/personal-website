<script lang="ts">
	import { onMount } from 'svelte'
  import email from '$lib/data/Email'
  import name from '$lib/data/Name'

  let username: string = email.username;
  $: message = `${username}@${email.domain}`

  const usernames = [
    'hi',
    'olleh',
    'howdy',
    '您好',
    'salut',
    'gutentag',
    'السلام عليكم',
    '0100100001101001',
    'oi',
    'こんにちは',
    'please-work-here',
    'or-pretty-much-anything',
  ];

  onMount(() => {
		setInterval(() => {
      username = usernames[usernames.indexOf(username) + 1]  ?? email.username;
		}, 1500);
  });
</script>
<svelte:head>
    <title>Contact | Addison Beck</title>
    <meta name="description" content="You can reach {name.first} by email at {message}" />
</svelte:head>
<div class="contact-container">
  <div class="contact-card">
    <span>Shoot me an email at </span>
    <a href='{message}'>
      {message}
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
