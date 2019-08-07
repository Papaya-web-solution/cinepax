const rootURL = "https://www.turlututu.top/cinepax/";

const subFolder = process.env.NODE_ENV === 'production'
    ? '/cinepax/'
    : '/cinepax/'

export default { 
  rootURL,
  subFolder
 };
