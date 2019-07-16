<template>
  <div >
    <div class="" style="text-align:center">
        <img :src="mypub.img" :class="classPub" />
    </div>
  </div>
</template>
<!--
<template>
  <v-container fluid>
    <v-layout align-center column mt-3>
      <v-flex>
        <img :src="mypub.img" class="imagePub" />
      </v-flex>
    </v-layout>
  </v-container>
</template>
-->
<script>
export default {
  data() {
    return {
    };
  },
  props: {
    pubs: {},
    pagePub:String,
    classPub:String
  },
  computed: {
    mypub: function () {
      return this.pubs[this.pagePub]
    }
  }
}
</script>
<style scoped>
.max100 {
  max-width: 100%;
}
.full {
  width: 100%;
}
</style>