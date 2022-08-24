<script lang="ts">
	import { ABOUT, INTRO, PROJECTS } from './constants/constants';

	export let page: string;

	const selectedLinkColor = (link: string) => {
		if (page === link && page === ABOUT) return 'underline decoration-white';
		else if (page === link) return 'underline decoration-black';
	};
</script>

<div class="p-10 flex justify-between w-full max-w-xs font-oswald text-2xl">
	<a class={`${selectedLinkColor(INTRO)}`} href="/">Intro</a>
	<a class={`${selectedLinkColor(ABOUT)}`} href="/about">About</a>
	<a class={`${selectedLinkColor(PROJECTS)}`} href="/projects">Projects</a>
</div>
