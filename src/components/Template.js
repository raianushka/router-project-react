import React from "react";
import SignUpForm from "./SignUpForm";
import LoginForm from "./LoginForm";
import { FcGoogle } from "react-icons/fc"

const Template=({title,  desc1, desc2, image, formtype, setIsLoggedIn})=>{
    return(
        <div className="flex w-11/12 h-full max-w-[1160px] py-12 mx-auto justify-between">

            <div className="w-11/12 max-w-[450px]">
                <h1 className="text-white text-[1.875rem] font-semibold leading-[2.375rem]">{title}</h1>
                <p className="text=[1.125rem] leading-[1.625rem]">
                    <span className="text-slate-100 text-base">{desc1}</span>
                    <br/>
                    <span className="text-blue-200 italic text-sm">{desc2}</span>  
                </p>  

                {formtype === "signup" ?
                (<SignUpForm setIsLoggedIn={setIsLoggedIn}/>):
                (<LoginForm setIsLoggedIn={setIsLoggedIn}/>)}

                <div className="flex w-full items-center my-2 gap-x-2">
                    <div className="h-[1px] bg-slate-600 w-full" ></div>
                    <p className="text-slate-600 font-medium leading-[1.375rem]">
                        OR</p>
                    <div className="h-[1px] w-full bg-slate-600"></div>
                </div>
                
                <button className="w-full flex justify-center items-center rounded-[8px] font-medium text-slate-100 border border-slate-700 px-[12px] py-[8px] gap-x-2 mt-2">
                <FcGoogle/>
                    <p >
                         Sign Up with Google
                    </p>
                </button>

            </div>

            <div className="relative w-[11/12] max-w-[450px] ">
                
                <div width="558" height="504" className="w-96 h-96 bg-gradient-to-b from-white to-red-600 ...]"></div>

                <img src={image} 
                 loading="lazy"
                  alt="" 
                  width="558"
                  height="490"
                  className="absolute -top-4 right-4 w-96 h-96"
                  />   
              
            </div>

        </div>
    )
}

export default Template