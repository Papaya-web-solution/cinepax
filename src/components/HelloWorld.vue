<template>
  <div class="hello">
    <hr style="background-color:white">
    <p>Composant HELLO WORLD</p>
    <p>
      <input type="text" v-model="test">
      <button @click="testToParent()">Test vers Parent</button>
    </p>
    <p>
      <button @click="goToFilm()">Go to film/4</button> ou
      <router-link :to="{name:'seances'}">Séances</router-link>
    </p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      test: "2222"
    };
  },
  props: {
    msg: String,
    config: {}
  },
  methods: {
    testToParent() {
      //console.log("testToParent: " + this.test);
      this.$emit("fromChild", this.msg);
    },
    goToFilm() {
      this.$router.push({
        name: "film",
        params: { id: "4" }
      });
    }
  },
  watch: {
    test() {
      //console.log("watch test: " + this.test);
      this.$emit("fromChild", this.test);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
