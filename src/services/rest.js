import axios from "axios";

import AppConfig from "@/config";

let baseURL = "";
if (process.env.NODE_ENV == "development") {
    baseURL = AppConfig.rootURL;
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
//console.log(baseURL);
const folderJson = baseURL + "json/";
const folderScripts = baseURL + "api/";

// const axiosConfig = {
//     headers: {
//         'Content-Type': 'application/json',
//         'Access-Control-Allow-Origin': '*',
//     }
// };

export default {

    sendMail(form) {
        let dbFile = folderScripts + 'sendmail.php';
        let datas = { form }
        return axios
            .get(dbFile, datas)
            .then(function (response) {
               return true;
            })
            .catch(function (error) {
                return error;
            });
    }
}
