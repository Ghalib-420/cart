import React from "react";

class CartItem extends React.Component{

constructor (){
    super();
    this.state={
        price:999,
        title:'Phone',
        qty:'5',
        img:''


    }
}
    

   increaseQuantity = () =>{
        console.log('this',this);
    }
    


    render(){
        const {price,title,qty}=this.state;
        return(
            <div className="cart-item"> 
                <div className="left-block" >
                    <img  style={style.image}  />

                </div>
                <div className="right-block">
<div style={ {fontSize: 25} }>{title}</div>
<div style={{color:'#777'}}>{price}</div>
<div style={{color:'#777'}}>{qty}</div>
<div className="cart-item-action">

    {/* Buttons */}
    <img 
    style={style.buttons}  
    alt="increase" 
    className="action-icon" 
    src="https://cdn-icons-png.flaticon.com/512/992/992651.png"
    onClick={this.increaseQuantity}
    
    />
    <img style={style.buttons}  alt="decrease" className="action-icon" src="https://cdn-icons-png.flaticon.com/512/992/992683.png"/>
    <img style={style.buttons}  alt="delete" className="action-icon" src="https://cdn-icons-png.flaticon.com/512/1214/1214428.png"/>

</div>

                </div>
                


            </div>

        );
    }

}


const style={
    image:{
        height:110,
        width:110,
        borderRadius:4,
        background:'#ccc'
    },
    buttons:{
        padding:5,
        height:20,
        width:20,

    }
}


export default CartItem;