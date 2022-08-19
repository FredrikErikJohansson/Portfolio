<script lang="ts">
	export let src: string;
	export let alt: string;
</script>

<div class=" m-4 w-96 rounded-md overflow-hidden shadow-lg relative">
	<img class="w-full h-56 object-cover" {src} {alt} />
	<div
		class="p-4 opacity-0 ease-in-out hover:backdrop-brightness-50 hover:opacity-100 duration-300 absolute inset-0 z-10 flex justify-center items-center text-6xl text-projects-bright font-bold font-oswald"
	>
		{alt}
	</div>
</div>
