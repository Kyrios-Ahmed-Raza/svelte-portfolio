<script lang="ts">
	import SplitType from 'split-type';
	import { onMount } from 'svelte';
	import { Projects } from '../../constant';
	import { animate, stagger } from 'motion';

	onMount(() => {
		const projectTitle = new SplitType('#project_title', { types: 'chars' });
		const projectEl = [...(projectTitle.chars as [])];

		animate(
			projectEl,
			{
				opacity: [0, 1],
				y: [24, 0]
			},
			{
				delay: stagger(0.1),
				duration: 0.5
			}
		);

		animate(
			'#projects-wrapper div',
			{
				opacity: [0, 1],
				y: [50, 0]
			},
			{
				delay: stagger(0.15),
				duration: 0.5
			}
		);
	});
</script>

<div
	class="flex h-full w-full flex-col items-center px-[15%] py-[100px] text-center max-md:px-[5%]"
>
	<h1
		id="project_title"
		class="text-5xl font-semibold text-gray-950 dark:text-neutral-100/80 max-md:text-4xl"
	>
		My Work
	</h1>
	<div
		id="projects-wrapper"
		class="mt-10 flex h-auto w-full flex-col items-center gap-10 max-md:mt-6"
	>
		{#each Projects as item}
			<div
				class="flex h-[300px] w-[60%] overflow-clip rounded-xl bg-neutral-50/80 text-start shadow-lg backdrop-blur-xl dark:bg-neutral-100/10 max-2xl:w-[80%] max-lg:w-[90%] max-md:h-auto max-md:w-full max-md:flex-col"
			>
				<div class="h-full w-[40%] max-md:h-[40%] max-md:w-full">
					<img src={item.imgSrc} class="h-full w-full object-cover" alt="Projects" />
				</div>
				<div class="flex h-full w-[60%] flex-col p-4 max-md:w-full">
					<h1
						class="mb-2 text-2xl font-semibold text-gray-950 dark:text-neutral-100/80 max-md:text-xl"
					>
						{item.name}
					</h1>
					<p class="mb-10 text-lg text-gray-800 dark:text-neutral-100/60 max-md:text-base">
						{item.desc}
					</p>

					<div class="flex gap-3">
						{#each item.tech as src}
							<img {src} class="h-[32px] w-[32px] object-contain" alt="logo" />
						{/each}
					</div>
				</div>
			</div>
		{/each}
	</div>
</div>
