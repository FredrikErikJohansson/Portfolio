<script lang="ts">
	import { getBackgroundColor, getTextColor } from './utility/utility';
	import FaLinkedin from 'svelte-icons/fa/FaLinkedin.svelte';
	import FaGithub from 'svelte-icons/fa/FaGithub.svelte';
	export let page: string;
</script>

<div class={`${getBackgroundColor(page)} ${getTextColor(page)} py-20 flex flex-col items-center`}>
	<h1 class="text-xl font-oswald mb-1">Contact</h1>
	<h2 class="font-lato">fredrik96.johansson@gmail.com</h2>
	<div class="p-2 flex gap-x-4">
		<a
			class="h-8 w-8"
			href="https://github.com/FredrikErikJohansson"
			target="_blank"
			rel="noopener noreferrer"><FaGithub /></a
		>
		<a
			class="h-8 w-8"
			href="https://www.linkedin.com/in/fredrik-johansson-66364a179/"
			target="_blank"
			rel="noopener noreferrer"><FaLinkedin /></a
		>
	</div>
	<a
		class="font-lato underline"
		href="https://github.com/FredrikErikJohansson/portfolio"
		target="_blank"
		rel="noopener noreferrer">Website source code</a
	>
</div>
