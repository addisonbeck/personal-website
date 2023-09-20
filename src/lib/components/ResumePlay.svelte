<script lang="ts">
  import Button from "./Button.svelte"
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();

	function play() {
		dispatch('play');
	}
</script>

<div class="resume-play">
  <span>
    <Button on:click="{play}">
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="currentColor" d="M8 5.14v14l11-7l-11-7Z"/></svg>
       Play
    </Button>
  </span>
</div>
