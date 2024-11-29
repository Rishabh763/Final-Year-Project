import { createContext, useContext } from "react";
import { createUserWithEmailAndPassword ,signInWithEmailAndPassword,signOut,signInWithPopup, GoogleAuthProvider} from "firebase/auth";
import { auth, db, provider } from "../firebase";
import { collection, addDoc } from "firebase/firestore"; 

const FirebaseContext = createContext(null);

export const useFirebase = () =>useContext(FirebaseContext);

export const FirebaseProvider = (props)=>{
    // const sendContactData = async (name,email,message)=>{
    //     try{
    //         const docRef = await addDoc(collection(db, "users"), {
    //             first: "Ada",
    //             last: "Lovelace",
    //             born: 1815
    //           });
    //         console.log("Document written with ID: ", docRef.id);
            
    //     }catch(e){
    //         console.error("Error adding document: ", e);
    //     }
    // }
    const signInWithGoogle = ()=>{
        signInWithPopup(auth, provider)
        .then(()=>{
            alert("Signind with Google ");
        })
        .catch((error)=>{
            console.log(error.code);
            console.log(error.message);
            // const errorCode = error.code;
            // const errorMessage = error.message;
            // const email = error.customData.email;
            // const credential = GoogleAuthProvider.credentialFromError(error);
        })
    }

    const signupUsingEmailAndPassword = (email,password)=>{
        createUserWithEmailAndPassword(auth,email,password)
        .then((userCredential)=>{
            const user = userCredential.user;
            console.log("Done")
        })
        .catch((error)=>{
            console.log(error.code);
            console.log(error.message);
        })
    }
    const singinUsingEmailAndPassword = (email,password)=>{
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential)=>{
            const user = userCredential.user;
            console.log("Done")
        })
        .catch((error)=>{
            alert("Email or Password is Incorrect")
            console.log(error.code);
            console.log(error.message);
        })
    }
    const signoutUser = ()=>{
        signOut(auth).then(()=>{
            console.log("Sign Out");
        })
        .catch((error)=>{
            console.log(error.code);
            console.log(error.message);
        })
    }

    return (
        <FirebaseContext.Provider value={{singinUsingEmailAndPassword,signupUsingEmailAndPassword,signoutUser,signInWithGoogle}}>
            {props.children}
        </FirebaseContext.Provider>
    );
}

