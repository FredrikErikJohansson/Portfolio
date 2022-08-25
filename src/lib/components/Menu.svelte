<script lang="ts">
	import { ABOUT, INTRO, PROJECTS } from '$lib/constants/constants';

	export let page: string;

	const selectedLinkColor = (link: string) => {
		if (page === link && page === ABOUT) return 'underline decoration-white';
		else if (page === link) return 'underline decoration-black';
	};
</script>

<div class="p-10 flex justify-between w-full max-w-xs font-oswald text-2xl">
	<a class={`${selectedLinkColor(INTRO)} hover:underline`} href="/">Intro</a>
	<a class={`${selectedLinkColor(ABOUT)} hover:underline`} href="/about">About</a>
	<a class={`${selectedLinkColor(PROJECTS)} hover:underline`} href="/projects">Projects</a>
</div>
