<script lang="ts">
	import FaLinkedin from 'svelte-icons/fa/FaLinkedin.svelte';
	import FaGithub from 'svelte-icons/fa/FaGithub.svelte';
	import { ABOUT, INTRO, PROJECTS } from '$lib/constants/constants';
	import { getBackgroundColor, getTextColor } from '$lib/utility/utility';
	import Menu from './Menu.svelte';
	export let page: string;

	const getGradientColor = (page: string) => {
		if (page === INTRO) return 'to-intro-primary';
		else if (page === ABOUT) return 'to-about-primary';
		else return 'to-projects-primary';
	};

	const getHoverColor = (page: string) => {
		switch (page) {
			case INTRO:
				return 'hover:text-black';
			case ABOUT:
				return 'hover:text-white';
			case PROJECTS:
				return 'hover:text-black';
			default:
				return '';
		}
	};
</script>

<div
	class={`${getBackgroundColor(page)} ${getTextColor(
		page
	)} h-screen flex justify-between max-h-[64rem]`}
>
	<div
		class={`w-full max-h flex xl:z-0 z-20 bg-gradient-to-t from-transparent ${getGradientColor(
			page
		)}`}
	>
		<div class="flex flex-col w-full justify-between container mx-auto z-10">
			<Menu {page} />
			<div>
				<h1 class="text-8xl font-oswald mb-8 drop-shadow-xl">Fredrik Johansson</h1>
				<div class="flex gap-x-4">
					<a
						class={`h-24 w-24 drop-shadow-xl transition duration-300 ease-in-out ${getHoverColor(
							page
						)}`}
						href="https://github.com/FredrikErikJohansson"
						target="_blank"
						rel="noopener noreferrer"><FaGithub /></a
					>
					<a
						class={`h-24 w-24 drop-shadow-xl transition duration-300 ease-in-out ${getHoverColor(
							page
						)}`}
						href="https://www.linkedin.com/in/fredrik-johansson-66364a179/"
						target="_blank"
						rel="noopener noreferrer"><FaLinkedin /></a
					>
				</div>
			</div>
			<div class="mb-20" />
		</div>
	</div>
	<img
		class="z-10 h-screen max-h-[64rem] absolute right-0 object-cover"
		src={'/images/header-image.png'}
		alt="download icon"
	/>
</div>
