import { db } from "../firebaseConfig";
import {
  collection,
  addDoc,
  getDocs,
  deleteDoc,
  doc,
  updateDoc,
} from "firebase/firestore";

import { getCurrentDate } from "./heleperFuncs";

export async function postData(data:PostedItemDataType) {
  try {
    const docRef = await addDoc(collection(db, "tasks"), data);
    return true;
  } catch (error) {
    alert("document was not sent");
    return false;
  }
}

export async function searchData(serchedWord:string) {
  
  const response = await getDocs(collection(db, "tasks"));
  let data :[{}]=[{}];
  response.forEach((doc) => {
    data.push({ id: doc.id, ...doc.data()} );
  });
  console.log(data)
  data.shift()
  const searchResults = data.filter((item:any) => item.name.includes(serchedWord));
  return searchResults;

}

export async function getData(page:string) {
  const todayDate = getCurrentDate("short");
  const response = await getDocs(collection(db, "tasks"));
  let data : {}[] = [{}];
  response.forEach((doc) => {
    data.push({ id: doc.id, ...doc.data() });
  });
  let filteredData: {}[] = [{}];

  if (page == "myDay") {
    data.map((item:any) => {
      if (item.type == "myDay") {
        filteredData.push(item);
      } else if (item.type == "planned" && item.date == todayDate) {
        filteredData.push(item);
      }
    });
  } else if (page == "planned") {
    filteredData = data.filter((item:any) => {
      if (item.date) {
        return item.date !== todayDate || item.type == "planned";
      }
    });
  } else {
    filteredData = data.filter((item:any) => item.type == page);
  }

  return page !== "tasks" ? filteredData : data;
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
  const response = await getDocs(collection(db, "tasks"));
  let data : [{}]=[{}];
  let myDayQuanity:[{}] = [{}];
  let importantQuanity:[{}] = [{}];
  let plannedQuantity:[{}] = [{}];
  response.forEach((doc) => {
    data.push({ id: doc.id, ...doc.data() });
  });
  data.map((item:any) => {
    if (item.type == "myDay") {
      if (item.date && item.date !== todayDate) {
        plannedQuantity.push(item);
      }
      myDayQuanity.push(item);
    } else if (item.type == "important") {
      if (item.date && item.date !== todayDate) {
        plannedQuantity.push(item);
      }
      importantQuanity.push(item);
    } else if (item.date && item.type == "planned") {
      if (item.date == todayDate) {
        plannedQuantity.push(item);
        myDayQuanity.push(item);
      } else {
        plannedQuantity.push(item);
      }
    } else if (item.type == "tasks" && item.date !== todayDate) {
      plannedQuantity.push(item);
    }
  });

  const quantityData = [
    ["myDay", myDayQuanity.length],
    ["important", importantQuanity.length],
    ["planned", plannedQuantity.length],
    ["tasks", data.length],
  ];
  return quantityData;
}
