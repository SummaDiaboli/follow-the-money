import firebase from '@firebase/app'
import '@firebase/storage'

export function loadFB() {
    try {
        var firebaseConfig = {
            apiKey: "AIzaSyC4FVKxYjjGhKGFq1BJR0nyXwyaAMIg5VA",
            authDomain: "followthemoney-8f00a.firebaseapp.com",
            databaseURL: "https://followthemoney-8f00a.firebaseio.com",
            projectId: "followthemoney-8f00a",
            storageBucket: "followthemoney-8f00a.appspot.com",
            messagingSenderId: "111109417871",
            appId: "1:111109417871:web:a9ba334073f880522739fa",
            measurementId: "G-H4KS9S6J1H"
        }
        // Initialize Firebase
        firebase.initializeApp(firebaseConfig)
    } catch (err) {
        if (!/already exists/.test(err.message)) {
            console.error('Firebase initialization error', err.stack);
        }
    }

    return firebase
}