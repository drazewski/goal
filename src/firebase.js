import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyByxajn32TGeO0ToCvt99xLM1OcXFICnTA",
    authDomain: "goal-626c9.firebaseapp.com",
    databaseURL: "https://goal-626c9.firebaseio.com",
    projectId: "goal-626c9",
    storageBucket: "goal-626c9.appspot.com",
    messagingSenderId: "40725615593"
};

export const firebaseApp = firebase.initializeApp(config);
export const goalRef = firebase.database().ref('goals');
export const completeGoalRef = firebase.database().ref('completeGoals');
