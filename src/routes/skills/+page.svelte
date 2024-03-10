<script lang="ts">
	import SplitType from "split-type";
	import { Skills } from "../../constant";
	import { onMount } from "svelte";
  import {animate, stagger} from "motion";
 
  onMount(() => {
    const skillsTitle = new SplitType('#skills_title', { types: 'chars' });
  	const skillsPara = new SplitType('#skills_para', { types: 'lines' });
    const skillsEl = [...(skillsTitle.chars as []), ...(skillsPara.lines as [])];

    animate(
				skillsEl,
				{
					opacity: [0, 1],
					y: [24, 0]
				},
				{
					duration: 0.5,
					delay: stagger(0.1)
				}
			);

			animate(
				'#wrapper div',
				{
					opacity: [0, 1],
					y: [50, 0]
				},
				{
					duration: 0.5,
					delay: stagger(0.1)
				}
			);
  })
</script>

<div
	class="relative z-10 flex h-screen w-full flex-col items-center justify-center px-[15%] text-center max-md:h-full max-md:px-[5%] max-md:py-[150px]"
>
	<h1
		id="skills_title"
		class="mb-2 text-5xl font-semibold text-gray-950 dark:text-neutral-100/80 max-md:text-4xl"
	>
		Skills
	</h1>
	<p id="skills_para" class="text-lg text-gray-800 dark:text-neutral-100/60 max-md:text-base">
		Some of the Applications, Programming languages and Libraries I know are:
	</p>
	<div id="wrapper" class="mt-10 flex w-[80%] flex-wrap justify-center gap-3 max-md:w-full">
		{#each Skills as skill}
			<div
				class="cursor-default rounded-md border-2 border-neutral-900/10 bg-neutral-500/5 px-4 py-2 shadow-md backdrop-blur-lg duration-300 hover:border-neutral-400 dark:border-neutral-100/10 dark:bg-neutral-100/10 dark:hover:border-neutral-400"
			>
				<span class="text-lg text-gray-900 dark:text-neutral-100/60 max-md:text-base">{skill}</span>
			</div>
		{/each}
	</div>
</div>