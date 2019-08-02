<template>
	<div>
		<app-navigation></app-navigation>
		<v-content>
			<v-layout>
				<v-flex xs12 md8 offset-md2>
					<v-container grid-list-md fluid>
						<v-layout wrap>
							<v-flex xs12>
								<div class="mb-3">
									<pub pagePub="cinemas" classPub="full"></pub>
								</div>
								<template v-for="(cinema,index) in cinemas">
									<v-card :key="cinema.title">
										<v-layout mb-4>
											<v-flex pa-0 mr-3 style="width:30%">
												<img width="100%" :src="cinema.logo | addBaseURL " />
											</v-flex>
											<v-flex style="width:70%">
												<v-flex>
													<v-btn
														right
														absolute
														color="primary"
														small
														@click.prevent="$router.push({ name: 'cinema', params: { id: index }})"
													>En savoir plus</v-btn>
													<h2 class="text-uppercase">{{cinema.title}}</h2>
													<div class="font-weight-light grey--text text--lighten-1 my-2">
														<i>{{cinema.adress}}</i>
													</div>
													<v-card-actions class="pl-0 pt-2 ma-0">
														<v-btn
															v-if="cinema.telephone"
															:href="cinema.telephone |linkTel"
															small
															light
															class="mx-2"
															fab
														>
															<v-icon dark>fas fa-phone-alt</v-icon>
														</v-btn>
														<v-btn v-if="cinema.facebook" :href="cinema.facebook" small light class="mx-2" fab>
															<v-icon dark>fab fa-facebook-f</v-icon>
														</v-btn>
														<v-btn
															v-if="cinema.website"
															:href="cinema.website"
															small
															light
															class="mx-2"
															fab
															title="Site web"
														>
															<v-icon dark>fas fa-link</v-icon>
														</v-btn>
														<v-spacer></v-spacer>
														<span class="grey--text text--lighten-2 caption mr-2">({{ cinema.rating }})</span>
														<v-rating
															v-model="cinema.rating"
															background-color="white"
															color="yellow accent-4"
															dense
															half-increments
															hover
															size="18"
														></v-rating>
													</v-card-actions>
												</v-flex>
											</v-flex>
										</v-layout>
									</v-card>
								</template>
							</v-flex>
						</v-layout>
					</v-container>
				</v-flex>
			</v-layout>
		</v-content>
	</div>
</template>

<script>
import AppNavigation from "@/components/AppNavigation.vue";
import Pub from "@/components/pub.vue";
import {store} from "@/store.js";

export default {
	components: {
		AppNavigation,
		Pub
	},
	computed: {
		cinemas() {
			return store.state.cinemas;
		}
	}
};
</script>
<style scoped>
</style>
