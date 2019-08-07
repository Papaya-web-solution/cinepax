<template>
	<v-layout>
		<v-container grid-list-sm fluid class="ma-0 pa-0 mt-1">
			<v-layout wrap>
				<v-flex v-for="IdSeance in Seances" :key="IdSeance" xs12 sm6 md4>
					<v-card
						v-if="cinemaChoice=='' || infoSeanceFilm(IdSeance,'id_cinema') == cinemaChoice"
						flat
						tile
						height="100%"
						class="pa-0"
					>
						<v-card-text class="pa-3">
							<div class="font-weight-black mb-1">
								<span class="text-uppercase">{{cinemaTitle(infoSeanceFilm(IdSeance,'id_cinema'))}}</span>
								<span
									class="font-weight-light"
								>- {{salleTitle(infoSeanceFilm(IdSeance,'id_cinema'),infoSeanceFilm(IdSeance,'id_salle'))}}</span>
							</div>
							<div>
								<template v-if="source=='Films'">
									<template v-for="zeday in infoSeanceFilm(IdSeance,'days')">
										<v-chip
											:key="zeday"
											class="day ml-0 mr-2 primary--text"
											color="font-weight-medium "
											small
										>{{zeday | dateF3 }}</v-chip>
									</template>
								</template>
							</div>
							<template v-for="hour in infoSeanceFilm(IdSeance,'hour')">
								<v-chip
									:key="hour"
									small
									class="hour ml-0"
									color="font-weight-medium primary black--text"
								>{{hour}}</v-chip>
							</template>
							<v-chip
								v-if="infoSeanceFilm(IdSeance,'lang')!=''"
								class="lang caption"
								:style="'background-color:' + infoValue('lang', infoSeanceFilm(IdSeance,'lang'), 'color') "
								small
							>{{infoValue('lang', infoSeanceFilm(IdSeance,'lang'), 'title')}}</v-chip>
							<template v-if="infoSeanceFilm(IdSeance,'techs') && infoExists('tech')">
								<template v-for="tech in infoSeanceFilm(IdSeance,'techs')">
									<v-chip
										:key="tech"
										v-if="tech!='' && tech && infoValue('tech', tech, 'title')"
										class="tech caption"
										:style="'background-color:'+ infoValue('tech', tech, 'color')"
										small
									>{{infoValue('tech', tech, 'title')}}</v-chip>
								</template>
							</template>
						</v-card-text>
					</v-card>
				</v-flex>
			</v-layout>
		</v-container>
	</v-layout>
</template>

-->
<script>
import { store } from "@/store.js";

export default {
	data() {
		return {
			rating: 0
		};
	},
	props: {
		Seances: {},
		idFilm: String,
		source: String,
		cinemaChoice: String
	},
	computed: {
		film() {
			return store.state.films[this.idFilm];
		}
	},
	methods: {
		infoSeanceFilm(IdSeance, elm) {
			return this.film.seances[IdSeance][elm];
		},
		infoExists(inf) {
			if (store.state.infos) {
				const info = store.state.infos[inf];
				if (info) {
					return info;
				}
			}
		},
		infoValue(inf, elm, prop) {
			if (store.state.infos) {
				const info = store.state.infos[inf];
				if (info) {
					const element = info[elm];
					if (element) {
						const property = element[prop];
						return property;
					}
				}
			}
		},
		cinemaTitle(id_cinema) {
			const cinema = store.state.cinemas[id_cinema];
			if (cinema) {
				return cinema.title;
			}
		},
		salleTitle(id_cinema, id_salle) {
			const cinema = store.state.cinemas[id_cinema];
			if (cinema) {
				const salle = cinema.salles[id_salle];
				if (salle) {
					return salle.title;
				}
			}
		}
	}
};
</script>
<style>
.hour .v-chip__content,
.lang .v-chip__content,
.tech .v-chip__content {
	padding: 0 8px !important;
}
</style>
<style scoped>
</style>
