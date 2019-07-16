<template>
  <div>
    <v-navigation-drawer app v-model="drawer" fixed>
      <v-list class="pt-0">
        <v-list-tile class="headerNav middle-centered">
          <v-list-tile-action>
            <img :src="config.logo" style="height:25px;" />
          </v-list-tile-action>
          <v-list-tile-title class="title">{{config.title}}</v-list-tile-title>
        </v-list-tile>
        <template v-for="(route,index) in $router.options.routes">
          <div v-if="route.meta">
              <div v-if="route.meta.menu=='main'">
                <div :route="route">
                  <v-divider v-if="route.meta.divider" :key="index"></v-divider>
                  <v-list-tile
                    :key="route.meta.title"
                    :to="{name: route.name, params:{id:route.meta.id} }"
                  >
                    <v-list-tile-action>
                      <v-icon>{{route.meta.icon}}</v-icon>
                    </v-list-tile-action>
                    <v-list-tile-content>
                      <v-list-tile-title>{{route.meta.title}}</v-list-tile-title>
                    </v-list-tile-content>
                  </v-list-tile>
                </div>
            </div>
          </div>
        </template>
        <v-divider></v-divider>
        <install-prompt></install-prompt>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar app>
      <v-toolbar-side-icon @click="drawer = !drawer"></v-toolbar-side-icon>
      <v-spacer></v-spacer>
      <v-toolbar-title>{{config.title}}</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon>
        <v-icon @click="searchfield = !searchfield">search</v-icon>
      </v-btn>
    </v-toolbar>
    <transition name="slide1">
      <v-content v-show="searchfield">
        <v-container>
          <v-layout>
            <v-text-field
              prepend-icon="search"
              append-icon="mic"
              class
              flat
              :label="config.searchplaceholder"
              solo-inverted
            ></v-text-field>
          </v-layout>
        </v-container>
      </v-content>
    </transition>
  </div>
</template>

<script>
import InstallPrompt from "@/components/InstallPrompt.vue";

export default {
  components: {
    InstallPrompt
  },
  data() {
    return {
      drawer: false,
      searchfield: false
    };
  },
  props: {
    config: {}
  }
};
</script>

<style scoped>
.yourclass {
  color: black !important;
}

.headerNav {
  background-color: black;
  height: 70px;
}
</style>