import Vue from 'vue'
import './plugins/vuetify.js'
import App from './App.vue'
import router from './router.js'
import store from "./store.js";
import './registerServiceWorker.js'

import './assets/custom.css'
import './assets/transitions.css'

import './common/filters.js'

// textes
import appLang from "@/assets/lang/fr.js";

// Composants globaux
import Pub from "@/components/pub.vue";
Vue.component('pub', Pub);



// empêche certains messages dans la console
Vue.config.productionTip = false

new Vue({
  data() {
    return {
      appTxt: {}
    }
  },
  beforeMount() {
    this.appTxt = appLang.text
  },
  methods: {
    gPushRoute(routeName, id) {
      this.$router.push({
        name: routeName,
        params: { id: id }
      });
    }
  },
  router,
  store,
  render: h => h(App)
}).$mount('#app')

