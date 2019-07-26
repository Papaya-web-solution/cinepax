<template>
	<div>
		<app-navigation></app-navigation>
		<v-container fill-height text-xs-center>
			<v-layout align-center>
				<v-flex>
					<div class="my-3" @click="showInfo = true">&copy; {{copyrightYear}}</div>
					<div class="my-3" @click="showInfo = true">
						Conçu et réalisé par
						<a
							href="https://www.papaya-web-solution.com"
							target="_blank"
						>Papaya Web Solution</a>
					</div>
					<v-container text-xs-center>
						<h2>Contactez-nous</h2>
						<v-container>
							<v-layout>
								<v-flex>
									par
									<v-btn text>
										<a href="mailto:bolardmarc@gmail.com" style="text-decoration:none">Email</a>
									</v-btn>ou
									<v-btn text>
										<a href="tel:+68987791037" style="text-decoration:none">Téléphone</a>
									</v-btn>
								</v-flex>
							</v-layout>
						</v-container>
						<v-container v-show="!sended">
							ou via ce formulaire:
							<v-form ref="form" v-model="valid" lazy-validation>
								<v-layout wrap>
									<div v-if="errors.length">
										<b>Please correct the following error(s):</b>
										<ul>
											<li v-for="(error,index) in errors" :key="index">{{ error }}</li>
										</ul>
									</div>
									<v-flex xs12>
										<v-text-field
											class="px-2"
											v-model="form.nom"
											:rules="nomRules"
											label="Nom prénom"
											outlined
											required
										></v-text-field>
									</v-flex>
									<v-flex xs12>
										<v-text-field v-model="form.email" :rules="emailRules" label="E-mail" required outlined></v-text-field>
									</v-flex>
									<v-flex xs12>
										<v-textarea
											v-model="form.message"
											:rules="messageRules"
											label="Votre message"
											filled
											required
										></v-textarea>
									</v-flex>
									<v-flex xs12>
										<v-btn
											@click="validate"
											:loading="loading"
											:disabled="loading"
											large
											class="mt-5"
											color="primary"
										>
											Validate
											<v-icon right dark>send</v-icon>
										</v-btn>
									</v-flex>
								</v-layout>
							</v-form>
						</v-container>
						<v-container v-show="sended" v-html="msgReturn"></v-container>
					</v-container>
				</v-flex>
			</v-layout>
			<v-snackbar v-model="showInfo">
				<div>
					<span v-if="standaloneMode">Standalone</span>
					<span v-else>Web</span>
					<span>| {{nodeenv}}</span>
				</div>
				<v-btn color="orange" text @click="showInfo = false">Close</v-btn>
			</v-snackbar>
		</v-container>
	</div>
</template>

<script>
import AppNavigation from "@/components/AppNavigation.vue";
import restService from "@/services/rest.js";

export default {
	components: {
		AppNavigation,
		restService
	},
	data() {
		return {
			valid: true,
			form: {
				nom: "Bolard Marc",
				email: "contact@tahitihoster.com",
				message: "Test"
			},
			nomRules: [v => !!v || "Nom prénom obligatoire"],
			emailRules: [
				v => !!v || "E-mail obligatoire",
				v => /.+@.+\..+/.test(v) || "E-mail invalide"
			],
			messageRules: [v => !!v || "Message obligatoire"],
			errors: [],
			loading: false,
			sended: false,
			msgReturn: "",
			showInfo: false,
			nodeenv: process.env.NODE_ENV
		};
	},
	computed: {
		copyrightYear: function() {
			return new Date().getFullYear();
		},
		standaloneMode: function() {
			if (window.matchMedia("(display-mode: standalone)").matches) {
				return true;
			} else {
				return window.navigator.standalone;
			}
		}
	},
	methods: {
		validate() {
			if (this.$refs.form.validate()) {
				//console.log(JSON.stringify(this.form));
				(this.loading = true),
					restService.sendMail(this.form)
						.then(result => {
							console.log("validate: sendMail");
							if (result === true) {
								this.msgReturn =
									this.$root.appTxt.msgReturnOK;
								this.sended = true;
							} else {
								this.msgReturn = this.$root.appTxt.msgReturnKO;;
								console.log(result);
								this.sended = true;
							}
						})
						.catch(err => console.log(err.message));
			}
		}
	}
};
</script>
<style lang="scss" scoped>
</style>

