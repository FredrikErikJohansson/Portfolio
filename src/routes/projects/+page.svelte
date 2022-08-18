<script lang="ts">
	import { projects } from '$lib/assets/projects';
	import type { Project } from '$lib/assets/projects';

	import { PROJECTS } from '$lib/constants/constants';
	import Footer from '$lib/Footer.svelte';
	import Header from '$lib/Header.svelte';
	import { getTextColor } from '$lib/utility/utility';

	const projects2021: Project[] = projects.filter((project) => project.year === 2021);
	const projects2020: Project[] = projects.filter((project) => project.year === 2020);
	const projects2019: Project[] = projects.filter((project) => project.year === 2019);
	const projects2018: Project[] = projects.filter((project) => project.year === 2018);
</script>

<Header page={PROJECTS} />

<div class={`${getTextColor(PROJECTS)} bg-projects-secondary`}>
	<div class="text-center container mx-auto py-20 px-20">
		<h1 class="text-4xl font-lato m-4">Projects</h1>
		<p class="text-base font-lato">
			Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
			labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
			laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
			voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
			non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
		</p>
		<div class="h-6" />
		<h1 class="text-2xl m-2 font-lato">2021</h1>
		{#each projects2021 as project}
			<p>
				{project.title}
			</p>
		{/each}
		<div class="h-6" />
		<h1 class="text-2xl m-2 font-lato">2020</h1>
		{#each projects2020 as project}
			<p>
				{project.title}
			</p>
		{/each}
		<div class="h-6" />
		<h1 class="text-2xl m-2 font-lato">2019</h1>
		{#each projects2019 as project}
			<p>
				{project.title}
			</p>
		{/each}
		<div class="h-6" />
		<h1 class="text-2xl m-2 font-lato">2018</h1>
		{#each projects2018 as project}
			<p>
				{project.title}
			</p>
		{/each}
	</div>
</div>

<Footer page={PROJECTS} />
