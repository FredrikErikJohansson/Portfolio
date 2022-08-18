<script lang="ts">
	import { ABOUT, BASIC, MASTER } from '$lib/constants/constants';
	import Header from '$lib/Header.svelte';
	import { courses } from '$lib/assets/courses';
	import type { Course } from '$lib/assets/courses';
	import { getTextColor } from '$lib/utility/utility';
	import Footer from '$lib/Footer.svelte';

	const masterCourses: Course[] = courses.filter((course) => course.level === MASTER);
	const basicCourses: Course[] = courses.filter((course) => course.level === BASIC);
</script>

<Header page={ABOUT} />
<div class={`${getTextColor(ABOUT)} bg-about-secondary`}>
	<div class="text-center container mx-auto py-20 px-20">
		<h1 class="text-4xl font-lato m-4">About me</h1>
		<p class="text-base font-lato">
			Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
			labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
			laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
			voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
			non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
		</p>
		<div class="h-6" />
		<h1 class="text-2xl m-2 font-lato">Master's degree</h1>
		{#each masterCourses as course}
			<p>
				{course.name}
			</p>
		{/each}
		<div class="h-6" />
		<h1 class="text-2xl m-2 font-lato">Bachelor's degree</h1>
		{#each basicCourses as course}
			<p>
				{course.name}
			</p>
		{/each}
	</div>
</div>
<Footer page={ABOUT} />
