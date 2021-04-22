import firebase from "firebase/app"
import "firebase/auth"
// note here when there is problem in the api key when we imported this into the context the whole app didnt render remmember this for future debuging with other projects
const app = firebase.initializeApp({
    apiKey: process.env.REACT_APP_FIREBASE_APIKEY ,
    authDomain: process.env.REACT_APP_FIREBASE_AUTHDOMAIN ,
    projectId: process.env.REACT_APP_FIREBASE_PROJECTID ,
    storageBucket: process.env.REACT_APP_FIREBASE_STRONGBUCKET ,
    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGINGSENDERID ,
    appId: process.env.REACT_APP_FIREBASE_APPID
})



export const auth = app.auth()
export default app