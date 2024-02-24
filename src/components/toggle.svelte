<script lang="ts">
	import { fly } from 'svelte/transition';
	import { Moon, Sun } from 'lucide-svelte';
	import { theme, toggleTheme } from '$lib/theme';
</script>

<button
	on:click={toggleTheme}
	aria-label="Toggle theme"
	class="text-gray-800 transition-none dark:text-neutral-100/80 absolute right-10 interactable"
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
