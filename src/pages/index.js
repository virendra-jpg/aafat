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
            <img src='https://www.highereducationdigest.com/wp-content/uploads/2020/07/Elearnmarkets.jpg' style={{width: '200px', height: '200px', borderRadius: '50%', margin: 'auto'}}/>
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
          <img src='data:image/png;base64,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' style={{width: '200px', height: '200px', borderRadius: '50%', margin: 'auto'}}/>
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
