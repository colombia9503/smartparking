// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase : {
    apiKey: "AIzaSyDtXIU8a7NJr3z4sUGVHLlCA3HamWvAxL8",
    authDomain: "parqueadero-udem.firebaseapp.com",
    databaseURL: "https://parqueadero-udem.firebaseio.com",
    projectId: "parqueadero-udem",
    storageBucket: "parqueadero-udem.appspot.com",
    messagingSenderId: "352999916474"
  }
};
