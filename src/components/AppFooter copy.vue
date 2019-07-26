<template>
	<div>
		<v-bottom-sheet v-model="sheet">
			<template v-slot:activator="{ on }">
				<v-btn color="purple" dark v-on="on">Open Usage</v-btn>
			</template>
			<v-footer class="px-3" color="grey--text text--darken-2 text-xs-center">
				<v-layout justify-center>
					<span class="mx-2" @click="showInfo">&copy;{{copyrightYear}}</span>
					-
					<span class="mx-2">
						réalisé par
						<a href="https://www.glopglop.com" target="_blank">Glopglop</a>
					</span>
					-
					<span class="mx-2">
						<router-link :to="mxNextRoute('annonceur')">Devenez annonceur</router-link>
					</span>
					-
					<span class="mx-2">
						<span v-if="standaloneMode">Standalone</span>
						<span v-else>Web</span>
						<span>| {{nodeenv}}</span>
					</span>
				</v-layout>
			</v-footer>
			<v-sheet class="text-center" height="200px">
				<v-btn class="mt-6" flat color="red" @click="sheet = !sheet">close</v-btn>
				<div>The basic usage of v-bottom-sheet. Almost any content can be placed inside this component</div>
			</v-sheet>
		</v-bottom-sheet>
	</div>
</template>

<script>
import mixin from "@/plugins/mixin.js";

export default {
	mixins: [mixin],
	data() {
		return {
			nodeenv: process.env.NODE_ENV,
			sheet: true
		};
	},
	methods: {
		showInfo() {
			console.log("ee");
		}
	},
	computed: {
		copyrightYear: function() {
			return new Date().getFullYear();
		},
		standaloneMode: function() {
			if (window.matchMedia("(display-mode: standalone)").matches) {
				return true;
			} else {
				return window.navigator.standalone;
			}
		}
	}
};
</script>

<style  scoped>
footer a {
	color: #bdbdbd;
	text-decoration: none;
}
</style>