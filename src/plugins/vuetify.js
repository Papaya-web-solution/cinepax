import Vue from 'vue'
import Vuetify from 'vuetify/lib'
import 'vuetify/src/stylus/app.styl'

import lgfr from 'vuetify/es5/locale/fr'
import { colors } from 'vuetify/lib';

Vue.use(Vuetify, {
  iconfont: 'md',
  lang: {
    locales: { lgfr },
    current: 'lgfr'
  },
  theme: {
    primary: '#F5A623',
    secondary: '#ff0000'
  }
})
