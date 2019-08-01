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
						<!-- <youtube video-id="IH0CwRZxjoU" :player-vars="playerVars" ref="youtube"></youtube> -->
					</v-card>
				</v-dialog>
			</v-layout>
		</v-content>
	</div>
</template>

<script>
import AppNavigation from "@/components/AppNavigation.vue";
import FilmCard from "@/components/FilmCard.vue";

export default {
	components: {
		AppNavigation,
		FilmCard
	},
	data() {
		return {
			trailer: false,
			playerVars: {
				autoplay: 1
			}
		};
	},
	methods: {
		closeTrailer() {
			this.player.stopVideo();
			this.trailer = false;
		},
		methodFromChild(e) {
			this.trailer = true;
			console.log(e)
			console.log("eeeeeeeeeeeeeeeeee")
		}
	},
	computed: {
		player() {
			return this.$refs.youtube.player;
		},
		films() {
			return this.$store.state.films;
		}
	}
};
</script>

<style scoped>
</style>