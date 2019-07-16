<template>
  <v-app dark>
    <app-navigation :config="config"></app-navigation>
    <v-content>
      <transition :name="transitionView">
        <router-view :config="config" :pubs="pubs"></router-view>
      </transition>
    </v-content>
    <app-footer></app-footer>
  </v-app>
</template>

<script>
import AppNavigation from "./components/AppNavigation.vue";
import AppFooter from "./components/AppFooter.vue";
import mixin from "@/mixin.js";

export default {
  name: "App",
  components: {
    AppNavigation,
    AppFooter
  },
  mixins: [mixin],
  data() {
    return {
      config: {
        title: "Cinepax".toUpperCase(),
        version: "v5.0",
        logo: require("./assets/logo.png"),
        periode: ["20190601", "20190610"],
        searchplaceholder: "titre de film, nom du réalisateur, etc.."
      },
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
      },
      transitionView: "fade"
    };
  }
};
</script>
