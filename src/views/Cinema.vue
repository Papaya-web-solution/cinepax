<template>
	<div>
		<app-navigation></app-navigation>
		<v-content>
		<h1>CINEMA : {{ id }}  {{cinema.title}}</h1>
		</v-content>
	</div>
</template>
<script>
import AppNavigation from "@/components/AppNavigation.vue";

export default {
	props: ["id"],
	components: {
    AppNavigation
	},
	computed: {
		cinema() {
			return this.$store.state.cinemas[this.id]
		}
	}
};
</script>
