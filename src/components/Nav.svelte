<script lang="ts">
	import Toggle from './toggle.svelte';
	import { onMount } from 'svelte';
	import { NavLinks } from '../constant';
	import { animate, stagger } from 'motion';
	import { Menu } from 'lucide-svelte';

	$: toggle = false;
	const navToggle = () => {
		toggle = !toggle;
	};

	onMount(() => {
		animate(
			'#nav_logo',
			{
				opacity: [0, 1],
				y: [-50, 0]
			},
			{
				duration: 0.5
			}
		);
		animate(
			'#nav_links li',
			{
				opacity: [0, 1],
				y: [-50, 0]
			},
			{
				duration: 0.5,
				delay: stagger(0.1)
			}
		);
	});
</script>

<nav
	class="flex z-[999] max-lg:px-[5%] justify-around items-center h-20 w-full backdrop-blur-xl fixed"
>
	<h1
		id="nav_logo"
		class="text-4xl max-lg:text-3xl dark:text-neutral-100/80 font-semibold text-gray-900 cursor-pointer"
	>
		<a href="/" class="interactable">Ahmed Raza.</a>
	</h1>
	<ul
		id="nav_links"
		class="flex max-sm:hidden max-lg:text-sm space-x-4 dark:text-neutral-100/70 text-gray-800"
	>
		{#each NavLinks as link}
			<li class="hover:text-slate-950 interactable dark:hover:text-neutral-100/90 transition">
				<a href={link.link}>{link.name}</a>
			</li>
		{/each}
	</ul>
	<Toggle />
	<button
		on:click={navToggle}
		class="text-gray-800 sm:hidden transition-none dark:text-neutral-100/80 absolute left-10 interactable"
	>
		<Menu />
	</button>
</nav>
