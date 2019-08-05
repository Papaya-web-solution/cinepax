import Vue from 'vue'
import Router from 'vue-router'
import '../vue.config.js'
import AppConfig from "@/config";

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: AppConfig.subFolder,
  routes: [
    {
      path: '/home',
      name: 'home',
      component: () => import('./views/Home.vue'),
      props: true,
      meta: { title: "Accueil", icon: 'home', menu: 'main', divider: true, navLeft: 'ham', navRight: '', footer: 'normal' }
    },
    {
      path: '/seances',
      name: 'seances',
      component: () => import('./views/Seances.vue'),
      props: true,
      meta: { title: "A l'affiche", icon: 'alarm', menu: '["main","footer"]', divider: true, navLeft: 'ham', navRight: 'search', footer: 'normal' }
    },
    {
      path: '/films',
      name: 'films',
      component: () => import('./views/Films.vue'),
      props: true,
      meta: { title: "Les Films", icon: 'local_movies', menu: '["main","footer"]', divider: true, navLeft: 'prev', navRight: '', footer: 'normal' }
    },
    {
      path: '/cinemas',
      name: 'cinemas',
      component: () => import('./views/Cinemas.vue'),
      props: true,
      meta: { title: "Les Cinemas", icon: 'videocam', menu: 'main', divider: true, navLeft: 'prev', navRight: '', footer: 'normal' }
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('./views/About.vue'),
      props: true,
      meta: { title: "A propos", icon: 'info', menu: 'main', divider: true, navLeft: 'prev', navRight: '', footer: 'normal' }
    },
    {
      path: '/annonceur',
      name: 'annonceur',
      component: () => import('./views/Annonceur.vue'),
      props: true,
      meta: { title: "Devenez annonceur", icon: 'monetization_on', menu: 'main', divider: true, navLeft: 'prev', navRight: '', footer: '' }
    },
    {
      path: '/prochainement',
      name: 'prochainement',
      component: () => import('./views/Prochainement.vue'),
      props: true,
      meta: { title: "Prochainement", icon: 'calendar_today', menu: '["main","footer"]', divider: true, navLeft: 'prev', navRight: '', footer: 'normal' }
    },
    {
      path: '/evenements',
      name: 'evenements',
      component: () => import('./views/Evenements.vue'),
      props: true,
      meta: { title: "Evenements", icon: 'star', menu: '["main","footer"]', divider: true, navLeft: 'prev', navRight: 'share', footer: 'normal' }
    },
    {
      path: '/cinema/:id',
      name: 'cinema',
      component: () => import('./views/Cinema.vue'),
      props: true,
      meta: { title: "Cinema", icon: '', menu: '', divider: false, navLeft: 'prev', navRight: 'share', footer: 'normal' }
    },
    {
      path: '/test',
      name: 'test',
      component: () => import('./views/Test.vue'),
      props: true,
      meta: { title: "Test", icon: '', menu: 'main', divider: true, navLeft: 'prev', footer: 'autre' }
    },
    {
      path: '/testvuetify',
      name: 'testvuetify',
      component: () => import('./views/testvuetify.vue'),
      props: true,
      meta: { title: "testvuetify", icon: '', menu: 'main', divider: true, navLeft: 'prev', footer: 'autre' }
    },
    {
      path: '*',
      redirect: '/home'
    }
  ]
})
