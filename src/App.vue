<template>
	<v-app dark class="black">
		<v-dialog v-model="this.$store.state.loadingDynamic" fullscreen full-width>
			<v-container fluid fill-height style="background-color: rgba(0, 0, 0, 0.80);">
				<v-layout align-content-center justify-center fill-height wrap>
					<v-flex xs12 style="text-align: center;">
						<h3>
							Chargement des dernières informations
							<br />Veuillez patientez quelques instant.
						</h3>
					</v-flex>
					<v-flex xs4 mt-4 style="text-align: center;">
						<v-progress-circular size="60" color="primary" indeterminate></v-progress-circular>
					</v-flex>
				</v-layout>
			</v-container>
		</v-dialog>
		<v-dialog v-model="this.$store.state.loadingAnnonce" fullscreen full-width>
			<v-container fluid fill-height style="background-color: rgba(0, 0, 0, 1);">
				<v-layout align-content-center justify-center fill-height wrap>
					<v-toolbar v-if="this.$store.state.splashAnnonce.close" absolute style="background-color: rgba(0, 0, 0, 0);">
						<v-spacer></v-spacer>
						<v-btn icon dark @click="$store.state.loadingAnnonce = false">
							<v-icon>close</v-icon>
						</v-btn>
					</v-toolbar>
					<v-flex xs12 style="text-align: center;">
						<div v-html="this.$store.state.splashAnnonce.html">{{}}</div>
					</v-flex>
				</v-layout>
			</v-container>
		</v-dialog>
		<vue-page-transition name="overlay-left-full">
			<router-view></router-view>
		</vue-page-transition>
		<app-footer></app-footer>
	</v-app>
</template>

<script>
import AppFooter from "@/components/AppFooter.vue";

export default {
	name: "App",
	components: {
		AppFooter
	},
	data() {
		return {
			loadingDynamic: true 
		};
	},
	beforeMount() {		
		this.$store.state.loadingDynamic = true;
		this.$store.dispatch("getDatasDynamic");
	}
};
</script>

<style>
.overlay-left,
.overlay-right,
.overlay-top,
.overlay-bottom {
	background: rgb(71, 71, 71) !important;
}
</style>
