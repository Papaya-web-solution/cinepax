import Vue from "vue";
import Vuex from "vuex";

import restService from "@/services/rest.js";

Vue.use(Vuex);

export const store = new Vuex.Store({
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
    cinemas: {},
    infos: {}
  },
  getters: {
    donePubs: state => {
      return state.pubs
    }
  },
  mutations: {
    SET_CURRENT_ROUTE(state, route) {
      this.state.route = route;
    },
    GET_DYNAMIC(state, data) {
      this.state.loadingDynamic = false;
      this.state.update = data.update;
      this.state.films = data.films;
      this.state.seances = data.seances;
      this.state.pubs = data.pubs;
      this.state.prochainement = data.prochainement;
      this.state.evenements = data.evenements;
      this.state.splashAnnonce = data.splashAnnonce;
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
    },
    GET_CINEMAS(state, data) {
      this.state.cinemas = data.cinemas;
    },
    GET_INFOS(state, data) {
      // console.log("infos:", data);
      this.state.infos = data;
    }
  },
  actions: {
    setCurrentRoute({ commit }, route) {
      commit("SET_CURRENT_ROUTE", route);
    },
    getDatasDynamic({ commit }) {
      restService.getDatasDynamic().then(data => {
        //   console.log("Store: getDatasDynamic");
        commit("GET_DYNAMIC", data);
        // 
        // après les données dynamics, on charge celle des cinémas...si c'est demandé
        if (data.update.cinemas) {
          // 
          restService.getDatasCinemas().then(datacine => {
            //    console.log("Store: getDatasCinemas");
            commit("GET_CINEMAS", datacine);
          })
            .catch(err => console.log("Err Store: getDatasDynamic Cinema", err.message))
        }
        // 
        // après les données dynamics, on charge celle des infos...si c'est demandé
        if (data.update.infos) {
          // 
          restService.getDatasInfos().then(datacine => {
            console.log("Store: getDatasInfos");
            commit("GET_INFOS", datacine);
          })
            .catch(err => console.log("Err Store: getDatasInfos INfos", err.message))
        }

      })
        .catch(err => console.log("Err Store: getDatasDynamic Dyna", err.message))

    },
  }
});