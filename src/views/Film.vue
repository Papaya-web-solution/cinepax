<template>
	<div>
		<app-navigation></app-navigation>
		<h1>FILM : {{ id }}</h1>
		<app-footer></app-footer>
	</div>
</template>
<script>
import AppNavigation from "@/components/AppNavigation.vue";
import AppFooter from "@/components/AppFooter.vue";

export default {
	props: ["id"],
	components: {
    AppNavigation,
    AppFooter
	}
};
</script>


