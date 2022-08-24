<script lang="ts">
	import { projects } from '$lib/assets/projects';
	import type { Project } from '$lib/assets/projects';

	import { PROJECTS } from '$lib/constants/constants';
	import Footer from '$lib/Footer.svelte';
	import Header from '$lib/Header.svelte';
	import { getTextColor } from '$lib/utility/utility';
	import Card from '$lib/Card.svelte';

	const projectsSorted: Project[] = projects.sort((a, b) => {
		if (a.year < b.year) {
			return 1;
		}
		if (a.year > b.year) {
			return -1;
		}
		return 0;
	});
</script>

<div class="flex flex-col min-h-[100vh]">
	<Header page={PROJECTS} />
	<div class={`${getTextColor(PROJECTS)} bg-projects-secondary grow`}>
		<div class="container mx-auto py-20 px-20">
			<h1 class="text-4xl font-oswald mb-4">Projects</h1>
			<p class="text-base font-lato">
				Here is a list of my academic and personal projects sorted by date.
			</p>
			<div class="h-10" />
			<div class="grid xl:grid-cols-3 lg:grid-cols-2 gap-4 text-center">
				{#each projectsSorted as project}
					<a href={`/projects/${project.id}`}>
						<Card page={PROJECTS} src={project.imageSource} alt={project.title} />
					</a>
				{/each}
			</div>
		</div>
	</div>
	<Footer page={PROJECTS} />
</div>
