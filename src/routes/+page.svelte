<script lang="ts">
	import Card from '$lib/Card.svelte';

	import { INTRO } from '$lib/constants/constants';
	import Footer from '$lib/Footer.svelte';
	import Header from '$lib/Header.svelte';
	import { getTextColor } from '$lib/utility/utility';
	import { projects, type Project } from '$lib/assets/projects';

	const projectsSorted: Project[] = projects
		.sort((a, b) => {
			if (a.year < b.year) {
				return 1;
			}
			if (a.year > b.year) {
				return -1;
			}
			return 0;
		})
		.slice(0, 2);
</script>

<div class="flex flex-col min-h-[100vh]">
	<Header page={INTRO} />
	<div class={`${getTextColor(INTRO)} bg-intro-secondary grow`}>
		<div class="container mx-auto py-20 px-20">
			<h1 class="text-4xl font-oswald mb-4">Recent work</h1>
			<p class="text-base font-lato">
				Here you can see my most recent academic and personal projects.
			</p>
			<div class="h-10" />
			<div class="grid xl:grid-cols-2 lg:grid-cols-1 gap-4 text-center">
				{#each projectsSorted as project}
					<a href={`/projects/${project.id}`}>
						<Card page={INTRO} src={project.imageSource} alt={project.title} />
					</a>
				{/each}
			</div>
		</div>
	</div>

	<Footer page={INTRO} />
</div>
