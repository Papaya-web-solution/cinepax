import firebase from 'firebase/app'
import 'firebase/firestore';

import fsConfig from './configFirebase.js';
const config = fsConfig;

firebase.initializeApp(config)

// Initialize Cloud Firestore through Firebase
let firestore = firebase.firestore();

// Disable deprecated features
firestore.settings({
   //timestampsInSnapshots: true
});

export default {
    create(contact) {
        return firestore.collection('contacts').add(contact);
    },
    read(options) {
        return firestore.collection('contacts').get(options);
    },
    update(contact) {
        return firestore.collection('contacts').doc(contact.id).update({ ...contact });
    },
    replace(contact) {
        return firestore.collection('contacts').doc(contact.id).set({ contact });
    },
    delete(id) {
        return firestore.collection('contacts').doc(id).delete();
    },
}