<template>
	<div>
		<div v-if="$store.state.route.meta['footer']=='normal'">
			<v-footer absolute  class="pa-4">
				<v-layout justify-center >
					<v-bottom-navigation horizontal>
						<template v-for="(route) in $router.options.routes">
							<span v-if="route.meta" :key="route.name">
								<span v-if="route.meta.menu=='footer'">
									<v-btn>
										<router-link :to="{name: route.name}" class="mx-2">{{route.meta.title}}</router-link>
										<v-icon>{{route.meta.icon}}</v-icon>
									</v-btn>
								</span>
							</span>
						</template>
					</v-bottom-navigation>
				</v-layout>
			</v-footer>
		</div>
		<div v-if="$store.state.route.meta['footer']=='autre'">
			<v-footer class="px-3" color="grey--text text--darken-2">
				<v-layout justify-center>test</v-layout>
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