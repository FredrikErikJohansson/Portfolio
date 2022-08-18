<script lang="ts">
	import { getBackgroundColor, getTextColor } from './utility/utility';
	export let page: string;
</script>

<div class={`${getBackgroundColor(page)} ${getTextColor(page)} p-4 flex flex-col items-center`}>
	<h1>Contact</h1>
	<h2>fredrik96.johansson@gmail.com</h2>
</div>
