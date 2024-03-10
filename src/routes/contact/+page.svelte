<script lang="ts">
	import SplitType from 'split-type';
	import { animate, stagger } from 'motion';
	import { onMount } from 'svelte';
	import { Forward, Phone, Slack } from 'lucide-svelte';
	import { superForm } from 'sveltekit-superforms/client';

	let mainForm: HTMLFormElement;

	onMount(() => {
		let contactTitle = new SplitType('#contact-title', { types: 'chars' });
		let formInputs = document.querySelectorAll('#main-form input') as NodeListOf<HTMLInputElement>;
		let formTextArea = document.querySelector('#main-form textarea') as HTMLTextAreaElement;
		let formButton = document.querySelector('#main-form button') as HTMLButtonElement;
		let formAnchorBtn = document.querySelectorAll('#main-form a') as NodeListOf<HTMLAnchorElement>;

		let contactFormEl = [mainForm, ...formInputs, formTextArea, formButton, ...formAnchorBtn];

		animate(
			contactTitle.chars as [],
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
			contactFormEl,
			{
				opacity: [0, 1],
				y: [50, 0]
			},
			{
				duration: 0.5,
				delay: stagger(0.15)
			}
		);
	});
</script>

<div
	class="relative z-10 flex h-screen w-full flex-col items-center justify-center max-md:h-auto max-md:px-[5%] max-md:py-[100px]"
>
	<h1
		id="contact-title"
		class="relative z-10 mb-6 text-5xl font-semibold text-gray-900 dark:text-neutral-100/80 max-md:mb-10 max-md:text-4xl"
	>
		Contact
	</h1>

	<form
		id="main-form"
		bind:this={mainForm}
		class="relative z-10 flex w-[30%] flex-col gap-6 overflow-hidden rounded-[2rem] bg-neutral-100/30 p-6 backdrop-blur-3xl dark:bg-neutral-100/10 max-2xl:w-[40%] max-xl:w-[50%] max-lg:w-[60%] max-md:w-full max-md:gap-4 max-md:p-4"
	>
		<div
			id="form-bubble"
			class="absolute left-1/2 top-1/2 z-[-10] h-64 w-64 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-bubbleclr1/70 to-bubbleclr2/70 blur-[100px] dark:from-bubbleclr1/90 dark:to-bubbleclr2/90"
		></div>
		<input type="text" id="name" placeholder="Enter your Full-name: " class="inputbox w-full" />
		<input
			type="email"
			id="email"
			placeholder="Enter your Email-address: "
			class="inputbox w-full"
		/>

		<textarea
			name="textarea"
			id="textarea"
			placeholder="Enter your message..."
			class="rounded-2xl border-2 border-transparent bg-neutral-100/70 p-4 text-xl text-gray-900/90 caret-gray-900/80 outline-none backdrop-blur-3xl duration-300 placeholder:text-gray-900/80 hover:border-gray-900/30 focus:border-gray-900/50 dark:bg-neutral-100/20 dark:text-neutral-100/80 dark:caret-slate-100/80 placeholder:dark:text-neutral-100/70 dark:hover:border-neutral-100/50 dark:focus:border-neutral-100/80 max-md:text-xl max-md:placeholder:text-lg"
			cols="30"
			rows="10"
		></textarea>

		<div class="flex items-center gap-4 max-md:flex-wrap">
			<button
				class="interactable group flex h-14 w-[50%] cursor-none items-center justify-center gap-2 rounded-full bg-neutral-100/70 px-12 text-xl font-semibold text-gray-900/80 backdrop-blur-xl hover:bg-neutral-300/30 dark:bg-neutral-100/20 dark:text-neutral-100/80 dark:hover:bg-neutral-100/30 max-md:h-12 max-md:w-full max-md:text-lg"
				type="submit"
			>
				Submit
				<Forward class="transition-transform group-hover:translate-x-2" />
			</button>
			<a
				class="interactable group flex h-14 cursor-none items-center gap-2 rounded-full bg-neutral-100/70 px-12 text-xl font-semibold text-gray-900/80 backdrop-blur-xl hover:bg-neutral-300/30 dark:bg-neutral-100/20 dark:text-neutral-100/80 dark:hover:bg-neutral-100/30 max-md:h-12 max-md:text-lg"
				href="tel:+923130117243"
				>Phone
				<Phone
					class="size-5 transition-transform group-hover:translate-x-2 group-hover:-rotate-45 max-md:size-4"
				/>
			</a>
			<a
				class="interactable group flex size-14 cursor-none items-center justify-center rounded-full bg-neutral-100/70 text-xl font-semibold text-gray-900/80 backdrop-blur-xl hover:bg-neutral-300/30 dark:bg-neutral-100/20 dark:text-neutral-100/80 dark:hover:bg-neutral-100/30 max-md:size-12"
				href="https://ahmedrazatalk.slack.com/team/U069ARQ3E94"
				target="_blank"><Slack class="transition-transform group-hover:scale-[1.15]" /></a
			>
		</div>
	</form>
</div>

<style lang="scss">
	#form-bubble {
		animation: rotate 7s alternate infinite;
	}

	@keyframes rotate {
		from {
			transform: rotate(0deg) translate(-50%, -50%);
		}

		25% {
			top: 0;
			left: 0;
			transform: rotate(90deg) translate(0, 0);
		}

		50% {
			top: 50%;
			left: 50%;
			transform: rotate(120deg) translate(-50%, -50%);
		}

		75% {
			bottom: 0;
			right: 0;
			transform: rotate(210deg) translate(0, 0);
		}

		to {
			transform: rotate(360deg) translate(-50%, -50%);
		}
	}
</style>
