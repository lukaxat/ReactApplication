import React, { useContext } from 'react'
import { Context } from './Context'
import Card from './Card'

export default function Menu() {
let context = useContext(Context)

  return (
    
      <div style={{display: 'flex', flexWrap: 'wrap' , gap: '10%' , }}>
        {context.data.map((item) => {
          return <Card name={item.name} link={item.image} price={item.price} />;
        })}
      </div>
    
  );
}
