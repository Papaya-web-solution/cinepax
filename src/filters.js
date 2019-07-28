import Vue from 'vue'

// Filtre d'affichage d'une date au format AAAMMJJ en JJ.MM.AAAA
Vue.filter('dateF', function (date) {
	return date.substr(6, 2) + "." + date.substr(4, 2) + "." + date.substr(0, 4);
  })
  