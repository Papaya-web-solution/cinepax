const rootURL = "https://app.tahitihoster.com/cinepax/";

const subFolder = process.env.NODE_ENV === 'production'
    ? '/cinepax/'
    : '/cinepax/'

export default { 
  rootURL,
  subFolder
 };
