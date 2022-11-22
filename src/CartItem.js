import React from "react";

class CartItem extends React.Component{
    render(){
        return(
            <div className="cart-item">
                <div className="left-block" >
                    <img  style={style.image}  />

                </div>
                <div className="right-block">
<div style={ {fontSize: 25} }>Watch</div>
<div style={{color:'#777'}}>Rs:4999</div>
<div style={{color:'#777'}}>Qnt:1</div>
<div className="cart-item-action"></div>

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
    }
}


export default CartItem;