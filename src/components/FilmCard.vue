<template>
	<div>
		<v-container class="pr-0 pl-2 py-0 mb-0">
			<v-flex xs12 mr-3 ml-1>
				<div class="mt-0" style="height:5px; background:rgba(255,255,255,0.5);"></div>
				<v-layout class="mt-4">
					<v-flex xs2 mr-2>
						<v-img contain :src="film.poster"></v-img>
					</v-flex>
					<v-flex xs10>
						<v-flex v-if="film.etat!='' && infoExists('etat')">
							<v-chip
								:style="'background-color:'+  infoValue('etat', film.etat, 'color')"
								class="small caption etat text-uppercase font-weight-black"
								small
							>{{infoValue('etat', film.etat, 'title')}}</v-chip>
						</v-flex>
						<v-card-title row class="pt-1">
							<h4 class="mb-0 pb-0 mr-2 title">{{film.title}}</h4><span class="caption" v-if="film.year!=''">({{film.year}})</span>
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
									v-if="film.rated!='' && infoExists('rated')"
									:style="'background-color:'+ infoValue('rated', film.rated, 'color')"
									class="small rated font-weight-black mx-0"
									small
								>{{infoValue('rated', film.rated, 'title')}}</v-chip>
							</v-flex>
							<v-flex v-if="film.plot!=''" xs12 class="mt-2">{{film.plot}}</v-flex>
							<v-flex xs12 v-if="film.youtube!=''">
								<v-btn @click="goTrailer(film.youtube)" class="mt-3 ml-0" :class="fontSizeText">
									<v-icon>arrow_right</v-icon>Bande-Annonce
								</v-btn>
							</v-flex>
						</v-card-title>
						<template v-if="film.rating>=0">
						<v-card-actions class="px-3 py-0" :class="fontSizeText">
							Noter ce film
							<span class="caption mr-2">({{ film.rating }})</span>
							<v-rating v-model="film.rating" background-color="white" dense hover size="20"></v-rating>
						</v-card-actions>
						</template>
					</v-flex>
				</v-layout>
				<template v-if="source!='prochainement'">
				<film-card-seances
					:idFilm="idFilm"
					:Seances="Seances"
					:source="source"
					:cinemaChoice="cinemaChoice"
				></film-card-seances>
				</template>
			</v-flex>
		</v-container>
		
	</div>
</template>

-->
<script>
import { store } from "@/store.js";
import FilmCardSeances from "@/components/FilmCardSeances.vue";


export default {
	components: {
		FilmCardSeances
	},
	data() {
		return {
			rating: 0,
		};
	},
	props: {
		source: String,
		Seances: {},
		idFilm: String,
		cinemaChoice: String
	},
	computed: {
		film() {
			return store.state.films[this.idFilm];
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
			this.$emit("goTrailer",idYT);
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
		infoExists(inf) {
			if (store.state.infos) {
				const info = store.state.infos[inf];
				if (info) {
					return info;
				}
			}
		}
	}
};
</script>
<style>
.etat .v-chip__content {
	padding: 0 8px !important;
}
</style>
<style scoped>
.label {
	color: gray;
	margin-right: 5px;
}
</style>
