<template>
	<v-container class="px-2 py-0 mb-3">
		<h4 class="mb-3">{{film.title}} - {{film.year}}</h4>
		<v-flex xs12 mr-1 ml-1>
			<v-layout>
				<v-flex xs3 mr-1>
					<v-img :src="film.poster">
						<v-layout class="pa-1 ma-0">
							<v-chip
								v-if="film.etat!=''"
								class="etat"
								:style="'background-color:'+infos.etat[film.etat].color"
							>{{infos.etat[film.etat].title}}</v-chip>
						</v-layout>
					</v-img>
				</v-flex>
				<v-flex xs9>
					<v-card-title row class="pt-1" :class="fontSizeText" v-if="film.plot!=''">
						<v-flex xs12 class="mb-2">{{film.plot}}</v-flex>
						<v-flex xs12 v-if="film.director!=''">
							<span class="label">De</span>
							{{film.director}}
						</v-flex>
						<v-flex xs12 v-if="film.actors!=''">
							<span class="label">Avec</span>
							{{film.actors}}
						</v-flex>
						<v-flex xs12 class="mt-2">
							<span v-if="film.runtime!=''">{{film.runtime}}</span>
							<!-- <span v-if="film.country!=''">&nbsp;- {{film.country}}</span> -->
							<span v-if="film.genre!=''">&nbsp;- {{film.genre}}</span>
							<v-chip
								v-if="film.rated!='' && film.rated!='G'"
								:style="'background-color:'+infos.rated[film.rated].color"
								class="small rated mr-0 ml-3"
								small
							>{{infos.rated[film.rated].title}}</v-chip>
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
			<v-divider class="mt-2" style="background:rgba(255,255,255,0.5);"></v-divider>
		</v-flex>
	</v-container>
</template>

-->
<script>
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
	methods: {
		goTrailer(idYT) {
			console.log(idYT);
			this.$emit("fromChild", idYT);
		}
	},
	computed: {
		infos() {
			return this.$store.state.infos;
		},
		fontSizeText() {
			switch (this.$vuetify.breakpoint.name) {
				case "xs":
					return "caption";
				default:
					return "";
			}
		}
	}
};
</script>
<style scoped>
smalltesx {
	font-size: 8px !important;
}
.label {
	color: gray;
	margin-right: 5px;
}
.etat {
	text-transform: uppercase;
	font-weight: bold;
	padding: 0 !important;
}
.rated {
	font-weight: bold;
}
</style>
