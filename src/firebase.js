const config = {
    apiKey: "AIzaSyBJSQy4sKjodHFMu_wm7DUTDfslVDVBDbU",
    authDomain: "bootcamp-due-project.firebaseapp.com",
    databaseURL: "https://bootcamp-due-project.firebaseio.com",
    projectId: "bootcamp-due-project"
  };
  
firebase.initializeApp(config);

export const auth = firebase.auth();

const db = firebase.database();
export const usersRef = db.ref('users');
export const favoritesByUserRef = db.ref('favorites-by-user');
