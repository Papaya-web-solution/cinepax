<template>
	<div>
		<app-navigation></app-navigation>
		<v-content style="position:fixed; z-index:2; width:100%; text-align:center">
			<v-layout style="background:gray">
				<v-flex class="xs10 offset-xs1">
					<!-- https://ssense.github.io/vue-carousel/api/ -->
					<carousel
						class="mx-2"
						:perPageCustom="[[100, 1], [250, 2], [340, 3], [480, 4], [600, 5], [720, 6], [1000, 7]]"
						:navigationClickTargetSize="20"
						:navigationEnabled="true"
						:paginationEnabled="false"
					>
						<template v-for="(d,dateSeance) in allSeances">
							<slide :key="dateSeance" class="py-1">
								<v-chip
									:color="dateSeance==dateChoice ? 'primary black--text' : ''"
									@click="changeDate(dateSeance)"
									class="font-weight-bold"
								>{{dateSeance |dateF3 }}</v-chip>
							</slide>
						</template>
					</carousel>
				</v-flex>
			</v-layout>
		</v-content>
		<v-content>
			<v-layout wrap>
				<v-flex xs12 style="margin-top:70px;">
					<pub pagePub="seances" classPub="max100" class="mb-2"></pub>
					<template v-for="(Seances,idFilm) in SeancesByDay">
						<film-card
							:key="idFilm"
							source="Seances"
							:idFilm="idFilm"
							:Seances="Seances.seance"
							:dateChoice="dateChoice"
							cinemaChoice
							class="pa-2"
							@goTrailer="goTrailer($event)"
						></film-card>
					</template>
					<player-video v-if="trailer && videoId!=''" :videoId="videoId" :trailer="trailer" @stopTrailer="stopTrailer($event)"></player-video>
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
		Pub,
		FilmCard,
		Carousel,
		Slide,
		PlayerVideo
	},
	data() {
		return {
			dateChoice: "",
			SeancesByDay: {},
			trailer: false,
			videoId: ""
		};
	},
	computed: {
		allSeances() {
			return store.state.seances;
		}
	},

	beforeMount() {
		for (var date in store.state.seances) {
			this.dateChoice = date;
			break;
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
		changeDate(date) {
			window.scrollTo({ top: 0, behavior: "smooth" });
			this.dateChoice = date;
		}
	},
	watch: {
		dateChoice(newValue) {
			//console.log("22", newValue, this.allSeances[newValue]);
			this.SeancesByDay = this.allSeances[newValue];
		}
	}
};
</script>