import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore/lite';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
	apiKey: 'AIzaSyCzBhgxiLTQ5VLzd4vT-w3YOKKsrJtZFmk',
	authDomain: 'tanque-63cb5.firebaseapp.com',
	projectId: 'tanque-63cb5',
	storageBucket: 'tanque-63cb5.appspot.com',
	messagingSenderId: '1091717443164',
	appId: '1:1091717443164:web:692761694602ce48904099'
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);