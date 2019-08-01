<template>
	<div>
		<div v-if="$store.state.route.meta['footer']=='normal'">
			<v-footer absolute  class="pa-4">
				<v-layout justify-center >
					<v-bottom-navigation>
						<template v-for="(route) in $router.options.routes">
									<v-btn v-if="route.meta && intoMenu(route.meta.menu,'footer')==true" :key="route.name">
										<span><router-link :to="{name: route.name}" class="mx-2">{{route.meta.title}}</router-link></span>
										<v-icon>{{route.meta.icon}}</v-icon>
									</v-btn>
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
export default {
	methods: {
		intoMenu(metamenu, menu) {
			if (metamenu.indexOf(menu)>-1) {
				return true
			} else {
				return false
			}
		}
	}

};
</script>

<style  scoped>
footer a {
	color: #bdbdbd;
	text-decoration: none;
}
</style>