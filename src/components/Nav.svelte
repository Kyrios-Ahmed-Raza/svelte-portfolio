<script lang="ts">
	import Toggle from './toggle.svelte';
	import { onMount } from 'svelte';
	import { animate, stagger } from 'motion';
	import { Menu } from 'lucide-svelte';
	import NavLinksComponent from "./NavLinksComponent.svelte";

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
	class="fixed z-[999] flex h-20 w-full items-center justify-around backdrop-blur-xl max-lg:px-[5%] max-md:h-auto max-md:py-5"
>
	<h1
		id="nav_logo"
		class="z-20 cursor-pointer text-4xl font-semibold text-gray-900 dark:text-neutral-100/80 max-lg:text-3xl"
	>
		<a href="/" class="interactable">Ahmed Raza.</a>
	</h1>

	<NavLinksComponent />

	<Toggle classNmae="z-20" />
	<button
		class="interactable absolute left-10 z-20 text-gray-800 transition-none dark:text-neutral-100/80 md:hidden"
	>
		<Menu />
	</button>
</nav>
