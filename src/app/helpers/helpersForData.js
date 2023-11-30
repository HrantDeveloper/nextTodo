import { db } from "@/app/firebaseConfig";
import {
  collection,
  addDoc,
  getDocs,
  deleteDoc,
  doc,
  updateDoc,
} from "firebase/firestore";

import { getCurrentDate } from "./heleperFuncs";

export async function postData(data) {
  try {
    const docRef = await addDoc(collection(db, "tasks"), data);
    return true;
  } catch (error) {
    alert("document was not sent", error);
    return false;
  }
}
export async function searchData(serchedWord) {
  const response = await getDocs(collection(db, "tasks"));
  const data = [];
  response.forEach((doc) => {
    data.push({ id: doc.id, ...doc.data() });
  });
  const searchResults = data.filter((item) => item.name.includes(serchedWord));
  return searchResults;
}

export async function getData(page) {
  const todayDate = getCurrentDate("short");
  const response = await getDocs(collection(db, "tasks"));
  const data = [];
  response.forEach((doc) => {
    data.push({ id: doc.id, ...doc.data() });
  });
  let filteredData = [];

  if (page == "myDay") {
    data.map((item) => {
      if (item.type == "myDay") {
        filteredData.push(item);
      } else if (item.type == "planned" && item.date == todayDate) {
        filteredData.push(item);
      }
    });
  } else if (page == "planned") {
    filteredData = data.filter((item) => {
      if (item.date) {
        return item.date !== todayDate || item.type == "planned";
      }
    });
  } else {
    filteredData = data.filter((item) => item.type == page);
  }
  return page !== "tasks" ? filteredData : data;
}

export async function deleteData(id) {
  try {
    await deleteDoc(doc(db, "tasks", id));
    return true;
  } catch (error) {
    alert("document was not deleted", error);
    console.log(error.message);
    return false;
  }
}

export async function updateData(id, newData) {
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
  const data = [];
  let myDayQuanity = [];
  let importantQuanity = [];
  let plannedQuantity = [];
  response.forEach((doc) => {
    data.push({ id: doc.id, ...doc.data() });
  });
  data.map((item) => {
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
