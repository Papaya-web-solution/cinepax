import Vue from "vue";
import Vuex from "vuex";

import restService from "@/services/rest.js";
import { cpus } from "os";

Vue.use(Vuex);

function prepareSeances(films) {

  const today = new Date();
  const todayString = today.getFullYear() + "" + ((today.getMonth() + 1).toString().padStart(2, "0")) + "" + today.getDate().toString().padStart(2, "0");
  var lDates = {};

  for (var idFilm in films) {
    let seances = films[idFilm].seances;
    for (var idSeance in seances) {
      for (var keyday in seances[idSeance].days) {
        const day = seances[idSeance].days[keyday]
       
        if (day != todayString) { // la date de la séance est supérieur à la date du jour
          //  console.log(lDates)
          let seancesOfTheDay = lDates[day]
          if (seancesOfTheDay == undefined) {
            let data = {}
            data[idFilm] = { "seance": [idSeance] }
            lDates[day] = data;
          } else {
            let data = lDates[day]
            let dataFilm = data[idFilm]
            if (dataFilm == undefined) {
              dataFilm = {}
            }
            //  console.log(day, idFilm, idSeance);
            //   console.log(dataFilm);
            //   console.log("eee");
            if (dataFilm.seance == undefined) {
              dataFilm.seance = []
            }
            dataFilm.seance.push(idSeance)
            //   console.log(dataFilm);
            data[idFilm] = dataFilm
            lDates[day] = data
          }
        }
      }
    }
  }

  // Tri sur la clé (date)
  const lDatesSorted = {};
  Object.keys(lDates).sort().forEach(function (key) {
    lDatesSorted[key] = lDates[key];
  });
  //console.log(lDatesSorted);
  return lDatesSorted;
}

export const store = new Vuex.Store({
  state: {
    route: {},
    loadingDynamic: false,
    goAfterLoading: "",
    update: {},
    films: {},
    seances: {},
    pubs: {},
    prochainement: {},
    evenements: {},
    splashAnnonce: {},
    loadingAnnonce: false,
    cinemas: {},
    infos: {},
  },

  mutations: {
    SET_CURRENT_ROUTE(state, route) {
      this.state.route = route;
    },
    GET_DYNAMIC(state, data) {
      this.state.update = data.update;
      this.state.films = data.films;
      this.state.pubs = data.pubs;
      this.state.prochainement = data.prochainement;
      this.state.evenements = data.evenements;
      this.state.splashAnnonce = data.splashAnnonce;
      this.state.seances = prepareSeances(data.films);

      this.state.loadingAnnonce = false;

      if (this.state.splashAnnonce.html == "" && this.state.splashAnnonce.image == "") {
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
      this.state.infos = data;
    },
    LOADING_END(state, data) {
      this.state.loadingDynamic = false;
      this.state.goAfterLoading = "seances";
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
            ///////////////////////////////////////////////////////////
            // INDIQUE LA FIN DU CHARGEMENT
            commit("LOADING_END");
            //////////////////////////////////////////////////////////:
          })
            .catch(err => console.log("Err Store: getDatasInfos INfos", err.message))
        }

      })
        .catch(err => console.log("Err Store: getDatasDynamic Dyna", err.message))
    },
  }
});