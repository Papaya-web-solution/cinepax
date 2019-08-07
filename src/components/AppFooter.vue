<template>
	<div v-if="metaFooter">
		<div v-if="metaFooter.footer=='normal'">
			<v-footer app fixed>
				<v-layout justify-center>
					<template v-for="(route) in $router.options.routes">
						<router-link
							:to="{name: route.name}"
							v-if="route.meta && intoMenu(route.meta.menu,'footer')==true"
							:key="route.meta.title"
						>
							<v-tooltip top>
								<template v-slot:activator="{ on }">
									<v-btn v-on="on" class="mx-0">
										<v-icon>{{route.meta.icon}}</v-icon>
									</v-btn>
								</template>
								<span>{{route.meta.title}}</span>
							</v-tooltip>
						</router-link>
					</template>
				</v-layout>
			</v-footer>
		</div>
		<div v-if="metaFooter.footer=='autre'">
			<v-footer app fixed color="grey--text text--darken-2">
				<v-layout justify-center>test</v-layout>
			</v-footer>
		</div>
	</div>
</template>

<script>
import { store } from "@/store.js";

export default {
	computed: {
		metaFooter() {
			return store.state.route.meta;
		}
	},
	methods: {
		intoMenu(metamenu, menu) {
			if (metamenu.indexOf(menu) > -1) {
				return true;
			} else {
				return false;
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