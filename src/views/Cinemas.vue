<template>
	<div>
		<app-navigation></app-navigation>
		<v-content>
			<v-layout wrap>
				<v-flex xs12  sm8 offset-sm2>
					<div class="mb-3">
						<pub pagePub="cinemas" classPub="max100"></pub>
					</div>
					<v-card v-for="(cinema,index) in cinemas" :key="cinema.title" class="mb-3">
						<v-layout>
							<v-flex xs4 pa-0 >
								<img width="100%" :src="cinema.logo | addBaseURL " />
							</v-flex>
							<v-flex xs8 px-3>
								<h2 class="text-uppercase">{{cinema.title}}</h2>
								<v-flex>
									<v-card-actions class="pl-0 pt-2 ma-0">
										<v-btn
											v-if="cinema.telephone"
											:href="cinema.telephone |linkTel"
											small
											light
											class="mr-1"
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
											class="mx-1"
											fab
											title="Site web"
										>
											<v-icon dark>fas fa-link</v-icon>
										</v-btn>
										<v-tooltip top>
											<template v-slot:activator="{ on }">
												<v-btn
													v-on="on"
													color="primary"
													small
													@click.prevent="$router.push({ name: 'cinema', params: { id: index }})"
													light
													fab
												>
													<v-icon dark>fas fa-plus</v-icon>
												</v-btn>
											</template>
											<span>En savoir plus</span>
										</v-tooltip>
									</v-card-actions>
									<v-card-actions xs12 v-if="cinema.rating>=0">
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
				</v-flex>
			</v-layout>
		</v-content>
	</div>
</template>

<script>
import AppNavigation from "@/components/AppNavigation.vue";
import Pub from "@/components/pub.vue";
import { store } from "@/store.js";

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
