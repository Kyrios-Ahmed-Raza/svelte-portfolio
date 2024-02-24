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

<div class="bg-gray-100/0 h-full w-full relative dark:bg-gray-900">
	<div class="w-full h-screen overflow-x-clip absolute pointer-events-none">
		<div
			class="w-[50vw] h-[50vw] max-md:w-[80vw] max-md:h-[80vw] max-md:-top-[5%] max-md:-left-[5%] top-[-40%] left-[-20%] absolute bg-bubbleclr1/[0.6] dark:bg-bubbleclr1/[0.4]"
			id="bubble1"
		></div>
		<div
			class="w-[50vw] h-[50vw] max-md:w-[80vw] max-md:h-[80vw] max-md:top-[50%] max-md:-right-[10%] top-[-30%] left-[40%] absolute bg-bubbleclr2/[0.6] dark:bg-bubbleclr2/[0.3]"
			id="bubble2"
		></div>
	</div>

	<div
		id="cursor-dot"
		class="w-2 h-2 opacity-0 fixed pointer-events-none top-0 left-0 bg-gray-900 dark:bg-neutral-100/80 rounded-full z-[1001]"
		bind:this={cursorDot}
	></div>
	<div
		id="cursor-outline"
		class="w-7 h-7 opacity-0 transition-all duration-300 fixed pointer-events-none top-0 left-0 border-2 bg-gray-900/50 dark:bg-neutral-100/60 border-gray-900/50 dark:border-neutral-100/60 rounded-full z-[1000]"
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
