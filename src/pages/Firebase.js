
import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged, GoogleAuthProvider, signInWithPopup, FacebookAuthProvider, signOut } from "firebase/auth";
import { getFirestore, addDoc, doc, collection, setDoc, query, where , getDoc } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyDFf3KKP3Mp9_PvPQyuRQzb_C1JfdzVMO8",
  authDomain: "udghosh-a45db.firebaseapp.com",
  projectId: "udghosh-a45db",
  storageBucket: "udghosh-a45db.appspot.com",
  messagingSenderId: "1064463757130",
  appId: "1:1064463757130:web:c3510e586a4e1b2066dbb3",
  measurementId: "G-KNTS3MTF83"
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