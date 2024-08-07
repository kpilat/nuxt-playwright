<script setup lang="ts">

</script>

<template>
	<section class="py-10 bg-green-100">
		<div class="container">
			<div class="grid grid-cols-2 gap-10 items-center">
				<div>
					<h2 class="text-3xl mb-2">Heading</h2>
					<p class="max-w-[800px]">
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae culpa deleniti
						deserunt dicta dolorem dolorum enim, exercitationem expedita fuga, impedit ipsum praesentium quo
						recusandae repellendus suscipit vel, veniam!
					</p>
				</div>
				<NuxtPicture
					src="/images/banner.jpg"
					alt="Banner"
					:img-attrs="{class: 'aspect-square object-cover'}"
				/>
			</div>
		</div>
	</section>
</template>

<style scoped>

</style>