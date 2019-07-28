import Vue from 'vue'
import './plugins/vuetify.js'
import App from './App.vue'
import router from './router.js'
import store from "./store.js";
import './registerServiceWorker.js'

import './assets/custom.css'
//import './assets/transitions.css'

import './filters.js'

// textes
import appLang from "@/assets/lang/fr.js";

import Pub from "@/components/pub.vue";
Vue.component('pub', Pub);

import VuePageTransition from 'vue-page-transition';
Vue.use(VuePageTransition);

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
  router,
  store,
  render: h => h(App)
}).$mount('#app')

