import { useState, useEffect } from "react";
import { projectFirestore } from "../firebase/config";

const useFirestore = (collection) => {
  const [docs, setDocs] = useState([]);

  useEffect(() => {
    const unsub = projectFirestore
      .collection(collection)
      .orderBy("createdAt", "desc")
      .onSnapshot((snap) => {
        let documents = [];
        snap.forEach((doc) => {
          documents.push({ ...doc.data(), id: doc.id }); // this gives each document the createdAt, url and id
        });
        setDocs(documents);
      });

    return () => unsub(); // cleanup function, unsub if we no longer want to connect to the collection
  }, [collection]);

  return { docs };
};

export default useFirestore;
