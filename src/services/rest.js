import axios from "axios";

import AppConfig from "@/config";

let baseURL = "";
if (process.env.NODE_ENV == "development") {
    baseURL = "https://cors-anywhere.herokuapp.com/" + AppConfig.rootURL;
    // A placer dans le htaccess pour éviter les restrictions Control Allow Origin
    // Header always set Access-Control-Allow-Origin "http://localhost:8080"
    // Header always set Access-Control-Max-Age "1000"
    // Header always set Access-Control-Allow-Headers "X-Requested-With, Content-Type, Origin, Authorization, Accept, Client-Security-Token, Accept-Encoding"
    // Header always set Access-Control-Allow-Methods "POST, GET, OPTIONS, DELETE, PUT"
    // RewriteEngine On
    // RewriteCond % { REQUEST_METHOD } OPTIONS
    // RewriteRule ^ (.*)$ phpFileName.php[QSA, L]
    //
    // si pas possible utiliser ceci:
    // baseURL = "https://cors-anywhere.herokuapp.com/" +  AppConfig.rootURL;

} else {
    baseURL = AppConfig.rootURL;
}

const folderJson = baseURL + "json/";
const folderScripts = baseURL + "api/";

// const axiosConfig = {
//     headers: {
//         'Content-Type': 'application/json',
//         'Access-Control-Allow-Origin': '*',
//     }
// };

export default {
    getDatasDynamic() {
        let dbFile = folderJson + 'dynamic.json';
       // console.log(dbFile)
        return axios
            .get(dbFile)
            .then(function (response) {
                //console.log(response.data)
                return response.data;
            })
            .catch(function (error) {
                console.log("error productService getDatasDynamic: ", error)
                return false;
            });
    },
    getDatasCinemas() {
        let dbFile = folderJson + 'cinemas.json';
       // console.log(dbFile)
        return axios
            .get(dbFile)
            .then(function (response) {
                //console.log(response.data)
                return response.data;
            })
            .catch(function (error) {
                console.log("error productService getDatasCinemas: ", error)
                return false;
            });
    },
    getDatasInfos() {
        let dbFile = folderJson + 'infos.json';
      //  console.log(dbFile)
        return axios
            .get(dbFile)
            .then(function (response) {
                return response.data;
            })
            .catch(function (error) {
                console.log("error productService getDatasInfos: ", error)
                return false;
            });
    },
    sendMail(form) {
        let dbFile = folderScripts + 'sendmail.php';
        let data = { form }
        return axios
            .get(dbFile, data)
            .then(function (response) {
                return true;
            })
            .catch(function (error) {
                return error;
            });
    },

}
