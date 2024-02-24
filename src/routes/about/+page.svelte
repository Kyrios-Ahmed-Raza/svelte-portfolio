<script lang="ts">
	import { onMount } from 'svelte';
	import { animate, stagger, spring, inView, scroll } from 'motion';
	import ProfileImage from '../../public/PFP.jpg';
	import SplitType from 'split-type';
	import { Skills } from '../../constant';
	import { Mouse } from 'lucide-svelte';

	let lineOne: HTMLDivElement;
	let lineTwo: HTMLDivElement;

	onMount(() => {
		const aboutTitle = new SplitType('#about_title', { types: 'chars' });
		const aboutParaOne = new SplitType('#about_para-one', { types: 'lines' });
		const aboutParaTwo = new SplitType('#about_para-two', { types: 'lines' });
		const aboutParaThree = new SplitType('#about_para-three', { types: 'lines' });
		const skillsTitle = new SplitType('#skills_title', { types: 'chars' });
		const skillsPara = new SplitType('#skills_para', { types: 'lines' });

		const aboutPara = [
			...(aboutParaOne.lines as []),
			lineOne,
			...(aboutParaTwo.lines as []),
			lineTwo,
			...(aboutParaThree.lines as [])
		];

		const skillsEl = [...(skillsTitle.chars as []), ...(skillsPara.lines as [])];
		const aboutEl = [...(aboutTitle.chars as []), ...aboutPara];

		animate(
			aboutEl,
			{
				opacity: [0, 1],
				y: [50, 0]
			},
			{
				duration: 0.5,
				delay: stagger(0.1)
			}
		);

		animate(
			'#about_pfp',
			{
				opacity: [0, 1],
				scale: [0, 1]
			},
			{
				duration: 0.5
			}
		);
		animate(
			'#about_pfp span',
			{
				opacity: [0, 1],
				scale: [0, 1]
			},
			{
				delay: 0.2,
				duration: 0.3,
				easing: spring({ velocity: 10, stiffness: 100, damping: 8.5, mass: 1.2 })
			}
		);

		scroll(
			animate('#Scroll-Reminder', {
				opacity: [1, 0]
			})
		);

		inView('#skills_title', () => {
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
		});
	});
</script>

<div class="h-screen items-center text-center w-full px-[15%] flex flex-col justify-center">
	<div
		id="about_pfp"
		class="w-36 h-36 grid place-items-center mb-10 bg-black/10 dark:bg-neutral-100/10 backdrop-blur-xl rounded-full"
	>
		<img src={ProfileImage} class="w-32 h-32 rounded-full object-cover object-center" alt="PFP" />
		<span class="absolute bottom-0 right-0 text-5xl">👋</span>
	</div>

	<h1 id="about_title" class="text-5xl dark:text-neutral-100/80 font-semibold text-gray-950 mb-3">
		About me
	</h1>
	<p
		id="about_para-one"
		class="text-lg w-[80%] dark:text-neutral-100/60 text-gray-800 text-balance"
	>
		Hey there! I'm Ahmed Raza, a 16-year-old coding aficionado with a zest for life and a love for
		exploration. Delving into the realm of programming at a young age, I've developed a deep passion
		for coding that drives me to constantly push the boundaries of what I can achieve. Join me on
		this journey as I navigate through lines of code and traverse the open road.
	</p>
	<div
		bind:this={lineOne}
		tabindex="-1"
		class="w-[60%] pointer-events-none h-[3px] rounded-full bg-gray-900/20 dark:bg-neutral-100/10 my-6"
	></div>
	<p
		id="about_para-two"
		class="text-lg w-[80%] dark:text-neutral-100/60 text-gray-800 text-balance"
	>
		Coding isn't just a hobby for me – it's a way of life. From crafting sleek websites to
		developing innovative software solutions, I thrive on the challenge of turning ideas into
		reality through the power of programming languages. Whether I'm mastering the intricacies of
		Python or diving into the world of web development, I approach each coding project with
		enthusiasm and dedication.
	</p>
	<div
		tabindex="-1"
		bind:this={lineTwo}
		class="w-[60%] my-6 pointer-events-none h-[3px] rounded-full bg-gray-900/20 dark:bg-neutral-100/10"
	></div>
	<p
		id="about_para-three"
		class="text-lg w-[80%] dark:text-neutral-100/60 text-gray-800 text-balance"
	>
		Join Me on the Adventure Ready to embark on an unforgettable journey through the world of
		coding, travel, and beyond? Follow along as I share my experiences, insights, and discoveries
		with you. Together, we'll explore the endless possibilities that await us and embrace the thrill
		of the unknown. Welcome to Ahmed Raza's World – let the adventure begin!
	</p>
</div>

<div
	tabindex="-1"
	class="w-[60%] pointer-events-none h-[3px] rounded-full relative left-1/2 -translate-x-1/2 bg-gray-900/20 dark:bg-neutral-100/10"
></div>

<div
	class="w-full h-screen flex flex-col px-[15%] relative z-10 justify-center text-center items-center"
>
	<h1 id="skills_title" class="text-5xl dark:text-neutral-100/80 text-gray-950 mb-2 font-semibold">
		Skills
	</h1>
	<p id="skills_para" class="text-lg dark:text-neutral-100/60 text-gray-800">
		Some of the Applications, Programming languages and Libraries I know are:
	</p>
	<div id="wrapper" class="flex w-[80%] mt-10 flex-wrap justify-center gap-3">
		{#each Skills as skill}
			<div
				class="py-2 px-4 border-2 shadow-md hover:border-neutral-400 dark:hover:border-neutral-400 transition-all duration-300 cursor-default border-neutral-900/10 dark:border-neutral-100/10 rounded-md bg-neutral-500/5 dark:bg-neutral-100/10 backdrop-blur-lg"
			>
				<span class="text-lg dark:text-neutral-100/60 text-gray-900">{skill}</span>
			</div>
		{/each}
	</div>
</div>

<div id="Scroll-Reminder" class="fixed right-10 bottom-10 animate-bounce">
	<Mouse class="text-gray-900/50 dark:text-neutral-100/80 rotate-180" />
</div>
