<script lang="ts">
	import { PROJECTS } from './constants/constants';

	export let src: string;
	export let alt: string;
	export let page: string;

	const getHoverColor = (page: string) => {
		if (page === PROJECTS) return 'text-projects-bright';
		else return 'text-intro-secondary';
	};
</script>

<div class="rounded-md overflow-hidden shadow-lg relative">
	<img class="w-full h-64 object-cover" {src} {alt} />
	<div
		class={`${getHoverColor(
			page
		)} p-4 opacity-0 ease-in-out hover:backdrop-brightness-50 hover:opacity-100 duration-300 absolute inset-0 z-10 flex justify-center items-center text-6xl font-oswald`}
	>
		{alt}
	</div>
</div>
