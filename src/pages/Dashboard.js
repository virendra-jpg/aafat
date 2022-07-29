


import userEvent from '@testing-library/user-event'
import { Link, useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db, logout, setProfile, uploadImage  } from "./Firebase";
import { doc, getDoc } from "firebase/firestore";
import React, { useState } from 'react'
import './style.css'
import { async } from '@firebase/util';
import './style.css';


  export default function Dashboard() {
    
    const [user ] = useAuthState(auth);
    const [data1,setData1] = useState("RRR");
    const [data2,setData2] = useState("RRR");
    const [data3,setData3] = useState("RRR");
    const [data4,setData4] = useState("RRR");
    const [data5,setData5] = useState("RRR");
    const [data6,setData6] = useState("RRR");
    const [data7,setData7] = useState("RRR");
    const [data8,setData8] = useState("RRR");
    const text = <i class="material-icons">star</i>
    const text1 = <i class="material-icons">star_half</i>
    let j=0;
    let mul_text = '';
    let i=0;
    let k=0;
    let a=0;
    const elements1 = ["", text, text,text,text,text];
    mul_text= text+text;
    const sun = async () => {
    const snap = await getDoc(doc(db, 'People', user.uid));
    
    if (snap.exists()) {
      // console.log(typeof(snap.data()['fb']));
      setData1(snap.data()['college']);
      setData2(snap.data()['email']);
      setData3(snap.data()['fb']);
      setData4(snap.data()['insta']);
      setData5(snap.data()['linkedin']);
      setData6(snap.data()['name']);
      setData7(snap.data()['phone']);
      setData8(snap.data()['twitter']);
      console.log(data1);
      console.log(snap.data()['fb']);
      // console.log("bulb");
      return (snap)
    }
    else {
      console.log("No such document")
    }
      }
      sun();

    return (
      <div className='main1'>
      <h1>My Articles</h1>
      <hr className="line1" />
        <h2>About</h2>
        <div id='demo'>
          {/* <i class="material-icons">star</i><i class="material-icons">star</i><i class="material-icons">star</i><i class="material-icons">star</i><i class="material-icons">star</i> */}
          < br/>
          {/* {text} */}
          <div className="grind1">
            <div className="grind2">
    <p>Your Level is:</p>
    </div>
    </div>
<div className="grind">

    {/* <p>Lorem ipsum ditate!</p> */}
          <ul>
      {elements1.map((value, index) => {
        i++;
        if(i<=a){
            // console.log(i)
            j=i;
        }
        else{
            j=0;
        }
        
        return (
            <div className='star'>
        <p>
            {elements1[j]}
        </p>

        </div>
        )})}
    </ul>

    <ul>
      {elements1.map((value, index) => {
        k++;
        if(k<=(5-a)){
            // console.log(i)
            j=k;
        }
        else{
            j=0;
        }
        
        return (
            <div className='star1'>
        <p>
            {elements1[j]}
        </p>
        
        </div>
        )})}
    </ul>
    </div>
          </div>
        <p>Name: {data6}</p>
        <p>Email Id: {data2}</p>
        <p>Phone Number: {data7}</p>
        <p>College: {data1}</p>
        <p>Facebook Id: {data3}</p>
        <p>Instagram Id: {data4}</p>
        <p>LinkedIn Id: {data5}</p>
        <p>Twitter Id: {data8}</p>
      </div>

        
    )
  }
