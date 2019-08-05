<template>
	<v-container class="pr-0 pl-2 py-0 mb-3">
		<v-flex xs12 mr-3 ml-1>
			<div class="my-4" style="height:5px; background:rgba(255,255,255,0.5);"></div>
			<v-layout>
				<v-flex xs2 mr-2>
					<v-img contain :src="film.poster"></v-img>
				</v-flex>
				<v-flex xs10>
					<v-flex v-if="film.etat!='' && myInfo('etat')">
						<v-chip
							:style="'background-color:'+ CInfo.etat[film.etat].color"
							class="small caption etat text-uppercase font-weight-black"
							small
						>{{CInfo.etat[film.etat].title}}</v-chip>
					</v-flex>
					<v-card-title row class="pt-1">
						<h4 class="mb-0 pb-0">{{film.title}} s- {{film.year}}</h4>
					</v-card-title>
					<v-card-title row class="mb-0 pt-0" :class="fontSizeText">
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
							<span v-if="film.genre!=''" class="mr-3">&nbsp;- {{film.genre}}</span>
							<v-chip
								v-if="film.rated!='' && myInfo('rated')"
								:style="'background-color:'+ CInfo.rated[film.rated].color"
								class="small rated font-weight-black mx-0"
								small
							>{{CInfo.rated[film.rated].title}}</v-chip>
						</v-flex>
						<v-flex v-if="film.plot!=''" xs12 class="mt-2">{{film.plot}}</v-flex>
						<v-flex xs12 v-if="film.youtube!=''">
							<v-btn @click="goTrailer(film.youtube)" class="mt-3 ml-0" :class="fontSizeText">
								<v-icon>arrow_right</v-icon>Bande-Annonce
							</v-btn>
						</v-flex>
					</v-card-title>
					<v-card-actions class="px-3 py-0" :class="fontSizeText">
						Noter ce film
						<span class="caption mr-2">({{ film.rating }})</span>
						<v-rating v-model="film.rating" background-color="white" dense hover size="20"></v-rating>
					</v-card-actions>
				</v-flex>
			</v-layout>
			<v-layout>
				<v-container grid-list-sm fluid class="ma-0 pa-0 mt-3">
					<v-layout wrap>
						<v-flex v-for="IdSeance in Seances" :key="IdSeance" xs6 sm4 md3 lg3>
							<!-- {{dateChoice}} : {{IdSeance}} X {{film.seances[IdSeance]}} -->
							<!-- <div v-for="(seance,index) in film.seances" :key="index"> -->
							<v-card flat tile>
								<v-card-text>
									<div
										class="font-weight-black text-uppercase"
									>{{cineName(infoSeanceFilm(IdSeance,'id_cinema'))}} {{$vuetify.breakpoint.name}}</div>
									<div
										class="font-weight-light caption"
									>{{salleName(infoSeanceFilm(IdSeance,'id_cinema'),infoSeanceFilm(IdSeance,'id_salle'))}}</div>
									<div class="primary--text">
										<v-chip
											small
											class="hour ml-0"
											color="font-weight-medium  body-1 primary  black--text"
										>{{infoSeanceFilm(IdSeance,"hour")}}</v-chip>
										<v-chip
											v-if="infoSeanceFilm(IdSeance,'lang')!='' && CInfo.lang[infoSeanceFilm(IdSeance,'lang')]!=undefined"
											class="lang caption"
											:style="'background-color:' + CInfo.lang[infoSeanceFilm(IdSeance,'lang')].color"
											small
										>{{CInfo.lang[infoSeanceFilm(IdSeance,'lang')].title}}</v-chip>
										<span v-if="infoSeanceFilm(IdSeance,'techs') && myInfo('tech')">
											<template v-for="tech in infoSeanceFilm(IdSeance,'techs')">
												<v-chip
													:key="tech"
													v-if="tech!='' && tech && titleTech(tech)"
													class="tech caption"
													:style="'background-color:'+ colorTech(tech)"
													small
												>{{titleTech(tech)}}</v-chip>
											</template>
										</span>
									</div>
								</v-card-text>
							</v-card>
						</v-flex>
					</v-layout>
				</v-container>
			</v-layout>
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
		Seances: {},
		idFilm: String,
		dateChoice: ""
	},
	computed: {
		film() {
			return store.state.films[this.idFilm];
		},
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
				this.$emit("goTrailer", idYT);
			} else {
				console.log("idYT invalide");
			}
		},
		infoSeanceFilm(IdSeance, elm) {
			return this.film.seances[IdSeance][elm];
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
<style>
.hour .v-chip__content {
	padding: 0 8px !important;
}
.etat .v-chip__content {
	padding: 0 8px !important;
}
.lang .v-chip__content,
.tech .v-chip__content {
	padding: 0 8px !important;
}
</style>
<style scoped>
.label {
	color: gray;
	margin-right: 5px;
}
</style>
