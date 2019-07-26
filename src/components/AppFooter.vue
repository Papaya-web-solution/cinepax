<template>
	<div>
		<div v-if="$store.state.route.meta['footer']=='normal'">
			<v-footer class="px-3" color="grey--text text--darken-2">
				<v-layout justify-center>
					<div>
						<template v-for="(route) in $router.options.routes">
							<span v-if="route.meta" :key="route.name">
								<span v-if="route.meta.menu=='footer'">
									<router-link :to="{name: route.name}" class="mx-2">{{route.meta.title}}</router-link>
								</span>
							</span>
						</template>
					</div>
				</v-layout>
			</v-footer>
		</div>
		<div v-if="$store.state.route.meta['footer']=='autre'">
			<v-footer class="px-3" color="grey--text text--darken-2">
				<v-layout justify-center>
					test
				</v-layout>
			</v-footer>
		</div>
	</div>
</template>

<script>
export default {};
</script>

<style  scoped>
footer a {
	color: #bdbdbd;
	text-decoration: none;
}
</style>