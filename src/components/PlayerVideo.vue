<template>
	<div>
		<v-dialog v-model="trailer" fullscreen hide-overlay transition="dialog-bottom-transition">
			<template v-slot:activator="{ on }"></template>
			<v-card style="width:100%">
				<v-toolbar>
					<v-btn icon @click="closeTrailer">
						<v-icon>close</v-icon>
					</v-btn>
				</v-toolbar>
				<!-- https://github.com/anteriovieira/vue-youtube -->
				<youtube v-if="videoId!=''" :video-id="videoId" :player-vars="playerVars" ref="youtube" resize></youtube>
			</v-card>
		</v-dialog>
	</div>
</template>

<script>
export default {
	data() {
		return {
			playerVars: {
			autoplay: 1
		}
		}
	},
	props: {
		videoId: String,
		trailer: Boolean
	},
	methods: {
		closeTrailer() {
			this.player.stopVideo();
			this.$emit("stopTrailer");
		},
	},
	computed: {
		player() {
			return this.$refs.youtube.player;
		},
	},
};
</script>
<style>
iframe {
	width: 100%;
}
</style>