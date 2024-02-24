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

<div class="w-full h-screen flex flex-col items-center justify-center relative z-10">
	<h1
		id="contact-title"
		class="text-5xl relative z-10 font-semibold mb-6 dark:text-neutral-100/80 text-gray-900"
	>
		Contact
	</h1>

	<form
		id="main-form"
		bind:this={mainForm}
		class="w-[30%] relative overflow-hidden z-10 bg-neutral-100/30 backdrop-blur-3xl p-6 flex flex-col gap-6 rounded-[2rem] dark:bg-neutral-100/10"
	>
		<div
			id="form-bubble"
			class="absolute z-[-10] blur-[100px] bg-gradient-to-r from-bubbleclr1/70 to-bubbleclr2/70 dark:from-bubbleclr1/90 dark:to-bubbleclr2/90 w-64 h-64 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
		></div>
		<input type="text" id="name" placeholder="Enter your Full-name: " class="w-full inputbox" />
		<input
			type="email"
			id="email"
			placeholder="Enter your Email-address: "
			class="w-full inputbox"
		/>

		<textarea
			name="textarea"
			id="textarea"
			placeholder="Enter your message..."
			class="p-4 rounded-2xl caret-gray-900/80 dark:caret-slate-100/80 bg-neutral-100/70 text-gray-900/90 dark:text-neutral-100/80 text-xl dark:bg-neutral-100/20 dark:hover:border-neutral-100/50 hover:border-gray-900/30 dark:focus:border-neutral-100/80 focus:border-gray-900/50 duration-300 outline-none border-2 border-transparent placeholder:dark:text-neutral-100/70 placeholder:text-gray-900/80 backdrop-blur-3xl"
			cols="30"
			rows="10"
		></textarea>

		<div class="flex gap-4 items-center">
			<button
				class="flex group gap-2 items-center px-12 justify-center w-[50%] h-14 bg-neutral-100/70 backdrop-blur-xl dark:bg-neutral-100/20 dark:hover:bg-neutral-100/30 hover:bg-neutral-300/30 text-gray-900/80 interactable cursor-none dark:text-neutral-100/80 font-semibold rounded-full text-xl"
				type="submit"
			>
				Submit
				<Forward class="group-hover:translate-x-2 transition-transform" />
			</button>
			<a
				class="flex group gap-2 items-center px-12 h-14 bg-neutral-100/70 backdrop-blur-xl dark:bg-neutral-100/20 dark:hover:bg-neutral-100/30 hover:bg-neutral-300/30 text-gray-900/80 interactable cursor-none dark:text-neutral-100/80 font-semibold rounded-full text-xl"
				href="tel:+923130117243"
				>Phone
				<Phone
					class="w-5 h-5 group-hover:translate-x-2 group-hover:-rotate-45 transition-transform"
				/>
			</a>
			<a
				class="flex group gap-2 items-center justify-center w-14 h-14 bg-neutral-100/70 backdrop-blur-xl dark:bg-neutral-100/20 dark:hover:bg-neutral-100/30 hover:bg-neutral-300/30 text-gray-900/80 interactable cursor-none dark:text-neutral-100/80 font-semibold rounded-full text-xl"
				href="https://ahmedrazatalk.slack.com/team/U069ARQ3E94"
				target="_blank"><Slack class="group-hover:scale-[1.15] transition-transform" /></a
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
