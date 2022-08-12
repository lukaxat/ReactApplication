import "./App.css";
import Header from "./Header";
import Home from "./Home";
import Menu from "./Menu";
import ContactUs from "./ContactUs";
import Cart from "./Cart";
import Addcart from "./Addcart";
import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import { Context } from "./Context";
import "./Reset.css";

function App() {
  let data = require("./data.json");
  const [food, setFood] = useState(data);
  const [number , setNumber] = useState(0)
  function changestat(name) {
    food.map((item) => {
      if (item.name === name) {
        item.status = "added";
      }
    });
    setFood(food);
    setNumber(number + 1);

  }
   function changeRemove(name) {
     food.map((item) => {
       if (item.name === name) {
         item.status = "add to card";
       }
     });
     setFood(food);
     setNumber(number - 1);
     
   }

  return (
    <Context.Provider value={{ data: food, addtocard: changestat , delete : changeRemove , number : number}}>
      <div className="container">
        <Routes>
          <Route path="/" element={<Header />}>
            <Route index element={<Home />} />
            <Route path="menu" element={<Menu />} />
            <Route path="ContactUs" element={<ContactUs />} />
            <Route path="cart" element={<Cart />} />
            <Route path="addcart" element={<Addcart />} />
          </Route>
        </Routes>
      </div>
    </Context.Provider>
  );
}

export default App;
