<script lang="ts">
	import Nav from './../components/Nav.svelte';
	import '../style/index.css';
	import { onMount } from 'svelte';

	let cursorDot: HTMLDivElement;
	let cursorOutline: HTMLDivElement;

	onMount(() => {
		window.onmousemove = (e: MouseEvent) => {
			const { clientX, clientY } = e;
			const dotClientX = clientX - cursorDot.offsetWidth / 2;
			const dotClientY = clientY - cursorDot.offsetHeight / 2;

			const outlineClientX = clientX - cursorOutline.offsetWidth / 2;
			const outlineClientY = clientY - cursorOutline.offsetHeight / 2;

			const interactable = (e.target as HTMLAnchorElement | HTMLButtonElement | null)?.closest(
					'.interactable'
				),
				interacting = interactable !== null;

			cursorDot.style.left = `${dotClientX}px`;
			cursorDot.style.top = `${dotClientY}px`;

			cursorOutline.style.background = !interacting ? 'rgba(0,0,0,0)' : '';
			cursorOutline.style.scale = interacting ? '1.5' : '1';

			cursorOutline.animate(
				{
					left: `${outlineClientX}px`,
					top: `${outlineClientY}px`
				},
				{ duration: 500, fill: 'forwards' }
			);
		};
	});
</script>

<div class="relative h-full w-full bg-gray-100/0 dark:bg-gray-900">
	<div class="pointer-events-none absolute h-screen w-full overflow-x-clip">
		<div
			class="absolute left-[-20%] top-[-40%] h-[50vw] w-[50vw] bg-bubbleclr1/[0.6] dark:bg-bubbleclr1/[0.4] max-md:-left-[5%] max-md:-top-[5%] max-md:h-[80vw] max-md:w-[80vw]"
			id="bubble1"
		></div>
		<div
			class="absolute left-[40%] top-[-30%] h-[50vw] w-[50vw] bg-bubbleclr2/[0.6] dark:bg-bubbleclr2/[0.3] max-md:-right-[10%] max-md:top-[50%] max-md:h-[80vw] max-md:w-[80vw]"
			id="bubble2"
		></div>
	</div>

	<div
		id="cursor-dot"
		class="pointer-events-none fixed left-0 top-0 z-[1001] h-2 w-2 rounded-full bg-gray-900 opacity-0 dark:bg-neutral-100/80"
		bind:this={cursorDot}
	></div>
	<div
		id="cursor-outline"
		class="pointer-events-none fixed left-0 top-0 z-[1000] h-7 w-7 rounded-full border-2 border-gray-900/30 bg-gray-900/50 opacity-0 transition-all duration-300 dark:border-neutral-100/30 dark:bg-neutral-100/60"
		bind:this={cursorOutline}
	></div>

	<Nav />
	<slot />
</div>

<style lang="scss">
	#bubble1,
	#bubble2 {
		filter: blur(500px);
	}

	@media (max-width: 768px) {
		#cursor-dot,
		#cursor-outline {
			display: none;
		}

		#bubble1,
		#bubble2 {
			filter: blur(200px);
		}
	}
</style>
