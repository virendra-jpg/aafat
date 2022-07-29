import React from 'react';
import Navbar from '../components/Navbar';
import 'bootstrap';
import '../pages/style.css';


import Box from '@mui/material/Box';

import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';

import Button from '@mui/material/Button';

import { useState } from 'react';
import styles from './style.css';





const Home = () => {
return (
    
        
       
    
        <div>
          <Navbar />


        
        <div className='bg'>
         <div  style={{margin: 'auto', marginBottom: '5%'}} className='row'>

          
        <div style={{width: "50%"}} className='feature-box col-lg-6 col-md-6 col-sm-12'> 
        <Typography style={{ marginTop: '10%' , alignSelf:'center',fontStretch:'extra-expanded',color:'#00008B', fontSize:45, fontWeight:'bolder',paddingTop:0,paddingLeft:'5vw', textAlign:'left', display:{xs:'flex'},fontStyle:'italic'}}>CAMPUS AMBASSADOR PROGRAM</Typography>
    <Typography style={{textAlign:'center',fontWeight:'bold',marginTop:'7vh',marginLeft:0,fontSize:25}}>Be the Representative of your Campus</Typography>
        </div>
        <div style={{marginRight: '0',  }} className='container feature-box col-lg-6 col-md-6 col-sm-12'>
          <img style={{width: '375px', marginTop: '10%'}} src='./user1.png' />
        </div> 
        
       
    </div>
    <a href='/register' ><button  style={{marginTop: '3%', marginBottom: '3%', marginLeft: '50px', width: '150px', height: '50px', fontWeight: 'bold'}} type="button" className="btn btn-primary">Apply Now!</button></a>
    


  <section id='why' style={{textAlign: 'center'}}>
    

    <img style={{ height: '200px', width: "200px"}} src="./p2e1.png" />
    <article className="box">
        <header>
          <h1 style={{margin: '2%', fontWeight: 'bold'}} >WHY BECOME CA?</h1>
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

<img style={{ height: '200px', width: "200px"}} src="./p2e3.png" />







<article className="box">
        <header>
          <h1 style={{margin: '2%', fontWeight: 'bold'}} >Responsiblities</h1>
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
            <li>
              <b>Publicity:</b> Displaying posters of Udghosh 2021 within 2-3
              days of receiving them , on college bulletins and notice boards.
            </li>
            <li>
              <b>Organize Events:</b> Organizing workshops &amp; events in your
              college or city under the guidance of UDGHOSH, IIT KANPUR
            </li>
            <li>
              <b>Social Media:</b> Publicising the events of Udghosh on
              various Social media platforms like Facebook, Twitter, Instagram
              by sharing the posts of Udghosh
            </li>
          </ul>
        </div>
      </article>


</section>




<section id='perks' style={{textAlign: 'center', margin: '3%'}}>
    

    <img style={{ height: '200px', width: "200px"}} src="./p2e2.png" />
    <article className="box">
        <header>
          <h1 style={{margin: '2%', fontWeight: 'bold'}} >Perks</h1>
        </header>
        <div className="comtent">
        <p style={{fontSize: "20px" , letterSpacing: "2px", color: "white"}}>
        Every CAs will be awarded a Certificate Of Organization by Udghosh, IIT KANPUR recognizing their work
For the fest they will get free event passes.
And ofCourse, a Great CV point for their carrer development
            </p>
        </div>
      </article>
    
  </section>

  <section id='perks' style={{textAlign: 'center', margin: '3%'}}>
    
  <i style={{ height: '200px', width: "200px"}} class="bi bi-person-lines-fill"></i>
    
    <article className="box">
        
        <div className='row'>
          <div className='feature-box col-lg-6 col-md-6 col-sm-12' >
          


          </div>

          <div></div>
        
        </div>
      </article>
    
  </section>

</div>


    </div>



        
      );
      };



export default Home;
