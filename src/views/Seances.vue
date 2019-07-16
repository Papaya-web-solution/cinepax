<template>
  <div>
    <div class="my-2" style="text-align:center">
      <h3 class="primary--text text-uppercase">Séances du {{config.periode[0] | formatDate}} au {{config.periode[1] | formatDate}} </h3>
    </div>
    <pub :pubs="pubs" pagePub="seances" classPub="max100"></pub>
    <v-tabs grow icons-and-text>
      <v-tabs-slider color="primary"></v-tabs-slider>
      <v-tab href="#tab-1">
        Aujourd'hui
        <v-icon>today</v-icon>
      </v-tab>
      <v-tab href="#tab-2">
        Semaine
        <v-icon>calendar_today</v-icon>
      </v-tab>
      <v-tab href="#tab-3">
        Cinéma
        <v-icon>place</v-icon>
      </v-tab>
      <v-tab-item :key="1" :value="'tab-1'">
        <seancestoday></seancestoday>
      </v-tab-item>
      <v-tab-item :key="2" :value="'tab-2'">
        <seancesweek></seancesweek>
      </v-tab-item>
      <v-tab-item :key="3" :value="'tab-3'">
        <seancescine></seancescine>
      </v-tab-item>
    </v-tabs>
  </div>
</template>
<script>

import seancestoday from "@/components/SeancesToday.vue";
import seancesweek from "@/components/SeancesWeek.vue";
import seancescine from "@/components/SeancesCine.vue";

import mixin from "@/mixin.js";

export default {
  components: {
    seancestoday,
    seancesweek,
    seancescine
  },
  mixins: [mixin],
  data() {
    return {};
  },
  props: {
    config: {},
    pubs: {}
  }
};
</script>