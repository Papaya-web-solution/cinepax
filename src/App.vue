<template>
  <v-app dark> 
    <v-content>
      <transition name="slide">
        <router-view :pubs="pubs"></router-view>
      </transition>
    </v-content>
    <app-footer></app-footer>
  </v-app>
</template>

<script>

import AppFooter from "@/components/AppFooter.vue";

export default {
  name: "App",
  components: {
    AppFooter
  },
  data() {
    return {
      pubs: {
        home: {
          title: "Avis",
          img: require("./assets/pubs/avis.gif"),
          url: "https://www.glopglopg.com"
        },
        seances: {
          title: "Avis",
          img: require("./assets/pubs/eico.gif"),
          url: "https://www.glopglopg.com"
        }
      }
    };
  }
};
</script>
