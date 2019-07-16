<template>
  <v-container fluid fill-height class="d-flex">
    <div class="mxiddle-centered">
      <v-layout align-center column>
        <v-flex>
          <v-card style="padding:50px;" elevation="10">
            <v-img :src="config.logo"></v-img>
            <v-card-title primary-title>
              <div style="text-align:center">
                <h1>{{config.title}}</h1>
                <h5>{{config.version}}</h5>
              </div>
            </v-card-title>
          </v-card>
        </v-flex>
        <v-flex class="mt-4">
          <v-btn @click.prevent="mxPushRoute('seances','')">Continuer</v-btn>
        </v-flex>
        <v-flex class="mt-4">
          <install-prompt></install-prompt>
        </v-flex>
      </v-layout>
      <pub :pubs="pubs" pagePub="home" classPub="max100"></pub>
    </div>
  </v-container>
</template>

<script>
import InstallPrompt from "@/components/InstallPrompt.vue";
import mixin from "@/mixin.js";

export default {
  components: {
    InstallPrompt
  },
  mixins: [mixin],
  data() {
    return {};
  },
  props: {
    config: {},
    pubs: {}
  },
  methods: {
  }
};
</script>
<style scoped>
</style>