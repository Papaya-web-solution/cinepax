<template>
	<div>
		<app-navigation></app-navigation>
		<v-content>
			<v-layout wrap>
				<v-flex xs12>
					<div class="mb-3">
						<pub pagePub="films" classPub="max100"></pub>
					</div>
					<template v-for="(film,index) in films">
						<film-card :film="film" :idFilm="index" :key="index" @fromChild="methodFromChild($event)"></film-card>
					</template>
				</v-flex>

				<v-dialog v-model="trailer" fullscreen hide-overlay transition="dialog-bottom-transition">
					<template v-slot:activator="{ on }"></template>
					<v-card>
						<v-toolbar>
							<v-btn icon @click="closeTrailer">
								<v-icon>close</v-icon>
							</v-btn>
						</v-toolbar>
						<!-- https://github.com/anteriovieira/vue-youtube -->
						<youtube :video-id="videoId" :player-vars="playerVars" ref="youtube" fitParent></youtube>
					</v-card>
				</v-dialog>
			</v-layout>
		</v-content>
	</div>
</template>

<script>
import AppNavigation from "@/components/AppNavigation.vue";
import FilmCard from "@/components/FilmCard.vue";
import Pub from "@/components/pub.vue";
import {store} from "@/store.js";

export default {
	components: {
		AppNavigation,
		FilmCard,
		Pub
	},
	data() {
		return {
			trailer: false,
			playerVars: {
				autoplay: 1
			},
			videoId:""
		};
	},
	methods: {
		closeTrailer() {
			this.player.stopVideo();
			this.trailer = false;
		},
		methodFromChild(idYT) {
			this.trailer = true;
			this.videoId=idYT
			console.log("eeeeeeeeeeeeeeeeee", e)
		}
	},
	computed: {
		player() {
			return this.$refs.youtube.player;
		},
		films() {
			return store.state.films;
		}
	}
};
</script>

<style scoped>
</style>