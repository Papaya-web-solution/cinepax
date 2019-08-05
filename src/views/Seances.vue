/* eslint-disable */
<template>
	<div>
		<app-navigation></app-navigation>
		<v-content style="z-index:10; width:100%; text-align:center" >
			<v-layout justify-space-around  >
				<v-flex xs12 >
					<v-sheet elevation="10" class="py-2 px-1">
						<v-chip-group mandatory active-class="primary--text">
							<v-chip
								v-for="(d,dateSeance) in allSeances"
								:key="dateSeance"
								@click="changeDate(dateSeance)"
							>{{dateSeance |dateF2 }}</v-chip>
						</v-chip-group>
					</v-sheet>
				</v-flex>
			</v-layout>
		</v-content>
		<v-content class="mt-0 pa-0">
			<v-layout wrap>
				<v-flex xs12 class="mt-0">
						<pub pagePub="seances" classPub="max100"></pub>
					<template v-for="(Seances,idFilm) in SeancesByDay">
						<seance-card
							:Seances="Seances.seance"
							:idFilm="idFilm"
							:dateChoice="dateChoice"
							:key="idFilm"
							@goTrailer="goTrailer($event)"
						></seance-card>
					</template>
				</v-flex>

				<v-dialog v-model="trailer" fullscreen hide-overlay transition="dialog-bottom-transition">
					<template v-slot:activator="{ on }"></template>
					<v-card style="width:100%">
						<v-toolbar>
							<v-btn icon @click="closeTrailer">
								<v-icon>close</v-icon>
								
							</v-btn>
						</v-toolbar>
						<!-- https://github.com/anteriovieira/vue-youtube -->
						<youtube :video-id="videoId" :player-vars="playerVars" ref="youtube" resize  ></youtube>
					</v-card>
				</v-dialog>
			</v-layout>
		</v-content>
	</div>
</template>

<script>
import AppNavigation from "@/components/AppNavigation.vue";
import Pub from "@/components/pub.vue";
import SeanceCard from "@/components/SeanceCard.vue";
import { store } from "@/store.js";

export default {
	components: {
		AppNavigation,
		Pub,
		SeanceCard
	},
	data() {
		return {
			dateChoice: "",
			SeancesByDay: {},
			trailer: false,
			playerVars: {
				autoplay: 1
			},
			videoId: ""
		};
	},
	computed: {
		allSeances() {
			return store.state.seances;
		},
		player() {
			return this.$refs.youtube.player;
		}
	},
	mounted() {
		for (var date in store.state.seances) {
			this.dateChoice = date;
			break;
		}
	},
	methods: {
		changeDate(date) {
			this.dateChoice = date;
		},
		closeTrailer() {
			this.player.stopVideo();
			this.trailer = false;
		},
		goTrailer(idYT) {
			this.trailer = true;
			this.videoId = idYT;
		}
	},
	watch: {
		dateChoice(newValue, oldValue) {
			//console.log("22", newValue, this.allSeances[newValue]);
			this.SeancesByDay = this.allSeances[newValue];
		}
	}
};
</script>
<style>
iframe {
  width: 100%;
}
</style>
<style scoped>
.active-class {
	background-color: red;
}
</style>
