// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
  	apiKey: "AIzaSyAt9fm0e9qL9g9HNRpAnnVV4e6ASaMoM9g",
    authDomain: "decentralized-providence.firebaseapp.com",
    databaseURL: "https://decentralized-providence.firebaseio.com",
    projectId: "decentralized-providence",
    storageBucket: "decentralized-providence.appspot.com",
    messagingSenderId: "682063721623",
    appId: "1:682063721623:web:962c7d746ca28a057025d2"
  },
};
