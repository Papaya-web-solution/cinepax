export default {
  data() {
    return {
    };
  },
  created: function () {
    //  console.log('Printing from the Mixin')
  },
  methods: {
    displayMessage: function (p) {
      console.log('Now printing from a mixin function: ' + p)
    },

    mxPushRoute(routeName, id) {
      this.$router.push({
        name: routeName,
        params: { id: id }
      });
    },
    
    mxNextRoute(routeName, id) {
      return { name: routeName, params: { id: id } };
    }
    
  },
  filters: {
    formatDate(date) {
      return date.substr(6, 2) + "." + date.substr(4, 2) + "." + date.substr(0, 4);
    }
  }
}


// EXEMPLE D'UTILISATION
// new Vue({
//     router,
//     store,
//     mixins: [mixin],
//     created: function () {
//       console.log(this.$data.msg)
//       this.displayMessage("main.js")
//     },
//     render: h => h(App)
//   }).$mount('#app')


// import mixin from "@/mixin.js";
// export default {
//   mixins: [mixin],
//   mounted() {
//     this.displayMessage("ee")
//   },