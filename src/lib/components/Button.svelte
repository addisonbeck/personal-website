<script lang="ts">
	import { createEventDispatcher } from 'svelte';
  const slots = $$props.$$slots;

  export let id: string = "button";
  export let type: string = "default"

	const dispatch = createEventDispatcher();

	function click() {
		dispatch('click');
	}
</script>

<button id="{id}" class="button {type}" on:click="{click}">
  {#if slots?.default}
    <slot/>
  {:else}
    I'm a button!
  {/if}
</button>

<style>
  * {
    --button-background-color: var(--primary);
    --button-color: var(--accent);
  }

  .button {
    border-radius: 10px;
    display: grid;
    grid-auto-flow: column dense;
    justify-items: center;
    align-items: center;
    font-weight: 700;
    font-size: 0.8em;
    background-color: var(--button-background-color);
    color: var(--button-color);
    border: 1px;
    border-style: dashed;
    border-color: var(--button-color);
    padding: 3px 10px 3px 5px;
  }

  .button.round {
    padding: 5px;
    border-radius: 100px;
    border-color: var(--button-background-color);
  }

  .button:hover {
    border-color: var(--button-color);
    border-style: solid;
  }
</style>
