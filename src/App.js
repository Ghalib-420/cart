import React from 'react';
//import CartItem from './CartItem';
import Cart from './Cart'
import Navbar from './Navbar';

class App extends  React.Component {



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
      }
      
        
       ]


    }
}



handleIncreaseQty =(product) =>{
const {products}=this.state;
const index =products.indexOf(product); 
products[index].qty +=1;

this.setState({
products:products
})

};


 handleDecreaseQty =(product) =>{
    const {products}=this.state;
    const index =products.indexOf(product); 
    if(products[index].qty > 0){
    products[index].qty -= 1;
    }
 this.setState({
     products:products
 })
 
     };

handleDelete=(id) =>{
const {products}=this.state;
const item =products.filter((item)=>item.id != id); //{[array after deletion]}
this.setState({
products:item
});

};

getCartItemCount = () =>{
  const {products}=this.state;
let count=0;


products.forEach((product) =>{
  count += product.qty;

})

return count;

};



  render(){
const {products}=this.state;

  return (
    <div className="App">
    <Navbar count ={this.getCartItemCount()}/>
      <Cart
       products={products} 
      //  key={products.id} 
       onDecreaseQty={this.handleDecreaseQty}
       onIncreaseQty={this.handleIncreaseQty}
       onDelete={this.handleDelete}

      />
    </div>
  );

  }
}

export default App;
