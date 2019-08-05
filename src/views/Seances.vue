/* eslint-disable */
<template> 
	<div>
		<app-navigation></app-navigation>
		<v-content style="position:fixed; z-index:2; width:100%; text-align:center">
			<v-layout justify-space-around>
				<v-flex xs12>
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
		<v-content class="pa-0">
			<v-layout wrap>
				<v-flex xs12 style="margin-top:150px;">
					<pub pagePub="seances" classPub="max100"></pub>
					<template v-for="(Seances,idFilm) in SeancesByDay">
						<film-card
							:key="idFilm"
							source="Seances"
							:idFilm="idFilm"
							:Seances="Seances.seance"
							:dateChoice="dateChoice"
							cinemaChoice=""
						></film-card>
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
		Pub,
		FilmCard
	},
	data() {
		return {
			dateChoice: "",
			SeancesByDay: {},
		};
	},
	computed: {
		allSeances() {
			return store.state.seances;
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
<style scoped>
.active-class {
	background-color: red;
}
</style>
