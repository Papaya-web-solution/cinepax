<template>
	<div>
		<app-navigation style="z-index:100;"></app-navigation>
		<v-content style="position:fixed; z-index:2; width:100%; text-align:center">
			<v-layout justify-space-around>
				<v-flex xs12>
					<v-sheet>
						<v-item-group mandatory>
							<v-container grid-list-xs class="py-2 px-1">
								<v-layout wrap>
									<v-flex>
										<v-item>
											<v-chip
												@click="changeCine('')"
												:color="cinemaChoice=='' ? 'primary' : ''"
												class="font-weight-bold text-uppercase"
											>Tous</v-chip>
										</v-item>
									</v-flex>
									<v-flex v-for="(cinema,idCinema) in cinemas" :key="idCinema">
										<v-item>
											<v-chip
												:color="idCinema==cinemaChoice ? 'primary' : ''"
												@click="changeCine(idCinema)"
												class="font-weight-bold text-uppercase"
											>{{cinema.title}}</v-chip>
										</v-item>
									</v-flex>
								</v-layout>
							</v-container>
						</v-item-group>
					</v-sheet>
				</v-flex>
			</v-layout>
		</v-content>
		<v-content class="pa-0">
			<v-layout wrap>
				<v-flex xs12 style="margin-top:150px;">
					<pub pagePub="films" classPub="max100"></pub>
					<template v-for="(film,idFilm) in films">
						<div v-if="FilmByCinema(idFilm)" :key="idFilm">
							<film-card
								source="Films"
								:idFilm="idFilm"
								:Seances="allSeances(idFilm)"
								:cinemaChoice="cinemaChoice"
								dateChoice="0"
							></film-card>
						</div>
					</template>
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

export default {
	components: {
		AppNavigation,
		FilmCard,
		Pub
	},
	data() {
		return {
			cinemaChoice: ""
		};
	},
	computed: {
		films() {
			return store.state.films;
		},
		cinemas() {
			return store.state.cinemas;
		}
	},
	methods: {
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
			const seances = this.films[idFilm].seances;
			//	console.log("aaa", idFilm, this.cinemaChoice);
			for (var property1 in seances) {
				if (
					seances[property1].id_cinema == this.cinemaChoice ||
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
			this.$forceUpdate();
		}
	}
};
</script>
<style scoped>
</style>