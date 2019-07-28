<template>
	<div>
		<app-navigation></app-navigation>
		<v-content>
		<h1>FILM : {{ id }}</h1>
		</v-content>
	</div>
</template>
<script>
import AppNavigation from "@/components/AppNavigation.vue";

export default {
	props: ["id"],
	components: {
    AppNavigation
	}
};
</script>


