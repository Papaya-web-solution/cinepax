<template>
	<div>
		<app-navigation></app-navigation>
		<v-container fill-height text-xs-center>
			<v-layout align-center>
				<v-flex>
					<h1>LES CINEMAS de PAPEETE</h1>
				</v-flex>
			</v-layout>
		</v-container>
	</div>
</template>

<script>
import AppNavigation from "@/components/AppNavigation.vue";
export default {
	components: {
		AppNavigation
	}
};
</script>