<template>
	<div>
		<v-navigation-drawer app v-model="drawer" fixed clipped>
			<v-list class="pt-0">
				<v-list-tile class="py-2">
					<v-spacer></v-spacer>
					<img src="@/assets/logo.png" style="height:25px;" class="mr-2" />
					<span class="title">{{this.$root.appTxt.title}}</span>
					<v-spacer></v-spacer>
					<v-icon @click="drawer = !drawer">arrow_back</v-icon>
				</v-list-tile>
				<template v-for="(route) in $router.options.routes">
					<div v-if="route.meta" :key="route.name">
						<div v-if="intoMenu(route.meta.menu,'main')==true">
							<div :route="route">
								<v-divider v-if="route.meta.divider"></v-divider>
								<v-list-tile :key="route.meta.title" :to="{name: route.name }">
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
		<v-toolbar app fixed clipped-left>
			<v-toolbar-side-icon v-if="$store.state.route.meta['navLeft']=='ham'" @click="drawer = !drawer"></v-toolbar-side-icon>
			<v-btn v-if="$store.state.route.meta['navLeft']=='prev'" icon @click="goBack">
				<v-icon>arrow_back</v-icon>
			</v-btn>
			<v-spacer v-if="$store.state.route.meta['navLeft']=='ham'"></v-spacer>
			<v-toolbar-title>{{the_title}}</v-toolbar-title>
			<span v-if="nodeenv == 'development'" class="ml-2">({{this.$vuetify.breakpoint.name}})</span>
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
import {store} from "@/store.js";

export default {
	components: {
		InstallPrompt
	},
	data() {
		return {
			drawer: false,
			searchfield: false,
			nodeenv: process.env.NODE_ENV
		};
	},
	props: {
		chgTitle: { type: String, default: "" }
	},
	computed: {
		the_title() {
			if (this.chgTitle != "") {
				return this.chgTitle;
			} else {
				return store.state.route.meta["title"];
			}
		}
	},
	beforeMount() {
		store.dispatch("setCurrentRoute", this.$route);
	},
	methods: {
		goBack() {
			this.$router.go(-1);
		},
		intoMenu(metamenu, menu) {
			if (metamenu.indexOf(menu) > -1) {
				return true;
			} else {
				return false;
			}
		}
	}
};
</script>

<style scoped>
</style>