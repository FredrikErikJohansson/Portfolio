<script lang="ts">
	import { page } from '$app/stores';
	import type { Project } from '$lib/assets/projects';
	const currentProject: Project = $page.data as Project;
</script>

<h1>Project with slug</h1>
<h1>{currentProject.title}</h1>
