<template>
	<v-app dark class="black">
		<v-dialog v-model="loadingDynamic" fullscreen full-width>
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
		<v-dialog v-model="loadingAnnonce" fullscreen full-width>
			<v-container fluid fill-height style="background-color: rgba(0, 0, 0, 1);">
				<v-layout align-content-center justify-center fill-height wrap>
					<v-toolbar v-if="splashAnnonce.close" absolute style="background-color: rgba(0, 0, 0, 0);">
						<v-spacer></v-spacer>
						<v-btn icon dark @click="loadingAnnonce = false">
							<v-icon>close</v-icon>
						</v-btn>
					</v-toolbar>
					<v-flex xs12 style="text-align: center;">
						<div v-html="splashAnnonce.html"></div>
					</v-flex>
				</v-layout>
			</v-container>
		</v-dialog>
		<vue-page-transition name="overlay-left-full">
			<router-view style="margin-bottom:80px"></router-view>
		</vue-page-transition>
		<app-footer ></app-footer>
	</v-app>
</template>

<script>
import AppFooter from "@/components/AppFooter.vue";
import {store} from "@/store.js";

export default {
	name: "App",
	components: {
		AppFooter
	},
	computed: {
		loadingDynamic() {
			return store.state.loadingDynamic
		},
		splashAnnonce() {
			return store.state.splashAnnonce
		},
		loadingAnnonce() {
			return store.state.loadingAnnonce
		}
	},
	created() {		
		store.state.loadingDynamic = true;
		store.dispatch("getDatasDynamic");
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
