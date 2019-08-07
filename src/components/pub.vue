<template>
	<div>
		<div v-if="picturePub" style="text-align:center">
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

import {store} from "@/store.js";

export default {
	props: {
		pagePub: String,
		classPub: String
		
	},
	computed: {
		picturePub () {
			return store.state.pubs[this.pagePub]
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