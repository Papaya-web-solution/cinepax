import Vue from 'vue'
import './plugins/vuetify.js'
import App from './App.vue'
import router from './router.js'
import './registerServiceWorker.js'

import './assets/custom.css'
import './assets/transitions.css'


// Composants globaux
import Pub from "@/components/pub.vue";
Vue.component('pub', Pub);

// empêche certains messages dans la console
Vue.config.productionTip = false


new Vue({
  router, //   store,
  render: h => h(App)
}).$mount('#app')

