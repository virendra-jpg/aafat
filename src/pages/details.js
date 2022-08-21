import React, { useEffect, useState } from 'react';
// import 'bootstrap';
import { Link, useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db, logout, setProfile, uploadImage } from "./Firebase";
import './details.css'
import '../css/registration_form.css'

const Details = () => {
    const navigate = useNavigate();
    const [user, loading, error] = useAuthState(auth);
    useEffect(() => {
        if (loading) return;
        if (!user) return navigate("/register");

    }, [user, loading]);

    const [data, setData] = useState({ name: "", email: "", phone: "", fb: "", insta: "", linkedin: "", college: "", twitter: "", referred_by: "" });
    const [image, setImage] = useState("");
    const [url, setUrl] = useState("");
    const handleChange = event => {
        const { name, value } = event.target;
        setData({ ...data, [name]: value })
    };

    const submitForm = (e) => {
        e.preventDefault();
        setProfile(data, user.uid);
        setUrl(uploadImage(image));
        setUrl('');
        setImage('');
        setData({ name: "", email: "", phone: "", fb: "", insta: "", linkedin: "", college: "", twitter: "" });
        navigate("/verification");
    }

    return (
        <div >
            {/* <div style={{ margin: 'auto', textAlign: 'center', backgroundImage: './background.jpg' }}>

                <h2 className="heading">Registration Form</h2>
                <hr className="hr"></hr>

                <form onSubmit={submitForm}>
                    <div className="input">
                        <label for="name">Name:<span className="red">*</span></label>
                        <input id="name" placeholder='Virendra Sonkaria' type="text" name="name" required onChange={handleChange} value={data.name}></input>
                    </div>

                    <div className="input">
                        <label for="email">Email:<span className="red">*</span></label>
                        <input id="email" placeholder='sonkaria@gmail.com' type="email" name="email" required onChange={handleChange} value={data.email}></input>
                    </div>

                    <div className="input">
                        <label for="contact">Contact No.:<span className="red">*</span></label>
                        <input placeholder='1231231234' pattern="[0-9]{3}[0-9]{3}[0-9]{4}" type="tel" id="phone" name="phone" required onChange={handleChange} value={data.phone}></input>
                    </div>

                    <div className="input">
                        <label for="college-name">College Name:<span className="red">*</span></label>
                        <input id="college" placeholder='IIT Kanpur' type="text" name="college" required onChange={handleChange} value={data.college}></input>
                    </div>

                    <div className="input">
                        <label for="linkedin-profile">Linkedin Profile Link:<span className="red">*</span></label>
                        <input id="linkedin" type="url" name="linkedin" pattern="https://.*" required onChange={handleChange} value={data.linkedin}></input>
                    </div>

                    <div className="input">
                        <label for="instagram-profile">Instagram Profile Link:<span className="red">*</span></label>
                        <input id="insta" type="url" name="insta" pattern="https://.*" required onChange={handleChange} value={data.insta}></input>
                    </div>

                    <div className="input">
                        <label for="facebook-profile">Facebook Profile Link:<span className="red">*</span></label>
                        <input id="fb" type="url" name="fb" pattern="https://.*" required onChange={handleChange} value={data.fb}></input>
                    </div>

                    <div className="input">
                        <label for="twitter-profile">Twitter Profile Link:</label>
                        <input id="twitter" type="url" name="twitter" pattern="https://.*" onChange={handleChange} value={data.twitter}></input>
                    </div>

                    <div className="input">
                        <label for="college-id">College ID:<span className="red">*</span></label>
                        <input id="id" type="file" required onChange={(e) => setImage(e.target.files[0])} ></input>
                    </div>
                    <div className="input" >
                        <label>Referral Code:</label>
                        <input id='referral' name='referral' />

                    </div>

                    <div className="input">
                        <input type="submit" className="btn" value="Submit"></input>
                    </div>
                </form>

            </div> */}

            {/* new code */}

            <div className="row cont">
                <div className="col-lg-4 col-sm-12 img">
                    <img src="/logo.png" alt="" className="heroimg" />
                </div>
                <div className="form col-lg-8 col-sm-12">
                    <h2>Registration Form</h2>
                    <form onSubmit={submitForm}>
                        <div className="input">
                            <label htmlFor="exampleInputEmail1" className="form-label">
                                Name:
                            </label>
                            <input
                                 id="name" placeholder='Virendra Sonkaria' type="text" name="name" required onChange={handleChange} value={data.name}
                            />
                        </div>
                        <div className="input">
                            <label htmlFor="exampleInputPassword1" className="form-label">
                                Email:
                            </label>
                            <input
                                id="email" placeholder='sonkaria@gmail.com' type="email" name="email" required onChange={handleChange} value={data.email}
                            />
                        </div>
                        <div className="input">
                            <label htmlFor="exampleInputPassword1" className="form-label">
                                Contact no:
                            </label>
                            <input
                             placeholder='1231231234' pattern="[0-9]{3}[0-9]{3}[0-9]{4}" type="tel" id="phone" name="phone" required onChange={handleChange} value={data.phone}
                            />
                        </div>
                        <div className="input">
                            <label htmlFor="exampleInputPassword1" className="form-label">
                                College Name
                            </label>
                            <input
                                 id="college" placeholder='IIT Kanpur' type="text" name="college" required onChange={handleChange} value={data.college}
                            />
                        </div>
                        <div className="input">
                            <label htmlFor="exampleInputPassword1" className="form-label">
                                Linked-in Profile:
                            </label>
                            <input id="linkedin" type="url" name="linkedin" pattern="https://.*" required onChange={handleChange} value={data.linkedin}/>
                        </div>
                        <div className="input">
                            <label htmlFor="exampleInputPassword1" className="form-label">
                                Instagram Profile:
                            </label>
                            <input id="insta" type="url" name="insta" pattern="https://.*" required onChange={handleChange} value={data.insta}
                            />
                        </div>
                        <div className="input">
                            <label htmlFor="exampleInputPassword1" className="form-label">
                                Twitter Profile:
                            </label>
                            <input id="twitter" type="url" name="twitter" pattern="https://.*" onChange={handleChange} value={data.twitter}
                            />
                        </div>
                        <div className="input">
                            <label htmlFor="exampleInputPassword1" className="form-label">
                                Facebook Profile:
                            </label>
                            <input id="fb" type="url" name="fb" pattern="https://.*" required onChange={handleChange} value={data.fb}
                            />
                        </div>
                        <div className="input">
                            <label htmlFor="exampleInputPassword1" className="form-label">
                                Referral Id(If available):
                            </label>
                            <input id="referral" type="text" name="referred_by"  required onChange={handleChange} value={data.referred_by}
                            />
                        </div>
                        <div className="input">
                            <label htmlFor="exampleInputPassword1" className="form-label">
                                College ID:
                            </label>
                            <input id="id" type="file" required onChange={(e) => setImage(e.target.files[0])}
                            />
                        </div>
                        <div className="input">
                        <input type="submit" className="btn" value="Submit"></input>
                    </div>
                    </form>
                </div>
            </div>



        </div>

    );
};


export default Details;
