import '@fortawesome/fontawesome-free/css/all.css' // Ensure you are using css-loader
import Vue from 'vue'
import Vuetify from 'vuetify/lib'
import 'vuetify/src/stylus/app.styl'


import lgfr from 'vuetify/es5/locale/fr'

Vue.use(Vuetify, {
  iconfont: ' md || fa', //md
  lang: {
    locales: { lgfr },
    current: 'lgfr'
  },
  theme: {
    primary: '#F5A623',
    secondary: '#a9a9a9',
    accent: '#82B1FF',
    error: '#FF5252',
    info: '#2196F3',
    success: '#4CAF50',
    warning: '#FFC107',
  }
})