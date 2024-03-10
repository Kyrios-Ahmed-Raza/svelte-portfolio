<script lang="ts">
	import { fly } from 'svelte/transition';
	import { Moon, Sun } from 'lucide-svelte';
	import { theme, toggleTheme } from '$lib/theme';
	export let classNmae: string;
</script>

<button
	on:click={toggleTheme}
	aria-label="Toggle theme"
	class={`interactable absolute right-10 text-gray-800 transition-none dark:text-neutral-100/80 ${classNmae || ''}`}
>
	{#if $theme === 'dark'}
		<div in:fly={{ y: 10 }}>
			<Sun />
		</div>
	{:else}
		<div in:fly={{ y: -10 }}>
			<Moon />
		</div>
	{/if}
</button>
