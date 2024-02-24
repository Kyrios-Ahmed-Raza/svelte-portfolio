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
	class="h-screen items-center justify-center text-center w-full px-[15%] flex flex-col relative z-10"
>
	<p id="headline" class="text-lg text-gray-900 dark:text-neutral-100/60">
		Don't worry you'r in good hands!
	</p>
	<h1 id="title" class="text-5xl font-semibold text-gray-900 mb-8 dark:text-neutral-100/80">
		Customers Review
	</h1>
	<div id="testimonials-wrapper" class="grid grid-cols-3 gap-6 w-[80%] h-auto">
		{#each TestimonialsData as item}
			<div
				class="dark:bg-neutral-100/10 shadow-lg bg-neutral-100/80 p-6 rounded-xl backdrop-blur-xl"
			>
				<div
					class="flex gap-4 items-center mb-3 border-b-2 border-gray-900/10 dark:border-neutral-100/10 pb-3"
				>
					<img
						class="w-16 h-16 shadow-lg rounded-full object-cover object-top"
						src={item.profilePic}
						alt="Profile"
					/>
					<div class="flex flex-col items-start">
						<h1
							class="text-gray-900/80 dark:text-neutral-100/80 dark:font-semibold font-bold text-lg leading-5"
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
