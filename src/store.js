import Vue from "vue";
import Vuex from "vuex";

//import restService from "@/services/rest.js";
//import AppTxt from "@/assets/lang/fr.js";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    route:{}
  },
  mutations: {
    SET_CURRENT_ROUTE(state, route) {
      state.route = route;
    }
  },
  actions: {
    setCurrentRoute({ commit }, route) {
        commit("SET_CURRENT_ROUTE", route); 
    }
  }
});