import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase/config";

export const getUsers = async () => {
    const querySnapshot = await getDocs(collection(db, "users"));
    const users = [];
    
    querySnapshot.forEach((doc) => {
        users.push({ id: doc.id, ...doc.data() });
    });
    
    return users;
}