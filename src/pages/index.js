import React from 'react';
import Navbar from '../components/Navbar';
import 'bootstrap';
import '../pages/style.css';

import Footer from './footer';

import Box from '@mui/material/Box';

import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';

import Button from '@mui/material/Button';

import { useState } from 'react';
import Flippy, { FrontSide, BackSide } from 'react-flippy';




const Home = () => {
return (
    
        
       
    
        <div>
          <Navbar />


        
        <div className='bg'>
         <div  style={{margin: 'auto', marginBottom: '5%'}} className='row'>

          
        <div className='feature-box col-lg-6 col-md-6 col-sm-12'> 
        <Typography style={{ marginTop: '10%' , alignSelf:'center',fontStretch:'extra-expanded',color:'#00008B', fontSize:45, fontWeight:'bolder',paddingTop:0,paddingLeft:'5vw', textAlign:'left', display:{xs:'flex'},fontFamily: 'fangsong'}}>CAMPUS AMBASSADOR PROGRAM</Typography>
    <Typography style={{textAlign:'center',fontWeight:'bold',marginTop:'7vh',marginLeft:0,fontSize:25}}>Be the Representative of your Campus</Typography>
        </div>
        <div style={{marginRight: '0',  }} className='container feature-box col-lg-6 col-md-6 col-sm-12'>
          <img style={{width: '375px', marginTop: '10%', marginTop: '10%', marginLeft: 'auto', marginRight: 'auto'}} src='./user1.png' />
        </div> 
        
       
    </div>
    <a href='/register' ><button  style={{marginTop: '3%', marginBottom: '3%', marginLeft: '50px', width: '150px', height: '50px', fontWeight: 'bold', backgroundColor: '#0d6efd'}} type="button" className="btn btn-primary">Apply Now!</button></a>
    


  <section id='why' style={{textAlign: 'center'}}>
    

    <img  style={{display: 'inline-block', height: '200px', width: "200px"}} src="./p2e1.png" />
    <article className="box">
        <header>
          <h1 style={{fontSize: '2rem', textAlign: 'center', fontWeight: 'bold', marginBottom: '1%'}} >WHY BECOME CA?</h1>
        </header>
        <div className="comtent">
          <ul style={{
                fontSize: '20px',
                letterSpacing: '2px',
                listStyle: 'none',
                textAlign: 'left',
                color: 'white',
                listStyleType: 'disk'
                
          }} >
            <li>Improve your skill set</li>
            <li>
              Enhance your communication and managerial skills Increase your
              contacts
            </li>
            <li>
              Interact with people coming from diverse fields across the
              country to develop your network
            </li>
            <li>
              Enhance your image and Be associated with India's largest sports festival 
              and lead your career to a promising future
            </li>
            <li>
              Become the Leader of your College. An opportunity to represent
              your College at a higher level.
            </li>
          </ul>
        </div>
      </article>
    
  </section>




  <section style={{textAlign: 'center', margin: "3%"}} id='responsiblity'>

<img style={{display: 'inline-block', height: '200px', width: "200px"}} src="./p2e3.png" />








<h1 style={{fontSize: '2rem', textAlign: 'center', fontWeight: 'bold', marginBottom: '1%'}} >responsiblities</h1>


<Box style={{minHeight:'28rem',display:'flex',flexWrap:'wrap',justifyContent:'space-between',paddingLeft:'6rem',paddingRight:'6rem',alignSelf:'center'}}>
    <Flippy
    flipOnHover={true} // default false
    flipOnClick={false} // default false
    flipDirection="horizontal" // horizontal or vertical
    style={{ width: '200px', height: '200px',marginLeft:0,marginTop:120 }} /// these are optional style, it is not necessary
  >
    <FrontSide
      style={{
        display:'flex',
        flexWrap:'wrap',
        backgroundColor: 'rgb(252,127,3)',
        textAlign:'ceter',
        alignItems:'center',
        paddingLeft:40,
        fontSize:25,
        fontWeight:'bolder',
        color:'white',
        boxShadow:'15 15'
      }}
    >
      ADVERTISE
    </FrontSide>
    <BackSide
      style={{ display:'flex',flexWrap:'wrap',backgroundColor: '#F8F2ED',color:'black',alignItems:'center',textAlign:'center',fontSize:15,paddingLeft:20,paddingRight:20}}>
      Publicize Udghosh and its sponsors in your college by sharing posts and promoting content by becoming a focal point for your respective college.
    </BackSide>
  </Flippy>
    <Flippy
    flipOnHover={true} // default false
    flipOnClick={false} // default false
    flipDirection="horizontal" // horizontal or vertical
    // to use toggle method like this.flippy.toggle()
    // if you pass isFlipped prop component will be controlled component.
    // and other props, which will go to div
    style={{ width: '200px', height: '200px',marginLeft:0,marginTop:120 }} /// these are optional style, it is not necessary
  >
    <FrontSide
      style={{
        display:'flex',
        flexWrap:'wrap',
        backgroundColor: '#FFD300',
        textAlign:'ceter',
        alignItems:'center',
        paddingLeft:40,
        fontSize:25,
        fontWeight:'bolder',
        color:'white',
        boxShadow:'15 15'
      }}
    >
      ORGANIZE
    </FrontSide>
    <BackSide
      style={{ display:'flex',flexWrap:'wrap',backgroundColor: '#F8F2ED',color:'black',alignItems:'center',textAlign:'center',fontSize:15,paddingLeft:20,paddingRight:20}}>
      Organize events, workshops and sessions regarding Udghosh and what it has to offer with assistance from mentors
    </BackSide>
  </Flippy>
    <Flippy
    flipOnHover={true} // default false
    flipOnClick={false} // default false
    flipDirection="horizontal" // horizontal or vertical
    // to use toggle method like this.flippy.toggle()
    // if you pass isFlipped prop component will be controlled component.
    // and other props, which will go to div
    style={{ width: '200px', height: '200px',marginLeft:0,marginTop:120 }} /// these are optional style, it is not necessary
  >
    <FrontSide
      style={{
        display:'flex',
        flexWrap:'wrap',
        backgroundColor: '#FF1694',
        textAlign:'ceter',
        alignItems:'center',
        paddingLeft:40,
        fontSize:25,
        fontWeight:'bolder',
        color:'white',
        boxShadow:'15 15'
      }}
    >
      CONDUCT
    </FrontSide>
    <BackSide
      style={{ display:'flex',flexWrap:'wrap',backgroundColor: '#F8F2ED',color:'black',alignItems:'center',textAlign:'center',fontSize:15,paddingLeft:20,paddingRight:20}}>
      Help in management of elimination rounds in your college and city to select participants for the main event.
    </BackSide>
  </Flippy>
    <Flippy
    flipOnHover={true} // default false
    flipOnClick={false} // default false
    flipDirection="horizontal" // horizontal or vertical
    // to use toggle method like this.flippy.toggle()
    // if you pass isFlipped prop component will be controlled component.
    // and other props, which will go to div
    style={{ width: '200px', height: '200px',marginLeft:0,marginTop:120 }} /// these are optional style, it is not necessary
  >
    <FrontSide
      style={{
        display:'flex',
        flexWrap:'wrap',
        backgroundColor: 'blue',
        textAlign:'ceter',
        alignItems:'center',
        
        fontSize:25,
        fontWeight:'bolder',
        color:'white',
        boxShadow:'15 15'
      }}
    >
      COORDINATE
    </FrontSide>
    <BackSide
      style={{ display:'flex',flexWrap:'wrap',backgroundColor: '#F8F2ED',color:'black',alignItems:'center',textAlign:'center',fontSize:15,paddingLeft:20,paddingRight:20}}>
      Collaborate with the Udghosh team in organising on-ground events in your city.
    </BackSide>
  </Flippy>
  </Box> 
 
  </section>




<section id='perks' style={{textAlign: 'center', position:'relative', margin: '3%'}}>
    

    <img style={{display: 'inline-block', height: '200px', width: "200px"}} src="./p2e2.png" />
    <article className="box">
        <header>
          <h1 style={{fontSize: '2rem', textAlign: 'center', fontWeight: 'bold', margin: '2%'}}>Perks & Sponsors</h1>
        </header>
        <div className="row" style={{textAlign: 'center', margin: 'auto' , alignItems: 'center'}}>
          <div className=' col-sm-12 col-lg-4 col-md-4' >
            <img src='./Elearnmarkets.jpeg' style={{width: '200px', height: '200px', borderRadius: '50%', margin: 'auto'}}/>
              <h3 style={{fontSize: '1.2rem', textAlign: 'center', fontWeight: 'bold',marginTop: '5px'}}>Associate Partner</h3>
              <p>Finance and Marketing courses to top CAs and basic courses to all CAs <span style={{fontWeight: 'bold'}}> worth INR 7 lakh </span></p>
          </div>
          <div className=' col-sm-12 col-lg-4 col-md-4' >
          <img src='./Grabon.png' style={{width: '200px', height: '200px', borderRadius: '50%', margin: 'auto'}}/>
          <h3 style={{fontSize: '1.2rem', textAlign: 'center', fontWeight: 'bold', marginTop: '5px'}}>Official Savings Partner</h3>
          <p>30+ Exciting coupons to all the CAs  <span style={{fontWeight: 'bold'}}>worth INR 50k</span></p>
          </div>
          <div className=' col-sm-12 col-lg-4 col-md-4' >
          <img src='./unstop.png' style={{width: '200px', height: '200px', borderRadius: '50%', margin: 'auto'}}/>
          <h3 style={{fontSize: '1.2rem', textAlign: 'center', fontWeight: 'bold', marginTop: '5px'}}>Online Hosting Partner</h3>
          <p>Advanced courses and Unstop Coins to top performing CAs<span style={{fontWeight: 'bold'}}> Worth INR 1 lakh </span></p>
          </div>
          </div><div style={{marginLeft: 'auto', marginRight: 'auto', marginTop: '2%'}} className='row'>
          <div className=' col-sm-12 col-lg-6 col-md-6' >
          <img src='./HuntForSuccess.png' style={{width: '200px', height: '200px', borderRadius: '50%', margin: 'auto'}}/>
          <h3 style={{fontSize: '1.2rem', textAlign: 'center', fontWeight: 'bold',marginTop: '5px'}}>Career Partner</h3>
          
          </div>
          <div  className=' col-sm-12 col-lg-6 col-md-6' >
          <img src='./ic_launcher.png' style={{width: '200px', height: '200px', borderRadius: '50%', margin: 'auto'}}/>
          <h3 style={{fontSize: '1.2rem', textAlign: 'center', fontWeight: 'bold', marginTop: '5px'}}>Associate Partner</h3>
          <p>Premium courses to top performers and discount coupons to all the CAs <span style={{fontWeight: 'bold'}}>worth INR 1.2 lakh</span></p>
          </div>
        </div>
      </article>
    
  </section>

  <section id='contact' style={{textAlign: 'center', margin: '3%'}}>
    



  <div className="container">
    <h1 style={{fontSize: '2rem', textAlign: 'center', fontWeight: 'bold', margin:'2%'}}>CONTACT US</h1>
        
        <div className="row">
            <div  className="col-lg-6">
                <div className="card p-0">
                    <div className="card-image">
                        {/* <img src="https://media-exp1.licdn.com/dms/image/C4E03AQHEM643FlAKSw/profile-displayphoto-shrink_800_800/0/1645354799226?e=1664409600&v=beta&t=spqTBfZuas4pwVzUZP4gwCvfYuyRmlsZ8vJGIX5_Jiw"
                            alt="" /> */}
                        <img src="./kulshresthameena.jpeg"
                            alt="" />
                    </div>
                    <div className="card-content d-flex flex-column align-items-center">
                        <h4 className="pt-2">Kulshrestha Meena</h4>
                        <h5>Head Hospitality </h5>
                        

                        <ul className="social-icons d-flex justify-content-center">
                        <li >
                                <a href="tel:7976-698-094">
                                <i className="bi bi-telephone-fill"></i>
                                </a>
                            </li>
                            <li >
                                <a href="https://www.facebook.com/kulshrestha.meena.7">
                                    <i className="bi bi-facebook"></i>
                                </a>
                            </li>
                            <li >
                                <a href="mailto:klmeena@iitk.ac.in">
                                    <i className="bi bi-envelope"></i>
                                </a>
                            </li>
                            <li >
                                <a href="https://api.whatsapp.com/send?phone=+917976698094">
                                    <i className="bi bi-whatsapp"></i>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div  className="col-lg-6">
                <div className="card p-0">
                    <div className="card-image">
                        {/* <img src="https://media-exp1.licdn.com/dms/image/C5603AQHCfRB_npd_Yg/profile-displayphoto-shrink_800_800/0/1610271787756?e=1664409600&v=beta&t=AXEU-SCoS3DYzGyNc0s5AF1Nh-XeZUUjKwMxjmtl7TU"
                            alt="" /> */}
                        <img src="./priyanshubhusan.jpeg"
                            alt="" />
                    </div>
                    <div className="card-content d-flex flex-column align-items-center">
                        <h4 className="pt-2">Prriyanshu Bhushan</h4>
                        <h5>Head Hospitality </h5>

                        <ul className="social-icons d-flex justify-content-center">
                        <li >
                                <a href="tel:993-811-2811">
                                <i className="bi bi-telephone-fill"></i>
                                </a>
                            </li>
                            <li >
                                <a href="https://www.facebook.com/priyanshu.bhusan.31/">
                                    <i className="bi bi-facebook"></i>
                                </a>
                            </li>
                            <li >
                                <a href="mailto:pbhusan@iitk.ac.in">
                                    <i className="bi bi-envelope"></i>
                                </a>
                            </li>
                            <li >
                                <a href="https://api.whatsapp.com/send?phone=+919938112811">
                                    <i className="bi bi-whatsapp"></i>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            
        

        </div>
    </div>
  
  </section>
<Footer />
</div>


    </div>



        
      );
      };



export default Home;
