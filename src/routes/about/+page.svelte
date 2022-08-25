<script lang="ts">
	import { ABOUT, BASIC, MASTER } from '$lib/constants/constants';
	import Header from '$lib/components/Header.svelte';
	import { courses } from '$lib/assets/courses';
	import type { Course } from '$lib/assets/courses';
	import { getTextColor } from '$lib/utility/utility';
	import Footer from '$lib/components/Footer.svelte';
	import CourseItem from '$lib/components/CourseItem.svelte';

	const masterCourses: Course[] = courses.filter((course) => course.level === MASTER);
	const basicCourses: Course[] = courses.filter((course) => course.level === BASIC);
</script>

<div class="flex flex-col min-h-[100vh]">
	<Header page={ABOUT} />
	<div class={`${getTextColor(ABOUT)} bg-about-secondary grow`}>
		<div class="container mx-auto py-20 px-4">
			<h1 class="text-4xl font-oswald mb-4">About me</h1>
			<p class="text-base font-lato">
				My name is Fredrik and I am a software engineer currently working as an consultant. I enjoy
				working with projects that let me utilize my sense of aesthetics together with my technical
				background. It can range from low-level performance demanding computer graphics to designing
				and implementing web applications.
			</p>
			<div class="h-6" />
			<h1 class="text-2xl mb-2 font-oswald">Master's degree</h1>
			<div class="grid xl:grid-cols-3 lg:grid-cols-2 gap-4">
				{#each masterCourses as course}
					<CourseItem code={course.code} name={course.name} />
				{/each}
			</div>
			<div class="h-6" />
			<h1 class="text-2xl mb-2 font-oswald">Bachelor's degree</h1>
			<div class="grid xl:grid-cols-3 lg:grid-cols-2 gap-4">
				{#each basicCourses as course}
					<CourseItem code={course.code} name={course.name} />
				{/each}
			</div>
		</div>
	</div>
	<Footer page={ABOUT} />
</div>
