import React from 'react';

import CartItem from './CartItem';
class Cart extends React.Component{

    constructor (){
        super();
        this.state={
           products:[
          {
            price:999,
            title:'Phone',
            qty:2,
            img:'',
            id:1
          },
          {
            price:99,
            title:'Watch',
            qty:5,
            img:'',
            id:2
          },
          {
            price:9,
            title:'Pen',
            qty:4,
            img:'',
            id:3
          },
          
            
           ]
    
    
        }
    }

render(){
    const {products}=this.state;
return(
    <div className='cart'>
        
        {products.map((product) =>{
            return <CartItem  
            product={product} 
            key={product.id} /> 
        })}
        
    </div>
);

}

}

export default Cart;