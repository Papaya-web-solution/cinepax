<template>
	<div>
		<app-navigation></app-navigation>
		<v-content>
			<v-container fluid fill-height class="d-flex" >
				<div>
					<v-layout align-center justify-center column  >
						<v-flex>
							<v-card style="padding:30px;" color="black" elevation="0">
								<img src="@/assets/logo.png" width="192" />
							</v-card>
						</v-flex>
						<v-flex class="mt-4">
							<v-btn large @click.prevent="$router.push({ name: 'seances'})">Continuer</v-btn>
						</v-flex>
						<v-flex class="mt-4">
							<install-prompt></install-prompt>
						</v-flex>
					</v-layout>
					<pub pagePub="home" classPub="max100"></pub>
				</div>
			</v-container>
		</v-content>
	</div>
</template>

<script>
import InstallPrompt from "@/components/InstallPrompt.vue";
import AppNavigation from "@/components/AppNavigation.vue";
import AppTxt from "@/assets/lang/fr.js";

export default {
	components: {
		InstallPrompt,
		AppNavigation
	}
};
</script>
<style scoped>
</style>