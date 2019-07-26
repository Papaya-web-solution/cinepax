<template>
  <div>
    <app-navigation></app-navigation>
    <h1>CINEMA : {{ id }}</h1>
    
  </div>
</template>
<script>
import AppNavigation from "@/components/AppNavigation.vue";
export default {
  components: {
		AppNavigation
	},
  props: ["id"],
  
};
</script>