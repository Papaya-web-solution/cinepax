<template>
	<div>
		<div v-if="cinema">
			<app-navigation :chgTitle="cinema.title"></app-navigation>
			<v-content grid-list-md>
				<v-layout mt-4>
					<v-flex xs12 md8 offset-md2>
						<v-card>
							<v-container grid-list-xl pa-3>
								<v-layout wrap class="mep">
									<v-flex xs12 md6>
										<img :src="cinema.logo | addBaseURL" />
									</v-flex>
									<v-flex xs12 md6>
										<div v-html="cinema.description"></div>
									</v-flex>
									<v-flex xs12>
										<div v-html="cinema.prices"></div>
									</v-flex>
									<v-flex xs12>
										<div v-html="cinema.annonce"></div>
									</v-flex>
									<v-flex xs12>
										<v-card color="primary" elevation="10">
											<v-container grid-list-xl py-2 px-4 mt-3 class="black--text">
												<v-layout wrap>
													<v-flex xs12 text-xs-center ma-0>
														<p>{{cinema.adress}}</p>
														<v-btn v-if="cinema.telephone" :href="cinema.telephone |linkTel" small fab>
															<v-icon dark>fas fa-phone-alt</v-icon>
														</v-btn>
														<v-btn v-if="cinema.facebook" :href="cinema.facebook" small fab>
															<v-icon dark>fab fa-facebook-f</v-icon>
														</v-btn>
														<v-btn v-if="cinema.website" :href="cinema.website" small fab title="Site web">
															<v-icon dark>fas fa-link</v-icon>
														</v-btn>
													</v-flex>
												</v-layout>
												<template v-if="cinema.rating>=0">
													<v-divider></v-divider>
													<v-card-actions class="pa-1">
														Noter ce cinéma
														<v-spacer></v-spacer>
														<span class="caption mr-2">({{ cinema.rating }})</span>
														<v-rating
															v-model="cinema.rating"
															color="white"
															background-color="black"
															dense
															hover
															size="20"
														></v-rating>
													</v-card-actions>
												</template>
											</v-container>
										</v-card>
									</v-flex>
								</v-layout>
								<v-layout wrap>
									<v-flex xs12 md6>
										<v-carousel cycle height="300" hide-delimiters show-arrows-on-hover>
											<template v-for="image in cinema.images">
												<v-carousel-item :key="image">
													<v-sheet height="100%">
														<v-layout align-center fill-height justify-center>
															<img width="100%" :src="image" />
														</v-layout>
													</v-sheet>
												</v-carousel-item>
											</template>
										</v-carousel>
									</v-flex>
									<v-flex xs12 md6>
										<iframe width="100%" height="300" :src="cinema.googlemap"></iframe>
									</v-flex>
								</v-layout>
							</v-container>
							<v-divider class="mx-4"></v-divider>
							<v-card-text>
								<h3 class="title mb-3">Les salles</h3>
								<template v-for="salle in cinema.salles">
									<v-toolbar class="mt-2" :key="salle.title">
										<div class="pr-4">
											<h4>{{salle.title}}</h4>
										</div>
										<v-divider vertical></v-divider>
										<div class="pl-4">{{salle.infos}}</div>
									</v-toolbar>
								</template>
							</v-card-text>
						</v-card>
					</v-flex>
				</v-layout>
				<v-snackbar timeout="3000" color="success" v-model="thanksRating">
					"Merci pour votre vote !"
					<v-btn text @click="thanksRating = false">Close</v-btn>
				</v-snackbar>
			</v-content>
		</div>
	</div>
</template>
<script>
import AppNavigation from "@/components/AppNavigation.vue";
import { store } from "@/store.js";

export default {
	props: ["id"],
	components: {
		AppNavigation
	},
	data() {
		return {
			rating: 0,
			thanksRating: 0
		};
	},
	computed: {
		cinema() {
			return store.state.cinemas[this.id];
		}
	},
	watch: {
		rating(newValue, oldValue) {
			if (this.thanksRating === false) {
				this.thanksRating = true;
			} else {
				this.thanksRating = false;
			}
			console.log(newValue, oldValue);
		}
	}
};
</script>
<style scoped>
.theme--dark.v-sheet {
	background-color: inherit;
}
</style>
<style >
.table_tarif {
	border-collapse: collapse;
}
.table_tarif td,
.table_tarif th {
	padding: 5px 10px;
	border: 1px solid gray;
}
.mep img {
	max-width: 100%;
}
</style>