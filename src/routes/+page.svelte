<script lang="ts">
	import { animate, stagger } from 'motion';
	import { ArrowDownToLine, ArrowRight, Linkedin, Codepen, Github } from 'lucide-svelte';
	import SplitType from 'split-type';
	import { onMount } from 'svelte';

	onMount(() => {
		const homePara = new SplitType('#home_para', { types: 'lines' });
		const homeTitle = new SplitType('#home_title', { types: 'words' });

		let homeEl = [...(homeTitle.words as []), ...(homePara.lines as [])];

		animate(
			homeEl,
			{
				opacity: [0, 1],
				y: [24, 0]
			},
			{ delay: stagger(0.1), duration: 0.5 }
		);

		animate(
			'#home_buttons',
			{
				opacity: [0, 1],
				y: [24, 0]
			},
			{ delay: 1, duration: 0.5 }
		);
	});
</script>

<div
	class="px-[10%] exsm:h-screen h-full w-full max-lg:px-[8%] max-md:px-[5%] max-sm:py-[150px] overflow-x-clip flex flex-col items-center justify-center text-center"
>
	<h1
		id="home_title"
		class="text-5xl text-balance max-sm:mb-6 dark:text-neutral-100/80 text-slate-950 font-semibold leading-[1.15] mb-3"
	>
		Hello everyone, My name is
		<br />
		Ahmed Raza
	</h1>
	<p
		id="home_para"
		class="max-w-[80%] max-sm:max-w-[100%] max-sm:text-base dark:text-neutral-100/60 text-balance text-gray-900 text-lg"
	>
		Hey there, My name is Ahmed Raza, I am from Pakistan and currently in 9th standard. I am 16
		years old, Some of my hobbies are Riding Motorcycle, Sloving Rubiks cube, Coding, Listening to
		music and Gaming, I started coding when I was 11 years, I am a professional front-end web
		developer now. I am also a certified Graphic Designer. I have built some projects for fun that
		you can on the projects tab.
	</p>
	<div id="home_buttons" class="mt-6 flex max-sm:flex-wrap gap-4 justify-center max-sm:mt-10">
		<a
			class="group max-sm:text-base max-sm:px-5 interactable px-6 py-4 flex gap-2 items-center text-neutral-50 dark:text-neutral-100/70 rounded-full text-lg bg-gray-900"
			href="src\public\CV.png"
			download>Download CV <ArrowDownToLine class="group-hover:translate-y-1  transition" /></a
		>

		<a
			class="group max-sm:text-base max-sm:px-5 interactable flex gap-2 items-center px-6 dark:text-neutral-50/70 dark:bg-neutral-100/10 bg-neutral-100/40 backdrop-blur-2xl py-4 rounded-full text-lg text-gray-900"
			href="/about">Learn More <ArrowRight class="group-hover:translate-x-2 transition-all" /></a
		>

		<a
			class="group interactable p-4 flex gap-2 dark:text-neutral-50/60 items-center bg-neutral-100/40 dark:bg-neutral-100/10 backdrop-blur-2xl rounded-full text-gray-900 hover:bg-neutral-50/70 dark:hover:bg-neutral-100/15 transition"
			target="_blank"
			href="https://www.linkedin.com/in/ahmed-raza-65b7b0274/"
			><Linkedin class="group-hover:scale-[1.15] transition-all" /></a
		>
		<a
			class="group interactable p-4 flex gap-2 dark:text-neutral-50/60 items-center bg-neutral-100/40 dark:bg-neutral-100/10 backdrop-blur-2xl rounded-full text-gray-900 hover:bg-neutral-50/70 dark:hover:bg-neutral-100/15 transition"
			target="_blank"
			href="https://codepen.com"><Codepen class="group-hover:scale-[1.15] transition-all" /></a
		>
		<a
			class="group interactable p-4 flex gap-2 dark:text-neutral-50/60 items-center bg-neutral-100/40 dark:bg-neutral-100/10 backdrop-blur-2xl rounded-full text-gray-900 hover:bg-neutral-50/70 dark:hover:bg-neutral-100/15 transition"
			target="_blank"
			href="https://github.com/Kyrios-Ahmed"
			><Github class="group-hover:scale-[1.15] transition-all" /></a
		>
	</div>
</div>
