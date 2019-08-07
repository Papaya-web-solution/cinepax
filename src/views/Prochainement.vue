<template>
	<div>
		<app-navigation></app-navigation>
		<v-content style="position:fixed; z-index:2; width:100%; text-align:center">
			<v-layout style="background:gray">
				<v-flex class="xs10 offset-xs1">
					<!-- https://ssense.github.io/vue-carousel/api/ -->
					<carousel
						class="mx-2"
						:perPageCustom="[[100, 1], [250, 2], [400, 3], [480, 4], [600, 6]]"
						:navigationClickTargetSize="20"
						:navigationEnabled="true"
						:paginationEnabled="false"
					>
						<slide class="py-1">
							<v-chip
								@click="changeCine('')"
								:color="cinemaChoice=='' ? 'primary' : ''"
								class="font-weight-bold text-uppercase"
							>Tous</v-chip>
						</slide>
						<template v-for="(cinema,idCinema) in cinemas">
							<slide :key="idCinema" class="py-1">
								<v-chip
									:color="idCinema==cinemaChoice ? 'primary' : ''"
									@click="changeCine(idCinema)"
									class="font-weight-bold text-uppercase"
								>{{cinema.title}}</v-chip>
							</slide>
						</template>
					</carousel>
				</v-flex>
			</v-layout>
		</v-content>
		<v-content>
			<v-layout wrap>
				<v-flex xs12 style="margin-top:70px;">
					<pub pagePub="prochainement" classPub="max100" class="mb-2"></pub>
          
					<template v-for="(film,idFilm) in films">
						<div v-if="FilmByCinema(idFilm)" :key="idFilm">
							<film-card
								source="prochainement"
								:idFilm="idFilm"
								:Seances={}
								:cinemaChoice="cinemaChoice"
								dateChoice="0"
								class="pa-2"
								@goTrailer="goTrailer($event)"
							></film-card>
						</div>
					</template>
					<player-video
						v-if="trailer && videoId!=''"
						:videoId="videoId"
						:trailer="trailer"
						@stopTrailer="stopTrailer($event)"
					></player-video>
				</v-flex>
			</v-layout>
		</v-content>
	</div>
</template>

<script>
import AppNavigation from "@/components/AppNavigation.vue";
import { store } from "@/store.js";
import Pub from "@/components/pub.vue";
import FilmCard from "@/components/FilmCard.vue";
import { Carousel, Slide } from "vue-carousel";
import PlayerVideo from "@/components/PlayerVideo.vue";

export default {
	components: {
		AppNavigation,
		FilmCard,
		Pub,
		Carousel,
		Slide,
		PlayerVideo
	},
	data() {
		return {
			cinemaChoice: "",
			trailer: false,
			videoId: ""
		};
	},
	computed: {
		films() {
			return store.state.prochainement;
		},
		cinemas() {
			return store.state.cinemas;
		}
	},
	methods: {
		goTrailer(videoId) {
			this.trailer = true;
			this.videoId = videoId;
		},
		stopTrailer() {
			this.trailer = false;
			this.videoId = "";
		},
		allSeances(idFilm) {
			var result = [];
			for (var cle in this.films[idFilm].seances) {
				result.push(cle);
			}
			return result;
		},
		changeCine(idCinema) {
			this.cinemaChoice = idCinema;
		},
		FilmByCinema(idFilm) {
			const cinemas = this.films[idFilm].cinemas;
			for (var property1 in cinemas) {
				if (
					cinemas[property1] == this.cinemaChoice ||
					this.cinemaChoice == ""
				) {
					return true;
				}
			}
			return false;
		}
	},
	watch: {
		cinemaChoice(newValue) {
			//console.log("22", newValue);
			window.scrollTo({ top: 0, behavior: "smooth" });
			this.$forceUpdate();
		}
	}
};
</script>
<style scoped>
</style>