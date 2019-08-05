<template>
	<div>
		<app-navigation></app-navigation>
		<v-content class>
			<v-layout wrap>
				<v-flex xs12 class="mt-3">
					<pub pagePub="films" classPub="max100"></pub>
					<template v-for="(film,idFilm) in films">
						<film-card
							:key="idFilm"
							source="Films"
							:idFilm="idFilm"
							:Seances="allSeances(idFilm)"
							dateChoice="0"
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
		FilmCard,
		Pub
	},
	computed: {
		films() {
			return store.state.films;
		}
	},
	methods: {
		allSeances(idFilm) {
			var result = [];			
			for (var cle in this.films[idFilm].seances) {
				result.push(cle);
			}
			return result;
		}
	}
};
</script>
<style scoped>
</style>