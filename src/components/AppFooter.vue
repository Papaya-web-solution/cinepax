<template>
  <div>
    <v-footer class="px-3" color="grey--text text--darken-2 text-xs-center">
      <v-layout justify-center>
        &copy;{{copyrightYear}} -
        <span class="mx-2">
          réalisé par
          <a href="https://www.glopglop.com" target="_blank">Glopglop</a>
        </span>
        -
        <span class="mx-2">
          <span v-if="standaloneMode">Standalone</span>
          <span v-else>Web</span>
        </span>
        -
        <span class="mx-2">
          <router-link :to="mxNextRoute('annonceur')">Devenez annonceur</router-link>
        </span>
      </v-layout>
    </v-footer>
  </div>
</template>

<script>
import mixin from "@/mixin.js";

export default {
  mixins: [mixin],
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