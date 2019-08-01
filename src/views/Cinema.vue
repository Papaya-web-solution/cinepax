<template>
	<div>
		<app-navigation :chgTitle="cinema.title"></app-navigation>
		<v-content grid-list-md>
			<v-layout mt-4>
				<v-flex xs10 offset-xs1 md8 offset-md2>
					<v-card>
						<v-container grid-list-xl pa-3>
							<v-layout wrap>
								<v-flex xs12 md6>
									<div v-html="cinema.description"></div>
									<v-divider class="my-3"></v-divider>
									<div v-html="cinema.prices"></div>
								</v-flex>
								<v-flex xs12 md6>
									<img width="100%" :src="cinema.logo | addBaseURL" />
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
											<v-divider></v-divider>
											<v-card-actions class="pa-1">
												Noter ce cinéma
												<v-spacer></v-spacer>
												<span class="caption mr-2">({{ rating }})</span>
												<v-rating
													v-model="rating"
													background-color="black"
													dense
													hover
													size="20"
												></v-rating>
											</v-card-actions>
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
									<v-toolbar-text class="pr-4">
										<h4>{{salle.title}}</h4>
									</v-toolbar-text>
									<v-divider vertical></v-divider>
									<v-toolbar-text class="pl-4">{{salle.infos}}</v-toolbar-text>
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
</template>
<script>
import AppNavigation from "@/components/AppNavigation.vue";

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
			return this.$store.state.cinemas[this.id];
		}
	},
	mounted() {
		console.log("fsdsdsd")
		this.rating = this.cinema.rating;
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