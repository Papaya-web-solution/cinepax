<template>
  <v-container fluid>
    <v-layout align-center column>
      <v-flex v-if="showInstallBanner">
        <v-btn @click.prevent="install">Ajouter moi à votre écran</v-btn>
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script>
let installEvent;
export default {
  name: "installPrompt",
  data() {
    return {
      showInstallBanner: false
    };
  },
  created() {
    window.addEventListener("beforeinstallprompt", e => {
      e.preventDefault();
      installEvent = e;
      this.showInstallBanner = true;
    });
    window.addEventListener("appinstalled", function handler(e) {
      console.log("a2hs installed");
      alert("L'application a été ajoutée à votre écran d'accueil");
      this.removeEventListener("appinstalled", handler);
    });
  },
  methods: {
    install() {
      this.showInstallBanner = false;
      installEvent.prompt();
      installEvent.userChoice.then(choiceResult => {
        installEvent = null;
      });
    }
  }
};
</script>