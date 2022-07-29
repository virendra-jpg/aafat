import React, { useEffect, useState } from 'react';
// import 'bootstrap';
import { Link, useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db, logout, setProfile, uploadImage } from "./Firebase";

const Details = () => {
    const navigate = useNavigate();
    const [user, loading, error] = useAuthState(auth);
    useEffect(() => {
        if (loading) return;
        if (!user) return navigate("/register");

      }, [user, loading]);

    const [data, setData] = useState({ name: "", email: "", phone: "", fb: "", insta: "", linkedin: "", college: "", twitter: "" });
    const [image, setImage ] = useState("");
    const [ url, setUrl ] = useState("");
    const handleChange = event => {
        const { name, value } = event.target;
        setData({...data, [name]: value})
    };

    const submitForm = (e) => {
        e.preventDefault();
        setProfile(data, user.uid);
        setUrl(uploadImage(image));
        setUrl('');
        setImage('');
        setData({ name: "", email: "", phone: "", fb: "", insta: "", linkedin: "", college: "", twitter: "" });
        navigate("/Dashboard");
    }

    return (
        <div>
        <div  style={{margin: 'auto', textAlign: 'center'}}>

            <form onSubmit={submitForm}>
            <label>
                Email: 
                <input id="email" placeholder='sonkaria@gmail.com' type="email" name="email" required onChange={handleChange} value={data.email}/>
            </label>
            <br></br>
            <label>
                Name: 
                <input id="name" placeholder='Virendra Sonkaria'  type="text" name="name" required onChange={handleChange} value={data.name}/>
            </label>
            <br></br>
            <label>
                Phone: 
                <input placeholder='9999999999' type="tel" id="phone" name="phone" required onChange={handleChange} value={data.phone}/>
            </label>
            <br></br>
            <label>
                College: 
                <input id="college" placeholder='IIT Kanpur' type="text" name="college" required onChange={handleChange} value={data.college}/>
            </label>
            <br></br>
            <label>
                LinkedIn Profile Link: 
                <input id="linkedin" type="text" name="linkedin" required onChange={handleChange} value={data.linkedin}/>
            </label>
            <br></br>
            <label>
                Instagram Profile Link: 
                <input id="insta" type="text" name="insta" required onChange={handleChange} value={data.insta}/>
            </label>
            <br></br>
            <label>
                Twitter Profile Link: 
                <input id="twitter" type="text" name="twitter" onChange={handleChange} value={data.twitter}/>
            </label>
            <br></br>
            <label>
                FaceBook Profile Link: 
                <input id="fb" type="text" name="fb" required onChange={handleChange} value={data.fb}/>
            </label>
            
            <br></br>
            <label>
                College ID: 
                <input id="id" type="file" required onChange= {(e)=> setImage(e.target.files[0])}  />
            </label>

            <br></br>
            <button type="submit">Submit</button>
            <div>
            {/* <h3>ID:</h3>
            <img src={image}/> */}
            </div>
            </form>

        </div>
        <button onClick={logout}>LogOut</button>
        </div>
        );
    };
    
    
export default Details;
