import { db } from "../firebaseConfig";
import {
  collection,
  addDoc,
  getDocs,
  deleteDoc,
  doc,
  updateDoc,
  onSnapshot
} from "firebase/firestore";

import { getCurrentDate } from "./heleperFuncs";

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

// export async function getData() {
//   const response = await getDocs(collection(db, "tasks"));
//   let data : {}[] = [];
//   response.forEach((doc) => {
//     data.push({ id: doc.id, ...doc.data() });
//   });
//   return data;
// }

export async function getData() {
  return new Promise((resolve, reject) => {
    let data:{}[] = [];
     onSnapshot(collection(db, "tasks"), (snapshot) => {
        data=[]
      snapshot.docs.forEach((doc) => {
        data.push({ id: doc.id, ...doc.data() });
      });
      resolve(data);
    }, (error) => {
      reject(error);
    });
  });
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

export async function getQuantityData() {
  const todayDate = getCurrentDate("short");
return new Promise((resolve, reject) => {
    let data:{}[] = [];
     onSnapshot(collection(db, "tasks"), (snapshot) => {
        data=[{}]
      snapshot.docs.forEach((doc) => {
        data.push({ id: doc.id, ...doc.data() });
      });
      resolve(data); 
    }, (error) => {
      reject(error);
    });
  });
}
