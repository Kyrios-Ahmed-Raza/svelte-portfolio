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

<div class="w-full px-[15%] py-[100px] h-full text-center flex items-center flex-col">
	<h1 id="project_title" class="text-5xl dark:text-neutral-100/80 text-gray-950 font-semibold">
		My Work
	</h1>
	<div id="projects-wrapper" class="w-full h-auto flex mt-10 items-center flex-col gap-10">
		{#each Projects as item}
			<div
				class="w-[60%] text-start overflow-clip flex h-[300px] rounded-xl bg-neutral-50/80 dark:bg-neutral-100/10 backdrop-blur-xl shadow-lg"
			>
				<div class="w-[40%] h-full">
					<img src={item.imgSrc} class="w-full h-full object-cover" alt="Projects" />
				</div>
				<div class="w-[60%] h-full flex flex-col p-4">
					<h1 class="text-2xl dark:text-neutral-100/80 text-gray-950 font-semibold mb-2">
						{item.name}
					</h1>
					<p class="text-lg dark:text-neutral-100/60 text-gray-800 mb-10">{item.desc}</p>

					<div class="flex gap-3">
						{#each item.tech as src}
							<img {src} class="w-[32px] h-[32px] object-contain" alt="logo" />
						{/each}
					</div>
				</div>
			</div>
		{/each}
	</div>
</div>
