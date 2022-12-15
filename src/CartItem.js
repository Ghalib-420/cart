import React from "react";

class CartItem extends React.Component{


    

   


    render(){
        console.log('this.props',this.props);
        const {price,title,qty}=this.props.product;
        return(
            <div className="cart-item"> 
                <div className="left-block" >
                    <img  style={style.image}  />

                </div>
                <div className="right-block">
<div style={ {fontSize: 25} }>title:- {title}</div>
<div style={{color:'#777'}}>price:- {price}</div>
<div style={{color:'#777'}}>qty:- {qty}</div>
<div className="cart-item-action">

    {/* Buttons */}
    <img 
    style={style.buttons}  
    alt="increase" 
    className="action-icon" 
    src="https://cdn-icons-png.flaticon.com/512/992/992651.png"
    onClick={()=>this.props.onIncreaseQty(this.props.product)}
    
    />
    <img 
    style={style.buttons}  
    alt="decrease" 
    className="action-icon" 
    src="https://cdn-icons-png.flaticon.com/512/992/992683.png"
    onClick={()=>this.props.onDecreaseQty(this.props.product)}
    />
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