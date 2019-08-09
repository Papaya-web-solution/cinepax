<template>
	<v-app dark class="black" id="appapp">
		<v-dialog v-model="loadingDynamic" fullscreen full-width>
			<v-container fluid fill-height style="background-color: rgba(0, 0, 0, 0.80);">
				<v-layout align-content-center justify-center fill-height wrap>
					<v-flex xs12 style="text-align: center;">
						<h3 class="white--text">
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
				<v-layout align-content-center   wrap>
					<v-toolbar
						flat
						v-if="splashAnnonce.close"
						height="40px"
						fixed
						style="background-color: rgba(0,0, 0, 0.5);"
					>
						<v-spacer></v-spacer>
						<v-btn icon dark @click="loadingAnnonce = false">
							<v-icon>close</v-icon>
						</v-btn>
					</v-toolbar>
					<v-flex xs8 offset-xs2  >
						<div v-if="splashAnnonce.html!='' && splashAnnonce.image==''" v-html="splashAnnonce.html"></div>
						<v-img
							v-if="splashAnnonce.image!=''"
							style="max-height:85vh; width:auto;"
							contain
							:src="splashAnnonce.image"
						></v-img>
					</v-flex>
				</v-layout>
			</v-container>
		</v-dialog>
		<vue-page-transition name="overlay-left-full">
			<router-view style="margin-bottom:80px"></router-view>
		</vue-page-transition>
		<app-footer></app-footer>
	</v-app>
</template>

<script>
import AppFooter from "@/components/AppFooter.vue";
import { store } from "@/store.js";
import router from "./router.js";

export default {
	name: "App",
	components: {
		AppFooter
	},
	computed: {
		loadingDynamic() {
			return store.state.loadingDynamic;
		},
		goAfterLoading() {
			return store.state.goAfterLoading;
		},
		splashAnnonce() {
			return store.state.splashAnnonce;
		},
		loadingAnnonce: {
			get: function() {
				return store.state.loadingAnnonce;
			},
			set: function() {
				store.state.loadingAnnonce = false;
			}
		}
	},
	created() {
		store.state.loadingDynamic = true;
		store.dispatch("getDatasDynamic");
	},
	watch: {
		goAfterLoading(newValue, oldValue) {
			if (newValue != "") {
				router.push({ name: newValue });
			}
		}
	}
};
</script>

<style>

.overlay-left,
.overlay-right,
.overlay-top,
.overlay-bottom {
	background: rgb(71, 71, 71) !important;
	z-index:2 !important;
}
</style>
