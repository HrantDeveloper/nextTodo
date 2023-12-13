import { useState } from "react"
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "../../firebaseConfig";

export const useCollection = (collectionName: string) => {
  const [data, setData] = useState<any[]>([]);
  const [error, setError] = useState<boolean>(false);

  onSnapshot(collection(db, collectionName), (snapshot) => {
    let data: any[] = [];
    snapshot.docs.forEach((doc) => {
      data.push({ id: doc.id, ...doc.data() });
    });
    setData(data);
  }, (error) => {
    setError(true);
  });

  return {
    data,
    error,
  }
}
