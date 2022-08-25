<script lang="ts">
	import { page } from '$app/stores';
	import type { Project } from '$lib/assets/projects';
	import { PROJECTS } from '$lib/constants/constants';
	import Footer from '$lib/components/Footer.svelte';
	import Menu from '$lib/components/Menu.svelte';
	import Tag from '$lib/components/Tag.svelte';
	import { getBackgroundColor, getTextColor } from '$lib/utility/utility';
	import { Vimeo } from 'sveltekit-embed';

	const currentProject: Project = $page.data as Project;
</script>

<div class={`${getBackgroundColor(PROJECTS)} ${getTextColor(PROJECTS)}`}>
	<div class="container mx-auto">
		<Menu page={PROJECTS} />
	</div>
</div>

<div class={`${getTextColor(PROJECTS)} bg-projects-secondary`}>
	<div class="container mx-auto py-20 px-20">
		<div class="flex gap-x-1 font-lato text-black text-sm">
			<a class="underline" href="/projects">Projects</a>
			<h6>></h6>
			<h6>{currentProject.title}</h6>
		</div>
		<div class="h-6" />
		<h1 class="text-4xl font-oswald mb-4">{currentProject.title}</h1>
		<p class="text-base font-lato">
			{currentProject.longDescription}
		</p>
		{#if currentProject.sourceLink || currentProject.reportSource}
			<div class="h-6" />
			<h1 class="text-2xl font-oswald mb-2">Links</h1>
		{/if}
		<div class="flex flex-col items-start">
			{#if currentProject.sourceLink}
				<a
					class="font-lato underline"
					href={currentProject.sourceLink}
					target="_blank"
					rel="noopener noreferrer">Source code</a
				>
			{/if}
			{#if currentProject.reportSource}
				<a
					class="font-lato underline"
					href={currentProject.reportSource}
					target="_blank"
					rel="noopener noreferrer">Report</a
				>
			{/if}
		</div>
		<div class="h-6" />
		<h1 class="text-2xl font-oswald mb-2">Features</h1>
		<div class="flex flex-wrap">
			{#each currentProject.features as feature}
				<Tag title={feature} />
			{/each}
		</div>
		<div class="h-6" />
		<h1 class="text-2xl font-oswald mb-2">Technologies</h1>
		<div class="flex flex-wrap">
			{#each currentProject.technologies as tech}
				<Tag title={tech} />
			{/each}
		</div>
		<div class="h-6" />
		<h1 class="text-2xl font-oswald mb-2">Result</h1>
		{#if currentProject.resultImages.length > 0}
			<div class="flex flex-wrap">
				{#each currentProject.resultImages as resultImage}
					<img class="mr-2 mb-2 rounded-xl shadow-md" src={resultImage} alt={resultImage} />
				{/each}
			</div>
		{:else if currentProject.vimeoId}
			<Vimeo vimeoId={currentProject.vimeoId} />
		{:else}
			<img
				class="mr-2 mb-2 rounded-xl shadow-md"
				src={currentProject.imageSource}
				alt={currentProject.imageSource}
			/>
		{/if}
	</div>
</div>

<Footer page={PROJECTS} />
