<template>
	<div>
		xxxxxxxxxx {{toto}}qsqd{{picturePub}}qsdqsd
		<div v-if="imgExists" style="text-align:center">
			<div v-if="picturePub['url']!=''">
				<a :href="picturePub['url']" target="_blank" :title="picturePub['title']">
					<img :src="picturePub['image'] | addBaseURL" :class="classPub" :alt="picturePub['title']" />
				</a>
			</div>
			<div v-else>
				<img :src="picturePub['image'] | addBaseURL" :class="classPub" :alt="picturePub['title']" />
			</div>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			picturePub: {},
			picturePubxxxxx: {}
		};
	},
	props: {
		pagePub: String,
		classPub: String
	},
	computed: {
		toto() {
			return this.$store.state.pubs
		}
	},
	mounted() {
		console.log("eee",this.pagePub);
		this.picturePub = this.$store.state.pubs[this.pagePub];
		console.log("aaaa", this.picturePub )
	},
	methods: {
		 imgExists() {
		// 	if (this.$store.state.pubs[this.pagePub]["image"] == "undefined") {
		// 		return false;
		// 	} else {
		 		return true;
		// 	}
		 }
	}
};
</script>
<style scoped>
.max100 {
	max-width: 100%;
}
.full {
	width: 100%;
	max-width: 300%;
}
</style>