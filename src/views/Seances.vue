/* eslint-disable */
<template>
	<div>
		<app-navigation></app-navigation>

		<v-content>XXXXXXXXXX
			<v-sheet class="mx-auto" max-width="700">
				<v-slide-group multiple show-arrows>
					<v-slide-item v-for="n in 25" :key="n" v-slot:default="{ active, toggle }">
						<v-btn
							class="mx-2"
							:input-value="active"
							active-class="purple white--text"
							depressed
							rounded
							@click="toggle"
						>Options {{ n }}</v-btn>
					</v-slide-item>
				</v-slide-group>
			</v-sheet>
			<v-layout justify-space-around>
				<v-flex xs12>
					<v-sheet elevation="10" class="py-4 px-1">
						<v-chip-group v-model="selection" mandatory active-class="deep-purple--text text--accent-4">
							<v-chip v-for="date in listDates" :key="date">{{ date }}</v-chip>
						</v-chip-group>
					</v-sheet>
				</v-flex>
			</v-layout>
			<div class="my-2" style="text-align:center">
				<h3 class="primary--text text-uppercase">Séances du</h3>
			</div>
			<pub pagePub="seances" classPub="max100"></pub>
			<v-tabs grow icons-and-text>
				<v-tabs-slider color="primary"></v-tabs-slider>
				<v-tab href="#tab-1">
					Aujourd'hui
					<v-icon>today</v-icon>
				</v-tab>
				<v-tab href="#tab-2">
					Semaine
					<v-icon>calendar_today</v-icon>
				</v-tab>
				<v-tab href="#tab-3">
					Cinéma
					<v-icon>place</v-icon>
				</v-tab>
				<v-tab-item :key="1" :value="'tab-1'">
					<seancestoday></seancestoday>
				</v-tab-item>
				<v-tab-item :key="2" :value="'tab-2'">
					<seancesweek></seancesweek>
				</v-tab-item>
				<v-tab-item :key="3" :value="'tab-3'">
					<seancescine></seancescine>
				</v-tab-item>
			</v-tabs>
		</v-content>
	</div>
</template>

<script>
import seancestoday from "@/components/SeancesToday.vue";
import seancesweek from "@/components/SeancesWeek.vue";
import seancescine from "@/components/SeancesCine.vue";

import AppNavigation from "@/components/AppNavigation.vue";
import { store } from "@/store.js";

export default {
	components: {
		seancestoday,
		seancesweek,
		seancescine,
		AppNavigation
	},
	data() {
		return {
			 model: null,
		};
	},
	computed: {
		listDates() {
			// on cherche toutes les dates des séances
			let lDates = [];
			let films = store.state.films;
			for (var idFilm in films) {
				let seances = films[idFilm].seances;
				for (var idSeance in seances) {
					let day = seances[idSeance].day;
					lDates.push(day);
				}
			}
			let lDatesDedou = [...new Set(lDates)];
			lDatesDedou.sort();
			return lDatesDedou;
		}
	}
};
</script>