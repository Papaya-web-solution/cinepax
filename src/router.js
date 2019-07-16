import Vue from 'vue'
import Router from 'vue-router'

// vue par défaut
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: __dirname,
  routes: [
    {
      path: '/home',
      name: 'home',
      component: Home,
      props: true,
      meta: { title: "Accueil", icon: 'home', id: '', menu: 'main', divider: true } 
    },
    {
      path: '/seances',
      name: 'seances',
      component: () => import('./views/Seances.vue'),
      props: true,
      meta: { title: "A l'affiche", icon: 'alarm', id: '', menu: 'main', divider: true }
    },
    {
      path: '/film/:id',
      name: 'film',
      component: () => import('./views/Film.vue'),
      props: true,
      meta: { title: "Film", icon: 'local_movies', id: '0', menu: 'main', divider: true }
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('./views/_About.vue'),
      props: true,
      meta: { title: "About", icon: 'help', id: '', menu: 'main', divider: true }
    },
    {
      path: '/annonceur',
      name: 'annonceur',
      component: () => import('./views/Annonceur.vue'),
      props: true,
      meta: { title: "Devenez Annonceur", icon: 'home', id: '', menu: 'footer', divider: false }
    },
    {
      path: '/testdb',
      name: 'testdb',
      component: () => import('./views/_testdb.vue'),
      props: true,
      meta: { title: "testdb", icon: 'help', id: '', menu: 'main', divider: true }
    },
    {
      path: '*',
      redirect: '/home'
    }
  ]
})
