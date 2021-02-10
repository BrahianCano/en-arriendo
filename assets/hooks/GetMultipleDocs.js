// Import Firebase //
import firebase from "../js/firebase";
import 'firebase/firestore';


export default async function GetMultipleDocs(nameCollection) {
    let out = {payload: null, error: null};

    const db = firebase.firestore(firebase);

    let docsCollection = db.collection(nameCollection);
    try {

        let outDocuments = [];
        const documents = await docsCollection.get();

        for (const doc of documents.docs) {
            const {data} = doc.data();
            const docId = doc.id;

            data.forEach(document => {
                document = {...document, id: docId}
                outDocuments.push(document);
            });
        }
        out = {...out, payload: outDocuments}

    } catch (err) {
        out = {...out, error: err}
    }

    return out;
}
