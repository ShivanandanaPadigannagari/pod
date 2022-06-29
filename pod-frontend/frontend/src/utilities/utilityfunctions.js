import jwt_decode from "jwt-decode";
import { useState } from "react";
import { getEmployeeByEmail } from "../apicalls";

export const isAuthenticated = ()=>{
    if(localStorage.getItem("user")){
        const user = JSON.parse(localStorage.getItem("user"));
        const user_decoded = jwt_decode(user).sub;

        return user_decoded;
    }
    else{
        return false;
    }
}

export const isAuthorized = ()=>{
     
     if(localStorage.getItem("user")){
        const usertok = JSON.parse(localStorage.getItem("user"));
        const user_decoded = jwt_decode(usertok).sub;
                          
        getEmployeeByEmail(user_decoded).then((resp) => {
            if(resp.role == "Employer"){
                localStorage.setItem("isAuthenticated",true);
                
            }
           
        })
        const val = localStorage.getItem("isAuthenticated")?JSON.parse(localStorage.getItem("isAuthenticated")):false;
        
        return val;
    }
    else{
        return false;
    }
}

export const delay = (ms) => new Promise(
    resolve => setTimeout(resolve, ms)
  );