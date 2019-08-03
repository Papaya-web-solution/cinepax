import Vue from 'vue'

// Filtre d'affichage d'une date au format AAAMMJJ en JJ.MM.AAAA
Vue.filter('dateF', function (date) {
	return date.substr(6, 2) + "." + date.substr(4, 2) + "." + date.substr(0, 4);
}),
	Vue.filter('dateF2', function (date) {
		var j = new Array( "Lun", "Mar", "Mer", "Jeu", "Ven", "Sam", "Dim" );
		var ladate=new Date(date.substr(0, 4) , date.substr(4, 2)-1 , date.substr(6, 2))
		return j[ladate.getDay() - 1] + " " + date.substr(6, 2) + "." + date.substr(4, 2) ;
	}),
	Vue.filter('linkTel', function (tel) {
		const teltrim = tel.replace(new RegExp("[^(0-9)]", "g"), '')

		if (tel.startsWith('+')) {
			return "tel:" + teltrim
		} else {
			return "tel:+689" + teltrim
		}

	}),
	Vue.filter('addBaseURL', function (image) {
		return process.env.BASE_URL + image;
	})

