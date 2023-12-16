
import { db } from "../firebaseConfig";
import {
  collection,
  addDoc,
  getDocs,
  deleteDoc,
  doc,
  updateDoc,
} from "firebase/firestore";


export async function postData(data:PostedItemDataType) {
  try {
     await addDoc(collection(db, "tasks"), data);
    return true;
  } catch (error) {
    alert("document was not sent");
    return false;
  }
}

export async function searchData(searchedWord:string) {
  
  const response = await getDocs(collection(db, "tasks"));
  let data :{}[]=[];
  response.forEach((doc) => {
    data.push({ id: doc.id, ...doc.data()} );
  });
  const searchResults = data.filter((item:any) =>item.name.includes(searchedWord)
  );
  return searchResults;
}

export async function deleteData(id:string) {
  try {
    await deleteDoc(doc(db, "tasks", id));
    return true;
  } catch (error) {
    alert("document was not deleted");
    return false;
  }
}

export async function updateData(id:string, newData:any) {
  try {
    const updateRef = doc(db, "tasks", id);
    await updateDoc(updateRef, newData);
  } catch (error) {
    alert("document was not updated");
  }
}

