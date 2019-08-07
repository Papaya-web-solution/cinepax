<template>
	<div>
		<app-navigation></app-navigation>
		<v-content>
			<div class="mb-3">
				<pub pagePub="evenements" classPub="max100"></pub>
			</div>
			<v-container text-center>
				<v-layout wrap>
					<v-flex xs12 v-for="(evenement,index) in evenements" :key="index"  class="secondary pa-3 mb-3">
						<div v-if="evenement.html!=''" v-html="evenement.html"></div>
						<v-img v-if="evenement.image!=''" max-width="100%" width="100%" :src="evenement.image"></v-img>
					</v-flex>
				</v-layout>
			</v-container>
		</v-content>
	</div>
</template>

<script>
import AppNavigation from "@/components/AppNavigation.vue";
import Pub from "@/components/pub.vue";
import { store } from "@/store.js";

export default {
	components: {
		AppNavigation,
		Pub
	},
	computed: {
		evenements() {
			return store.state.evenements;
		}
	}
};
</script>
<style scoped>
</style>
