<script lang="ts">
	import { onMount } from 'svelte'
  import email from '$lib/data/Email'
  let message = email;
  const messages = [
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
      message = messages[messages.indexOf(message) + 1]  ?? email;
		}, 1500);
  });
</script>
<svelte:head>
    <title>Contact | Addison Beck</title>
    <meta name="description" content="You can reach Addison by email at hello@addisonbeck.com" />
</svelte:head>
<div class="contact-container">
  <div class="contact-card">
    <span>Shoot me an email at </span>
    <a href='mailto:${message}@addisonbeck.com'>
      {message}@addisonbeck.com
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
