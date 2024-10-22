
import { initializeApp } from "firebase/app";
import {
    createUserWithEmailAndPassword,
    getAuth,
    signInWithEmailAndPassword,
    signOut             } from "firebase/auth";
import {
         addDoc,
         collection,
         getFirestore
                      } from "firebase/firestore";
import { toast } from 'react-toastify';


const firebaseConfig = {
  apiKey: "AIzaSyCWA_ZzZaMJUIt02ewYlFXBhNi8I3GfuA0",
  authDomain: "netflix-clone-9a622.firebaseapp.com",
  projectId: "netflix-clone-9a622",
  storageBucket: "netflix-clone-9a622.appspot.com",
  messagingSenderId: "916966861348",
  appId: "1:916966861348:web:f81453141c2adcd56286b1"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const signup = async (name, email, password)=>{
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;
    await addDoc(collection(db, "user"), {
        uid: user.uid,
        name, 
        authProvider: "local",
        email,
    });
  }  catch (error) {
    console.log(error);
    toast.error(error.code.split('/')[1].split('-').join(" "));
  }
};

const login = async (email, password)=> {
  try {
    await signInWithEmailAndPassword(auth, email, password);
  } catch (error) {
    console.log(error);
    toast.error(error.code.split('/')[1].split('-').join(" ")); 
  }
};

const logout = ()=>{
    signOut(auth);
};

export {auth, db, login, signup, logout};