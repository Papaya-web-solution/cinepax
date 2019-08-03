<template>
	<v-container class="px-2 py-0 mb-3">
		<h4 class="mb-3">{{film.title}} - {{film.year}}</h4>
		<v-flex xs12 mr-1 ml-1>
			<v-layout>
				<v-flex xs3 mr-1>
					<v-img :src="film.poster">
						<v-layout class="pa-1 ma-0">
							<v-chip
								v-if="film.etat!='' && myInfo('etat')"
								class="etat"
								:style="'background-color:'+CInfo.etat[film.etat].color"
							>{{CInfo.etat[film.etat].title}}</v-chip>
						</v-layout>
					</v-img>
					<div style="text-align:center">
						<v-chip
							v-if="film.rated!='' && myInfo('rated')"
							:style="'background-color:'+ CInfo.rated[film.rated].color"
							class="small rated mr-0 ml-0 hidden-sm-and-up"
							small
						>{{CInfo.rated[film.rated].title}}</v-chip>
					</div>
				</v-flex>
				<v-flex xs9>
					<v-card-title row class="pt-1" :class="fontSizeText">
						<v-flex v-if="film.plot!=''" xs12 class="mb-2">{{film.plot}}</v-flex>
						<v-flex v-if="film.director!=''" xs12>
							<span class="label">De</span>
							{{film.director}}
						</v-flex>
						<v-flex v-if="film.actors!=''" xs12>
							<span class="label">Avec</span>
							{{film.actors}}
						</v-flex>
						<v-flex xs12 class="mt-2">
							<span v-if="film.runtime!=''">{{film.runtime}}</span>
							<!-- <span v-if="film.country!=''">&nbsp;- {{film.country}}</span> -->
							<span v-if="film.genre!=''">&nbsp;- {{film.genre}}</span>
							<v-chip
								v-if="film.rated!='' && myInfo('rated')"
								:style="'background-color:'+ CInfo.rated[film.rated].color"
								class="small rated mr-0 ml-3 hidden-xs-only"
								small
							>{{CInfo.rated[film.rated].title}}</v-chip>
						</v-flex>
						<v-flex xs12 v-if="film.youtube!=''">
							<v-btn @click="goTrailer(film.youtube)" class="mt-3 ml-0" :class="fontSizeText">
								<v-icon>arrow_right</v-icon>Bande-Annonce
							</v-btn>
						</v-flex>
					</v-card-title>
					<v-card-actions class="px-3" :class="fontSizeText">
						Noter ce film
						<span class="caption mr-2">({{ film.rating }})</span>
						<v-rating v-model="film.rating" background-color="white" dense hover size="20"></v-rating>
					</v-card-actions>
				</v-flex>
			</v-layout>

			<v-expansion-panels class="pt-4">
				<v-expansion-panel>
					<v-expansion-panel-header>
						<h3>Séances</h3>
					</v-expansion-panel-header>
					<v-expansion-panel-content>
						<v-layout>
							<v-container column fluid grid-list-sm class="ma-0 pa-0">
								<v-layout wrap>
									<v-flex v-for="(seance,index) in film.seances" :key="index" xs6 sm4 md3 lg2>
										<v-card class="mx-auto" height="100%">
											<v-card-text>
												<div
													class="font-weight-black"
												>{{cineName(seance.id_cinema)}} - {{salleName(seance.id_cinema,seance.id_salle)}}</div>
												<div class="primary--text">{{seance.day | dateF2}} - {{seance.hour}}</div>
												<v-chip
													v-if="seance.lang!='' && CInfo.lang"
													class="lang"
													:style="'background-color:'+CInfo.lang[seance.lang].color"
													small
												>{{CInfo.lang[seance.lang].title}}</v-chip>
												<span v-if="seance.techs && myInfo('tech')">
													<template v-for="tech in seance.techs">
														<v-chip
															v-if="tech!='' && tech && titleTech(tech)"
															class="tech"
															:style="'background-color:'+ colorTech(tech)"
															small
														>{{titleTech(tech)}}</v-chip>
													</template>
												</span>
											</v-card-text>
										</v-card>
									</v-flex>
								</v-layout>
							</v-container>
						</v-layout>
					</v-expansion-panel-content>
				</v-expansion-panel>
			</v-expansion-panels>

			<v-divider class="mt-2" style="background:rgba(255,255,255,0.5);"></v-divider>
		</v-flex>
	</v-container>
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
		film: {},
		idFilm: String
	},
	computed: {
		CInfo() {
			return store.state.infos;
		},
		fontSizeText() {
			switch (this.$vuetify.breakpoint.name) {
				case "xs":
					return "caption";
				default:
					return "";
			}
		}
	},
	methods: {
		goTrailer(idYT) {
			if (idYT) {
				this.$emit("fromChild", idYT);
			} else {
				console.log("idYT invalide");
			}
		},
		cineName(id_cinema) {
			const cinema = store.state.cinemas[id_cinema];
			if (cinema) {
				return cinema.title;
			}
		},
		salleName(id_cinema, id_salle) {
			const cinema = store.state.cinemas[id_cinema];
			if (cinema) {
				const salle = cinema.salles[id_salle];
				if (salle) {
					return salle.title;
				}
			}
		},
		myInfo(inf) {
			if (store.state.infos) {
				const info = store.state.infos[inf];
				if (info) {
					return info;
				}
			}
		},
		colorTech(tech) {
			if (store.state.infos) {
				const infoTech = store.state.infos.tech[tech];
				if (infoTech) {
					const color = infoTech.color;
					if (color) {
						return color;
					}
				}
			}
		},
		titleTech(tech) {
			if (store.state.infos) {
				const infoTech = store.state.infos.tech[tech];
				if (infoTech) {
					const title = infoTech.title;
					if (title) {
						return title;
					}
				}
			}
		}
	}
};
</script>
<style scoped>
.label {
	color: gray;
	margin-right: 5px;
}
.etat {
	text-transform: uppercase;
	font-weight: bold;
	font-size: 11px;
	padding: 0 !important;
	margin: 0;
}
.etat .v-chip__content {
	padding: 0 6px !important;
}
.rated {
	font-weight: bold;
}

.lang,
.tech {
	font-size: 11px;
}
</style>
