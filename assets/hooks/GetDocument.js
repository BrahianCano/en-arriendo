// Import Firebase //
import firebase from "../js/firebase";
import 'firebase/firestore';


export async function GetDocument(nameCollection, id) {
    let out = {payload: null, error: null};

    const db = firebase.firestore(firebase);
    const docRef = db.collection(nameCollection).doc(id);

    try {
        const doc = await docRef.get()
        if (doc.exists) {
            const {data} = doc.data();
            out = {...out, payload: data};
        }
    } catch (err) {
        out = {...out, error: err};
    }

    return out;
}

export async function GetObjDocument(nameCollection, id, code) {
    let out = {payload: null, error: null};

    const db = firebase.firestore(firebase);
    const docRef = db.collection(nameCollection).doc(id);

    try {
        const doc = await docRef.get();
        if (doc.exists) {
            const {data} = doc.data();

            for (let i = 0; i < data.length; i++) {
                if (data[i].code === code) {
                    out = {...out, payload: data[i]};
                    break;
                }
            }

        }
    } catch (err) {
        out = {...out, error: err};
    }

    return out;
}