<script lang="ts">
	import Menu from '$lib/Menu.svelte';
	import HeaderImage from '$lib/assets/header-image.png';
	import { getBackgroundColor, getTextColor } from './utility/utility';
	export let page: string;
</script>

<div
	class={`${getBackgroundColor(page)} ${getTextColor(
		page
	)} h-screen flex justify-between max-h-[64rem]`}
>
	<div class="flex flex-col w-full items-center justify-between">
		<Menu />
		<h1 class="m-20 text-8xl font-oswald">Fredrik Johansson</h1>
		<div class="mb-20" />
	</div>
	<img class="object-cover" src={HeaderImage} alt="download icon" />
</div>
