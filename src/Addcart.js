import React, { useContext } from 'react'
import {Context} from './Context'
import {useState} from 'react'

import Added from './Added'
export default function Addcart() {
  let context = useContext(Context)
  const[y , setY]= useState(0)
  return (
    <div style={{display: 'flex', flexWrap: 'wrap' , justifyContent: 'space-around'}}>
    
      {context.data.map((item) => {
        if (item.status === "added") {
          return <Added name={item.name} link={item.image} price={item.price} y={y} setY={setY} />;
        }
      })}
    </div>
  );
}
