<template>
	<div>
		<app-navigation></app-navigation>
		<v-content>
			<v-layout>
				<v-flex xs12 md8 offset-md2>
					<v-container grid-list-md fluid>
						<v-layout wrap>
							<v-flex xs12>
								<template v-for="(cinema, index) in cinemas">
									<v-card>
										<v-layout mb-4 pa-3>
											<v-flex mr-3 shrink style="width:30%">
												<img width="100%" :src="cinema.logo" />
											</v-flex>
											<v-flex style="width:70%">
												<v-flex fill-height style="border:0px solid red">
													<h2>{{cinema.title}}</h2>
													<v-flex ><i>{{cinema.adress}}</i></v-flex>
													<v-btn  v-if="cinema.telephone" :href="'tel:'+cinema.telephone" small>TELEPHONE</v-btn>
													<v-btn  v-if="cinema.facebook" :href="cinema.facebook" small>FACEBOOK</v-btn>
													<v-btn  v-if="cinema.website" :href="cinema.website" small>SITE WEB</v-btn>
													<v-btn  color="primary" small @click.prevent="$router.push({ name: 'cinema', params: { id: index }})" >En savoir plus</v-btn>
													
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
export default {
	components: {
		AppNavigation
	},
	computed: {
		cinemas() {
			return this.$store.state.cinemas;
		}
	}
};
</script>
<style scoped>
.theme--dark.v-sheet {
	backgrsound-color: inherit;
}
</style>
