<script>
	import { page } from '$app/stores';

	console.log($page.error);
</script>

<section class="flex justify-center">
	<img src="/error.png" class="w-[300px] aspect-square"/>
	<div class="flex flex-col p-5">
		<h1 class="text-6xl">Sorry,</h1>
		<h1 class="text-6xl">something went wrong</h1>
		<p class="pt-2">Please try again later</p>
		<p class="mt-auto">Reason: {$page.error?.message}</p>
	</div>
</section>