<script lang="ts">
	import SplitType from 'split-type';
	import { onMount } from 'svelte';
	import { TestimonialsData } from '../../constant';
	import { animate, stagger } from 'motion';

	onMount(() => {
		const testimonialsTitle = new SplitType('#title', { types: 'chars' });
		const testimonialsHeadline = new SplitType('#headline', { types: 'words' });

		const testtimonialsEl = [
			...(testimonialsHeadline.words as []),
			...(testimonialsTitle.chars as [])
		];

		animate(
			testtimonialsEl,
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
			'#testimonials-wrapper div',
			{
				opacity: [0, 1],
				y: [50, 0]
			},
			{
				duration: 0.5,
				delay: stagger(0.1)
			}
		);
	});
</script>

<div
	class="relative z-10 flex h-screen w-full flex-col items-center justify-center px-[15%] text-center max-xl:px-[5%] max-md:h-auto max-md:py-[150px]"
>
	<p id="headline" class="text-lg text-gray-900 dark:text-neutral-100/60 max-md:text-base">
		Don't worry you'r in good hands!
	</p>
	<h1
		id="title"
		class="mb-8 text-5xl font-semibold text-gray-900 dark:text-neutral-100/80 max-md:mb-10 max-md:text-4xl"
	>
		Customers Review
	</h1>
	<div
		id="testimonials-wrapper"
		class="grid h-auto w-[90%] grid-cols-3 gap-6 max-lg:w-full max-md:grid-flow-row max-md:grid-cols-1"
	>
		{#each TestimonialsData as item}
			<div
				class="rounded-xl bg-neutral-100/80 p-6 shadow-lg backdrop-blur-xl dark:bg-neutral-100/10"
			>
				<div
					class="mb-3 flex items-center gap-4 border-b-2 border-gray-900/10 pb-3 dark:border-neutral-100/10"
				>
					<img
						class="h-16 w-16 rounded-full object-cover object-top shadow-lg"
						src={item.profilePic}
						alt="Profile"
					/>
					<div class="flex flex-col items-start">
						<h1
							class="text-lg font-bold leading-5 text-gray-900/80 dark:font-semibold dark:text-neutral-100/80"
						>
							{item.name}
						</h1>
						<p class="text-gray-900/70 dark:text-neutral-100/70">{item.date}</p>
					</div>
				</div>
				<div>
					<p class="text-gray-900/80 dark:text-neutral-100/60">"{item.msg}"</p>
				</div>
			</div>
		{/each}
	</div>
</div>
