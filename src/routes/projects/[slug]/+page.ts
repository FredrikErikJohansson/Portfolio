import { projects } from '$lib/assets/projects';
import { error } from '@sveltejs/kit';

/** @type {import('./$types').PageLoad} */
export function load({ params }: any) {
	const currentProject = projects.find((project) => project.id === params.slug);
	if (currentProject) {
		return currentProject;
	}

	throw error(404, 'Not found');
}
