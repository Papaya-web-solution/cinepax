import '@fortawesome/fontawesome-free/css/all.css' // Ensure you are using css-loader
import Vue from 'vue'
import Vuetify from 'vuetify/lib'


import 'vuetify/src/stylus/app.styl'


//import lgfr from 'vuetify/es5/locale/fr'
// lang: { 
//   locales: { lgfr },
//   current: 'lgfr'
// },
Vue.use(Vuetify, {
  iconfont: ' md || fa', 
  
  theme: {
    primary: '#F5A623',
    secondary: '#424242',
    accent: '#82B1FF',
    error: '#FF5252',
    info: '#2196F3',
    success: '#4CAF50',
    warning: '#FFC107',
  }
})