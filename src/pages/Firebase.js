
import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged, GoogleAuthProvider, signInWithPopup, FacebookAuthProvider, signOut } from "firebase/auth";
import { getFirestore, addDoc, doc, collection, setDoc, query, where , getDoc } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyA-PoW2G_cAiJoOzuIY-KwOD4u6J421cE8",
  authDomain: "ca-udghosh22.firebaseapp.com",
  projectId: "ca-udghosh22",
  storageBucket: "ca-udghosh22.appspot.com",
  messagingSenderId: "750620492300",
  appId: "1:750620492300:web:2923b762ae459b8b2aa429",
  measurementId: "G-44YKWH8227"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
const db = getFirestore(app);
const profileRef = collection(db, "People");




export const signInWithGoogle = () => {
  const provider = new GoogleAuthProvider();
  signInWithPopup(auth, provider)
      .then((result) => {
        const name = result.user.displayName;
        const email = result.user.email;
        const profilePic = result.user.photoURL;
    
        return result.user;
      })
      .catch((error) => {
        console.log(error);
      });
  };


  export const signInWithFacebook = () => {
    const provider = new FacebookAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        const name = result.user.displayName;
        const email = result.user.email;
        const profilePic = result.user.photoURL;  
      
      })
      .catch((error) => {
        console.log(error);
      });
  };

  onAuthStateChanged(auth, user => {
    if (user) {

    }
    else {

    }
  })

const logout = () => {
  console.log("hello you need to login")
  signOut(auth);
  };

const getProfile = async (id) =>{
  const docRef = doc(db, "People", id);
  try {
    const docSnap =  await getDoc(docRef);
    return docSnap;
  } catch(error) {
      console.log(error)
  }
}

async function setProfile(data, id) {
 await setDoc(doc(db, "People", id), data);

}

const uploadImage = (image) => {
  const data = new FormData()
  data.append("file", image)
  data.append("upload_preset", "geeky_images")
  data.append("cloud_name","udghosh")
  fetch("https://api.cloudinary.com/v1_1/udghosh/image/upload",{
    method:"post",
    body: data
  })
  .then(resp => resp.json())
  .then(data => {
    return data.url;
  })
  .catch(err => console.log(err))
}

export {
  logout,
  db,
  setProfile,
  uploadImage,
  getProfile
};