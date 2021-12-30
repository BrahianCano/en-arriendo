// Import Firebase //
import db from "../js/firebase";
import "firebase/firestore";

import { collection, getDocs } from "firebase/firestore";

export default async function GetMultipleDocs(nameCollection) {
  let out = { payload: null, error: null };
  let outDocuments = [];

  const docsCollection = await getDocs(collection(db, nameCollection));
  docsCollection.forEach((doc) => {
    outDocuments.push(doc.data());
  });
  out = { ...out, payload: outDocuments };

  return out;
}
