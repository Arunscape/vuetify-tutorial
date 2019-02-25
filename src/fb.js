import firebase from 'firebase/app';
import 'firebase/firestore';

const config = {
	apiKey: 'AIzaSyB73xQ1zqRSSuoS2JFNpNA6BebMkWNCdUw',
	authDomain: 'vuetify-tutorial-bb5a4.firebaseapp.com',
	databaseURL: 'https://vuetify-tutorial-bb5a4.firebaseio.com',
	projectId: 'vuetify-tutorial-bb5a4',
	storageBucket: 'vuetify-tutorial-bb5a4.appspot.com',
	messagingSenderId: '124147683536'
};
firebase.initializeApp(config);

const db = firebase.firestore();

db.settings({ timestampsInSnapshots: true });

export default db;
