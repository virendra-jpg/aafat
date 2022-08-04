import { useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, logout} from "./Firebase";
import React, { useEffect } from "react";
import "../index.css";
import "react-step-progress-bar/styles.css";
import { ProgressBar, Step } from "react-step-progress-bar";
import "./style.css";



export default function VerificationScreen() {
  const [user, loading] = useAuthState(auth);

  const text = <i class="material-icons">star</i>;
  let mul_text = "";
  mul_text = text + text;

  const navigate = useNavigate();
  useEffect(() => {
    if (loading) return;
    if (!user) return navigate("/");

  }, [user, loading]);
  const signOut = () => {
    logout();
    navigate("/")
  }
 

  return (
    <>
      <div >
        <div className="basis-1/4">
          {/* <Sidebar name ={data6} collage={data1} /> */}
        </div>
        <div >
          
          <div className="verification_bg">
            
          <li>
              <a
                onClick={signOut}
                className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <svg
                  aria-hidden="true"
                  className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span className="flex-1 ml-3 whitespace-nowrap" onClick={signOut}>Sign Out</span>
              </a>
            </li>
 <br/>
 <br/>
 <br/>

<div className="verify">
 <h1>Thankyou for registering, we will contact you soon
  for the next step.</h1>
 </div>
 <br/>
 <br/>
 <br/>
 <br/>
 <br/>

 
 <ProgressBar
        percent={50}
        filledBackground="linear-gradient(to right, #fefb72, #f0bb31)"
    
      >
                <Step transition="scale">
          {({ accomplished }) => (
            <div>
                
            <img 
              style={{ filter: `grayscale(${accomplished ? 0 : 80}%) ` }}
              width="30"
              src='./logo.png'
            
            />
            <div>

            {/* <text style={{ margin: 10}} >Registered</text> */}
            </div>
            </div>
            
          )}
  
        </Step>
        <Step transition="scale">
          {({ accomplished }) => (
            <div>
            <img
              style={{ filter: `grayscale(${accomplished ? 0 : 80}%)` }}
              width="30"
              src="./logo.png"
            />
            <div>

            <text> Registered </text>
            </div>
            </div>
          )}
        </Step>
        <Step transition="scale">
          {({ accomplished }) => (
            <div>
            <img
              style={{ filter: `grayscale(${accomplished ? 0 : 80}%)` }}
              width="30"
              src="./logo.png"
            />

            </div>
          )}
        </Step>
      </ProgressBar>

 <div className="verify">
 <h1>You are almost there!!</h1>
 </div>
 <br/>
 <br/>
 <br/>
 <br/>
 <br/>
 <br/>
 <br/>
      <ProgressBar
        percent={100}
        filledBackground="linear-gradient(to right, rgb(93, 135, 135), rgb(44, 100, 100))"
      ></ProgressBar>
          </div>
        </div>

      </div>
    </>
  );
}
