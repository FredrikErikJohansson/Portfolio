<script>
	import { INTRO } from '$lib/constants/constants';
	import Footer from '$lib/Footer.svelte';
	import Header from '$lib/Header.svelte';
	import { getTextColor } from '$lib/utility/utility';
</script>

<Header page={INTRO} />

<div class={`${getTextColor(INTRO)} bg-intro-secondary`}>
	<div class="text-center container mx-auto py-20 px-20">
		<h1 class="text-4xl font-lato m-4">Recent work</h1>
		<p class="text-base font-lato">
			Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
			labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
			laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
			voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
			non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
		</p>
	</div>
</div>

<Footer page={INTRO} />
