<template>
	<div>
		<app-navigation></app-navigation>
		<v-content>
			<v-container fluid fill-height class="d-flex">
				<div>
					<v-layout align-center justify-center column>
						<v-flex>
							<v-card style="padding:50px;" elevation="10">
								<img src="@/assets/logo.png" width="192"></img>
								<div style="text-align:center">
									<h5 text-md-center>{{this.$root.appTxt.version}}</h5>
								</div>
							</v-card>
						</v-flex>
						<v-flex class="mt-4">
							<v-btn @click.prevent="pushRoute()">Continuer</v-btn>
						</v-flex>
						<v-flex class="mt-4">
							<install-prompt></install-prompt>
						</v-flex>
					</v-layout>
					<pub :pubs="pubs" pagePub="home" classPub="max100"></pub>
				</div>
			</v-container>
		</v-content>
	</div>
</template>

<script>
import InstallPrompt from "@/components/InstallPrompt.vue";
import AppNavigation from "@/components/AppNavigation.vue";
import AppTxt from "@/assets/lang/fr.js";

export default {
	components: {
		InstallPrompt,
		AppNavigation
	},
	data() {
		return {};
	},
	props: {
		pubs: {}
	},
	methods: {
		pushRoute() {
			this.$root.gPushRoute("seances", "");
		}
	}
};
</script>
<style scoped>
</style>