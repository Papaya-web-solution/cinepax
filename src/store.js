import Vue from "vue";
import Vuex from "vuex";

import restService from "@/services/rest.js";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    route: {},
    loadingDynamic: false,
    update: {},
    films: {},
    seances: {},
    pubs: {},
    prochainement: {},
    evenements: {},
    splashAnnonce: {},
    loadingAnnonce: false,
    toto: '',
  },
  mutations: {
    SET_CURRENT_ROUTE(state, route) {
      state.route = route;
    },
    GET_DYNAMIC(state, dynamicData) {
      this.state.loadingDynamic = false;
      this.state.update = dynamicData.update;
      this.state.films = dynamicData.films;
      this.state.seances = dynamicData.seances;
      this.state.pubs = dynamicData.pubs;
      this.state.prochainement = dynamicData.prochainement;
      this.state.evenements = dynamicData.evenements;
      this.state.splashAnnonce = dynamicData.splashAnnonce;
      if (this.state.splashAnnonce.html == "") {
        this.state.loadingAnnonce = false;
      } else {
        if (process.env.NODE_ENV != "development") {
          this.state.loadingAnnonce = true;
          if (this.state.splashAnnonce.delay > 0) {
            const delai = this.state.splashAnnonce.delay * 1000
            let $this = this
            setTimeout(function () { $this.state.loadingAnnonce = false; }, delai)
          } else {
            this.state.splashAnnonce.close = true // Si pas de délai: icone pour fermer obligatoire
          }
        }
      }
    }
  },
  actions: {
    setCurrentRoute({ commit }, route) {
      commit("SET_CURRENT_ROUTE", route);
    },
    getDatasDynamic({ commit }, payload) {
      restService.getDatasDynamic().then(res => {
        // console.log("Store: getDatasDynamic");
        commit("GET_DYNAMIC", res);
      })
        .catch(err => console.log("Store: getDatasDynamic", err.message))
    },
  }
});