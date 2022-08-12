import React from "react";
import menu from "./Image/menu.png";
import home from "./Image/home.png";
import contact from "./Image/contact.png";
import info from "./Image/info.png";
import { useState } from "react";


export default function Home() {
    let massive = [home, contact, info];
 const [n,setN]= useState(0)
 let photo=massive[n];

 function changeright(){
    if(n==2){
     return  setN(0)
    }
 }
 function changeleft(){
    if(n==0){
        return setN(2)
    }
 }

  return (
    <>
      <div className="homepage" style={{ display: "flex" }}>
        <button
          className="arrow"
          onClick={() => {
            setN(n - 1);
            changeleft();
          }}
        >
          {" "}
          LEFT{" "}
        </button>
        <img className="slideimg" src={photo}></img>
        <button
          className="arrow"
          onClick={() => {
            setN(n + 1);
            changeright();
          }}
        >
          {" "}
          RIGHT{" "}
        </button>
        <div className="inslider">
          Register and get 15% discount on your first order
          <p>Register</p>
        </div>
      </div>
      <div className="popularproducts">
        <p>Popular Right Now</p>
        <button>See All</button>
      </div>
    </>
  );
}
