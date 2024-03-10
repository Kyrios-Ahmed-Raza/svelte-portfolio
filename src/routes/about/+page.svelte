<script lang="ts">
	import { onMount } from 'svelte';
	import { animate, stagger, spring } from 'motion';
	import ProfileImage from '../../public/PFP.jpg';
	import SplitType from 'split-type';

	let lineOne: HTMLDivElement;
	let lineTwo: HTMLDivElement;

	onMount(() => {
		const aboutTitle = new SplitType('#about_title', { types: 'chars' });
		const aboutParaOne = new SplitType('#about_para-one', { types: 'lines' });
		const aboutParaTwo = new SplitType('#about_para-two', { types: 'lines' });
		const aboutParaThree = new SplitType('#about_para-three', { types: 'lines' });

		const aboutPara = [
			...(aboutParaOne.lines as []),
			lineOne,
			...(aboutParaTwo.lines as []),
			lineTwo,
			...(aboutParaThree.lines as [])
		];


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
	});
</script>

<div
	class="flex h-screen w-full flex-col items-center justify-center px-[15%] text-center max-md:h-full max-md:px-[7%] max-md:py-[150px]"
>
	<div
		id="about_pfp"
		class="mb-10 grid h-36 w-36 place-items-center rounded-full bg-black/10 backdrop-blur-xl dark:bg-neutral-100/10"
	>
		<img src={ProfileImage} class="h-32 w-32 rounded-full object-cover object-center" alt="PFP" />
		<span class="absolute bottom-0 right-0 text-5xl">👋</span>
	</div>

	<h1
		id="about_title"
		class="mb-3 text-5xl font-semibold text-gray-950 dark:text-neutral-100/80 max-md:text-4xl"
	>
		About me
	</h1>
	<p
		id="about_para-one"
		class="w-[80%] text-balance text-lg text-gray-800 dark:text-neutral-100/60 max-md:w-full max-md:text-base"
	>
		Hey there! I'm Ahmed Raza, a 16-year-old coding aficionado with a zest for life and a love for
		exploration. Delving into the realm of programming at a young age, I've developed a deep passion
		for coding that drives me to constantly push the boundaries of what I can achieve. Join me on
		this journey as I navigate through lines of code and traverse the open road.
	</p>
	<div
		bind:this={lineOne}
		tabindex="-1"
		class="pointer-events-none my-6 h-[3px] w-[60%] rounded-full bg-gray-900/20 dark:bg-neutral-100/10"
	></div>
	<p
		id="about_para-two"
		class="w-[80%] text-balance text-lg text-gray-800 dark:text-neutral-100/60 max-md:w-full max-md:text-base"
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
		class="pointer-events-none my-6 h-[3px] w-[60%] rounded-full bg-gray-900/20 dark:bg-neutral-100/10"
	></div>
	<p
		id="about_para-three"
		class="w-[80%] text-balance text-lg text-gray-800 dark:text-neutral-100/60 max-md:w-full max-md:text-base"
	>
		Join Me on the Adventure Ready to embark on an unforgettable journey through the world of
		coding, travel, and beyond? Follow along as I share my experiences, insights, and discoveries
		with you. Together, we'll explore the endless possibilities that await us and embrace the thrill
		of the unknown. Welcome to Ahmed Raza's World – let the adventure begin!
	</p>
</div>