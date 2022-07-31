import userEvent from "@testing-library/user-event";
import { Link, useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db, logout, setProfile, uploadImage } from "./Firebase";
import { doc, getDoc } from "firebase/firestore";
import { Button, Modal, Accordion } from "flowbite-react";
import Footer from "./footer";
import React, { useEffect, useState } from "react";
import { async } from "@firebase/util";
import Sidebar from "../components/Navbar/Sidebar";
// import "./style.css";
import "../index.css";
export default function Dashboard() {
  const [user, loading] = useAuthState(auth);
  const [data1, setData1] = useState("RRR");
  const [data2, setData2] = useState("RRR");
  const [data3, setData3] = useState("RRR");
  const [data4, setData4] = useState("RRR");
  const [data5, setData5] = useState("RRR");
  const [data6, setData6] = useState("RRR");
  const [data7, setData7] = useState("RRR");
  const [data8, setData8] = useState("RRR");
  const [modalShow, setModalShow] = useState(false);
  const handleShow = () => setModalShow(true);
  const handleClose = () => setModalShow(false);
  const text = <i class="material-icons">star</i>;
  const text1 = <i class="material-icons">star_half</i>;
  let j = 0;
  let mul_text = "";
  let i = 0;
  let k = 0;
  let a = 0;
  const elements1 = ["", text, text, text, text, text];
  mul_text = text + text;

  const navigate = useNavigate();
  useEffect(() => {
    if (loading) return;
    if (!user) return navigate("/");

  }, [user, loading]);

  const sun = async () => {
    const snap = await getDoc(doc(db, "People", user.uid));

    if (snap.exists()) {
      // console.log(typeof(snap.data()['fb']));
      setData1(snap.data()["college"]);
      setData2(snap.data()["email"]);
      setData3(snap.data()["fb"]);
      setData4(snap.data()["insta"]);
      setData5(snap.data()["linkedin"]);
      setData6(snap.data()["name"]);
      setData7(snap.data()["phone"]);
      setData8(snap.data()["twitter"]);
      console.log(data1);
      console.log(snap.data()["fb"]);
      // console.log("bulb");
      return snap;
    } else {
      console.log("No such document");
    }
  };
  sun();

  return (
    <><div>
      <Sidebar />
      
      
      <div>
      <div style={{width: '350px', margin: 'auto', textAlign: 'center', marginTop: '20px'}} id='details' >
        


        <h2 style={{marginTop: '10px', fontSize: '1.5rem', fontWeight: 'bold'}}> Hii {data6} </h2>
        <h3>See Your Details</h3>
        <h4 style={{marginTop: '10px', marginBottom: '5px' , fontSize: '1rem', fontWeight: 'bold'}}>Your Email:</h4>
        <div style={{padding: '5px', backgroundColor: '#0000001a', borderRadius: '5px'}}>
        <h4>{data2}</h4>
        </div>
        <h4 style={{marginTop: '10px', marginBottom: '5px' , fontSize: '1rem', fontWeight: 'bold'}}>Your College:</h4>
        <div style={{padding: '5px', backgroundColor: '#0000001a', borderRadius: '5px'}}>
        <h4>{data1}</h4>
        </div>
        <h4 style={{marginTop: '10px',marginBottom: '5px' ,fontSize: '1rem', fontWeight: 'bold'}}>Your Contact Number:</h4>
        <div style={{padding: '5px', backgroundColor: '#0000001a', borderRadius: '5px'}}>
        <h4>{data7}</h4>
        </div>
        <h4 style={{marginTop: '10px',marginBottom: '5px' ,fontSize: '1rem', fontWeight: 'bold'}}>Your Score:</h4>
        <div style={{padding: '5px', backgroundColor: '#0000001a', borderRadius: '5px'}}>
        <h4>none</h4>
        </div>
        <h4 style={{marginTop: '10px',marginBottom: '5px' ,fontSize: '1rem', fontWeight: 'bold'}}>Referral Code:</h4>
        <div style={{padding: '5px', backgroundColor: '#0000001a', borderRadius: '5px'}}>
        <h4>none</h4>
        </div>
        
        {/* <div className="basis-1/4">
          <Sidebar name ={data6} collage={data1} />
        </div> */}
        {/* <div >
          
          
          <div className="main1">
            <p className="text-green-500">Name: {data6}</p>
            <p>Email Id: {data2}</p>
            <p>Phone Number: {data7}</p>
            <p>College: {data1}</p>
            <p>Facebook Id: {data3}</p>
            <p>Instagram I                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            d: {data4}</p>
            <p>LinkedIn Id: {data5}</p>
            <p>Twitter Id: {data8}</p>
          </div>
        </div> */}
      </div>
      <Footer />
      </div>
      <div>
      <div id="pointsdistribution" style={{textAlign: 'center', width: '100%'}} >
      <h1 style={{fontSize: '2rem', fontWeight: 'bold', textAlign: 'center',marginTop: '2%' ,}}>Points Distribution</h1>

      <table striped bordered hover style={{width: '80%', marginRight: 'auto',marginLeft: 'auto', marginTop: '2%' ,fontWeight: 'bold'}}>
      <thead style={{backgroundColor:"darkmagenta", height: '40px' }}>
        <tr>
          <th>Tasks</th>
          <th>Points</th>
          
        </tr>
      </thead>
      <tbody style={{border: '2px solid black', }}>
        <tr>
          <td>Like and Share on Facebook</td>
          <td>20</td>
          
        </tr>
        <hr></hr>
        <tr>
          <td>Updating job profile on Linkedin</td>
          <td>60</td>
          
        </tr>
        <hr></hr>
        <tr>
          <td>sharing the posts as insta story</td>
          <td>30</td>
          
        </tr>
        <hr></hr>
        <tr>
          <td>If Rf is used for registration</td>
          <td>40</td>
                         
        </tr>
        <hr></hr>
        <tr>
          <td>Last year participants coming back(Loyalty)</td>
          <td>50</td>
        </tr>
        <hr></hr>
        <tr>
          <td>Pre-registration</td>
          <td>50</td>
        </tr>
        <hr></hr>
        <tr>
          <td>if write a blog and this blog is verified by</td>
          <td>60</td>
        </tr>
        <hr></hr>
        
        <tr>
          <td>Upgradation of Level</td>
          <td>50</td>
        </tr>
        <hr></hr>
        <tr>
          <td>Event Organizing in your city</td>
          <td>Depends</td>
        </tr>

      </tbody>
    </table>
      </div>
      <Footer />
      </div>
      </div>
    </>
  );
}

{
  /* <div className="grind">
            {/* <p>Lorem ipsum ditate!</p> 
            <ul>
              {elements1.map((value, index) => {
                i++;
                if (i <= a) {
                  j = i;
                } else {
                  j = 0;
                }

                return (
                  <div className="star">
                    <p>{elements1[j]}</p>
                  </div>
                );
              })}
            </ul>

            <ul>
              {elements1.map((value, index) => {
                k++;
                if (k <= 5 - a) {
                  j = k;
                } else {
                  j = 0;
                }

                return (
                  <div className="star1">
                    <p>{elements1[j]}</p>
                  </div>
                );
              })}
            </ul>
          </div> */
}
