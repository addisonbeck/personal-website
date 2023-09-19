<script lang="ts">
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();

	function play() {
		dispatch('play');
	}
</script>

<div class="resume-play">
  <span>
    <button class="play" on:click="{play}">
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="currentColor" d="M8 5.14v14l11-7l-11-7Z"/></svg>
       Play
    </button>
  </span>
</div>

<style>
  * {
    --play-button-background-color: var(--primary);
    --play-button-color: var(--accent);
  }

  .resume-play .play {
    border-radius: 10px;
    display: grid;
    grid-auto-flow: column dense;
    justify-items: center;
    align-items: center;
    font-weight: 700;
    font-size: 0.8em;
    background-color: var(--play-button-background-color);
    color: var(--play-button-color);
    border: 1px;
    border-style: dashed;
    border-color: var(--play-button-color);
    padding: 3px 10px 3px 5px;
  }

  .resume-play .play:hover {
    border-style: solid;
  }
</style>
