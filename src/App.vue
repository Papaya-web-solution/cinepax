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
			<v-container fluid fill-height style="background-color: rgba(0, 0, 0, 1);" class="pa-0 ma-0">
				<v-layout align-content-center justify-center fill-height wrap>
					<v-toolbar flat v-if="splashAnnonce.close" absolute style="background-color: rgba(0, 0, 0, 0);">
						<v-spacer></v-spacer>
						<v-btn icon dark @click="loadingAnnonce = false">
							<v-icon>close</v-icon>
						</v-btn>
					</v-toolbar>
					<v-flex xs12 class="pa-0 ma-0" style="text-align: center;">
						<div v-if="splashAnnonce.html!='' && splashAnnonce.image==''" v-html="splashAnnonce.html"></div>
						<v-img v-if="splashAnnonce.image!=''" contain max-height="100vh" max-width="100vw" width="100vw" :src="splashAnnonce.image"></v-img>
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
import router from './router.js'

export default {
	name: "App",
	components: {
		AppFooter
	},
	computed: {
		loadingDynamic() {
			return store.state.loadingDynamic
		},
		goAfterLoading() {
			return store.state.goAfterLoading
		},
		splashAnnonce() {
			return store.state.splashAnnonce
		},
		loadingAnnonce: {
			get: function () {
			return store.state.loadingAnnonce
			},
			set: function () {
			store.state.loadingAnnonce = false
			}
		}
	},
	created() {		
		store.state.loadingDynamic = true;
		store.dispatch("getDatasDynamic");
	},
	watch: {
		goAfterLoading(newValue, oldValue) {
		//	console.log("eeqsde", newValue, oldValue);
			if(newValue!="") {
				router.push({ name: newValue})
			}
		}
	},
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
