import '@fortawesome/fontawesome-free/css/all.css' // Ensure you are using css-loader
import Vue from 'vue'
import Vuetify from 'vuetify'
import 'vuetify/src/stylus/app.styl'

 
import lgfr from 'vuetify/es5/locale/fr'
import { colors } from 'vuetify/lib';

Vue.use(Vuetify, {
  iconfont: ' md || fa', //md
  lang: {
    locales: { lgfr },
    current: 'lgfr'
  },
  theme: {
    primary: '#F5A623',
    secondary: '#212121'
  }
})
