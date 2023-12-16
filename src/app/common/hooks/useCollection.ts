import { useState } from "react"
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "../../firebaseConfig";
// import { useGlobalContext } from "../Context/store";
export const useCollection = (collectionName: string) => {
  const [data, setData] = useState<any[]>([]);
  const [error, setError] = useState<boolean>(false);
  // const {setIsLoading } = useGlobalContext();
  onSnapshot(collection(db, collectionName), (snapshot) => {
    // setIsLoading(true)
    let data: any[] = [];
    snapshot.docs.forEach((doc) => {
      data.push({ id: doc.id, ...doc.data() });
    });
    setData(data);
  }, (error) => {
    setError(true);
  });
// setIsLoading(false)
  return {
    data,
    error,
  }
}
