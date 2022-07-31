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
              Enhance your image and Be associated with Asia's largest science
              and technology festival and lead your college to a promising
              future
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







<article className="box" >
        <header>
          <h1 style={{fontSize: '2rem', textAlign: 'center', fontWeight: 'bold', margin: '1%'}} >Responsiblities</h1>
        </header>
        <div >
          <div className="d-flex align-items-start flex-row bd-highlight mb-4"
          style={{
                fontSize: '20px',
                letterSpacing: '1px',
                textAlign: 'left',
                color: 'white',
                listStyleType: 'disk',
                display: 'flex',
                flexWrap: 'row wrap',
                flexFlow: 'row wrap',
                margin: '10px',
                justifyContent: 'center',
                
  alignSelf:'stretch',
  position: 'relative'
                
          }} >
            <div class = 'p-40 bd-highlight' style={{position: 'relative'}}>
              <div className='container1' >
                <div className='card1'>
                  <div className='front1'>
                      <h1>COORDINATE</h1>
                  </div>
                  <div className='back1'>
                      <h1> Collaborate with the Udghosh team in organising on-ground events in your city.</h1>
                  </div>
                </div>
              </div>
            </div>
            <div class = 'p-40 bd-highlight'>
              <div className='container1'>
                <div className='card1'>
                  <div className='front2'>
                      <h1>CONDUCT</h1>
                  </div>
                  <div className='back2'>
                        <h1> Help in management of elimination rounds in your college and city to select participants for the main event.</h1>
                  </div>
                </div>
              </div>
            </div>
            
            <div class = 'p-40 bd-highlight'>
              <div className='container1'>
                <div className='card1'>
                  <div className='front3'>
                      <h1>ORGANIZE</h1>
                  </div>
                  <div className='back3'>
                        <h1>Organize events, workshops and sessions regarding Udghosh and what it has to offer with assistance from mentors</h1>
                  </div>
                </div>
              </div>
            </div>

            <div class = 'p-40 bd-highlight'>
              <div className='container1'>
                <div className='card1'>
                  <div className='front4'>
                      <h1>ADVERTIZE</h1>
                  </div>
                  <div className='back4'>
                        <h1>Publicize Udghosh and its sponsors in your college by sharing posts and promoting content by becoming a focal point for your respective college.</h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>


</section>




<section id='perks' style={{textAlign: 'center', position:'relative',paddingTop:'150px', margin: '3%'}}>
    

    <img style={{display: 'inline-block', height: '200px', width: "200px"}} src="./p2e2.png" />
    <article className="box">
        <header>
          <h1 style={{fontSize: '2rem', textAlign: 'center', fontWeight: 'bold', margin: '2%'}}>Perks & Sponsors</h1>
        </header>
        <div className="row" style={{textAlign: 'center', margin: 'auto' , alignItems: 'center'}}>
          <div className=' col-sm-12 col-lg-4 col-md-4' >
            <img src='https://d24uab5gycr2uz.cloudfront.net/uploads/white_theme/images/elm_logo.webp' style={{width: '200px', height: '200px', borderRadius: '50%', margin: 'auto'}}/>
              <h3 style={{fontSize: '1rem', textAlign: 'center', fontWeight: 'bold',marginTop: '5px'}}>Associate Partner</h3>
              <p>Finance and Markets courses to Top CAs and other course to all CAs INR worth 7 lakh</p>
          </div>
          <div className=' col-sm-12 col-lg-4 col-md-4' >
          <img src='https://akm-img-a-in.tosshub.com/businesstoday/images/story/201703/grabon_660_030317052558.jpg?size=948:533' style={{width: '200px', height: '200px', borderRadius: '50%', margin: 'auto'}}/>
          <h3 style={{fontSize: '1rem', textAlign: 'center', fontWeight: 'bold', marginTop: '5px'}}>Official Savings Partner</h3>
          <p>30+ Exciting coupons to all the CAs</p>
          </div>
          <div className=' col-sm-12 col-lg-4 col-md-4' >
          <img src='https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,h_170,w_170,f_auto,b_white,q_auto:eco,dpr_1/apk03dddlpdaq8vdbgwy' style={{width: '200px', height: '200px', borderRadius: '50%', margin: 'auto'}}/>
          <h3 style={{fontSize: '1rem', textAlign: 'center', fontWeight: 'bold', marginTop: '5px'}}>Online Hosting Partner</h3>
          <p>Advanced courses to top performers worth 75000 and 10,000 Unstop Coins</p>
          </div>
          </div><div style={{marginLeft: 'auto', marginRight: 'auto', marginTop: '2%'}} className='row'>
          <div className=' col-sm-12 col-lg-6 col-md-6' >
          <img src='https://media-exp1.licdn.com/dms/image/C4E0BAQHb6nnl_TKBCQ/company-logo_200_200/0/1619435883336?e=1667433600&v=beta&t=3jRYKdr-Sc_tA2Fu5nncoEpo6F4uAKp5N27_oh75mfw' style={{width: '200px', height: '200px', borderRadius: '50%', margin: 'auto'}}/>
          <h3 style={{fontSize: '1rem', textAlign: 'center', fontWeight: 'bold',marginTop: '5px'}}>Career Partner</h3>
          
          </div>
          <div  className=' col-sm-12 col-lg-6 col-md-6' >
          <img src='https://www.metvy.com/icons/ic_launcher.png' style={{width: '200px', height: '200px', borderRadius: '50%', margin: 'auto'}}/>
          <h3 style={{fontSize: '1rem', textAlign: 'center', fontWeight: 'bold', marginTop: '5px'}}>Associate Partner</h3>
          <p>Premium courses to top performers and discount coupons for others</p>
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
                        <img src="https://media-exp1.licdn.com/dms/image/C4E03AQHEM643FlAKSw/profile-displayphoto-shrink_800_800/0/1645354799226?e=1664409600&v=beta&t=spqTBfZuas4pwVzUZP4gwCvfYuyRmlsZ8vJGIX5_Jiw"
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
                        <img src="https://media-exp1.licdn.com/dms/image/C5603AQHCfRB_npd_Yg/profile-displayphoto-shrink_800_800/0/1610271787756?e=1664409600&v=beta&t=AXEU-SCoS3DYzGyNc0s5AF1Nh-XeZUUjKwMxjmtl7TU"
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
