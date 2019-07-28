<template>
	<div>
		<v-navigation-drawer app v-model="drawer" fixed>
			<v-list class="pt-0">
				<v-list-tile class=" py-2">
					<v-spacer></v-spacer>
					<img src="@/assets/logo.png" style="height:25px;" class="mr-2" />
					<span class="title">{{this.$root.appTxt.title}}</span>
					<v-spacer></v-spacer>
					<v-icon @click="drawer = !drawer">arrow_back</v-icon>
				</v-list-tile>							
				<template v-for="(route) in $router.options.routes">
					<div v-if="route.meta" :key="route.name">
						<div v-if="route.meta.menu=='main'">
							<div :route="route">
								<v-divider v-if="route.meta.divider"></v-divider>
								<v-list-tile :key="route.meta.title" :to="{name: route.name, params:{id:route.meta.id} }">
									<v-list-tile-action>
										<v-icon>{{route.meta.icon}}</v-icon>
									</v-list-tile-action>
									<v-list-tile-content>
										<v-list-tile-title>{{route.meta.title}}</v-list-tile-title>
									</v-list-tile-content>
								</v-list-tile>
							</div>
						</div>
					</div>
				</template>
				<v-divider></v-divider>
				<install-prompt></install-prompt>
			</v-list>
		</v-navigation-drawer>
		<v-toolbar app>
			<v-toolbar-side-icon @click="drawer = !drawer" v-if="$store.state.route.meta['navLeft']=='ham'"></v-toolbar-side-icon>
			<v-btn
				icon
				class="hidden-xs-only"
				@click="goBack"
				v-if="$store.state.route.meta['navLeft']=='prev'"
			>
				<v-icon>arrow_back</v-icon>
			</v-btn>
			<v-spacer v-if="$store.state.route.meta['navLeft']=='ham'"></v-spacer>
			<v-toolbar-title>{{$store.state.route.meta["title"]}}</v-toolbar-title>
			<v-spacer></v-spacer>
			<v-btn icon v-if="$store.state.route.meta['navRight']=='search'">
				<v-icon @click="searchfield = !searchfield">search</v-icon>
			</v-btn>
			<v-btn icon v-if="$store.state.route.meta['navRight']=='share'">
				<v-icon>share</v-icon>
			</v-btn>
		</v-toolbar>
		<transition name="slide1">
			<v-content v-show="searchfield">
				<v-container>
					<v-layout>
						<v-text-field
							prepend-icon="search"
							append-icon="mic"
							class
							flat
							:label="this.$root.appTxt.searchplaceholder"
							solo-inverted
						></v-text-field>
					</v-layout>
				</v-container>
			</v-content>
		</transition>
	</div>
</template>

<script>
import InstallPrompt from "@/components/InstallPrompt.vue";

export default {
	components: {
		InstallPrompt
	},
	data() {
		return {
			drawer: false,
			searchfield: false
		};
	},
	beforeMount() {
		this.$store.dispatch("setCurrentRoute", this.$route);
	},
	methods: {
		goBack() {
			this.$router.go(-1);
		}
	}
};
</script>

<style scoped>


</style>