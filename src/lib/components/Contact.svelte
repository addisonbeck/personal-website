<script lang="ts">
  import './contact.css';
	import { onMount } from 'svelte'
  let message = 'hi';
  const messages = [
    'hi',
    'hello',
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
      message = messages[messages.indexOf(message) + 1]  ?? messages[0];
		}, 1500);
  });
</script>

<div class="contact-container">
  <div class="contact-card">
    <span>Shoot me an email at </span>
    <a href='mailto:${message}@addisonbeck.com'>
      {message}@addisonbeck.com
    </a>
  </div>
</div>

