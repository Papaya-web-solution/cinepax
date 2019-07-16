<template>
  <div class="about">
    <h1>About</h1>
    --{{test}}--
    <HelloWorld :config="config" :test="test" @fromChild="methodFromChild($event)" />
    <h2>metaInfo T : {{ metaInfo('title')}}</h2>
    <h2>metaInfo R : {{ metaInfo('menu')}}</h2>
    
    <v-container grid-list-md text-xs-center>
      <v-layout row wrap>
        <v-flex xs12>
          <v-card color="primary">
            <v-card-text class="px-0">12</v-card-text>
          </v-card>
        </v-flex>
        <v-flex v-for="i in 2" :key="`6${i}`" xs6>
          <v-card color="secondary">
            <v-card-text class="px-0">6</v-card-text>
          </v-card>
        </v-flex>
        <v-flex v-for="i in 3" :key="`4${i}`" xs4>
          <v-card color="primary">
            <v-card-text class="px-0">4</v-card-text>
          </v-card>
        </v-flex>
        <v-flex v-for="i in 4" :key="`3${i}`" xs3>
          <v-card color="secondary">
            <v-card-text class="px-0">3</v-card-text>
          </v-card>
        </v-flex>
        <v-flex v-for="i in 6" :key="`2${i}`" xs2>
          <v-card color="primary">
            <v-card-text class="px-0">2</v-card-text>
          </v-card>
        </v-flex>
        <v-flex v-for="i in 12" :key="`1${i}`" xs1>
          <v-card color="secondary">
            <v-card-text class="px-0">1</v-card-text>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  data() {
    return {
      test: "1111",
      routes: this.$router.options.routes
    };
  },
  props: {
    config: {}
  },
  components: {
    HelloWorld
  },
  methods: {
    methodFromChild(test) {
      //console.log("fromChild: "+test);
      this.test = test;
    },
    metaInfo(x) {
      //console.log(this.$route)
      return this.$route.meta.config[x];
    }
  }
};
</script>
