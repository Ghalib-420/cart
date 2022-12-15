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
        price:5999,
        title:'Phone',
        qty:0,
        img:'https://media.istockphoto.com/id/1319856179/photo/still-life-of-old-telephone-pocket-watch-book-andd-glasses-on-wooden-table.jpg?s=612x612&w=is&k=20&c=8KxXVfq2wXP2504GDHwjWwspaMmL_r8Xy70J_al5o5g=',
        id:1
      },
      {
        price:299,
        title:'Watch',
        qty:0,
        img:'https://images.unsplash.com/photo-1524805444758-089113d48a6d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80',
        id:2
      },
      {
        price:20,
        title:'Pen',
        qty:0,
        img:'https://images.unsplash.com/photo-1518674660708-0e2c0473e68e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
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


getCartTotalValue =()=>{
  const {products}=this.state;
let totalSum=0;
products.map((product) =>{
  totalSum = totalSum + product.qty *product.price;
})

return totalSum;
}




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
      <div style={{padding:10,fontSize:30}}>Total: {this.getCartTotalValue()}</div>
    </div>
  );

  }
}

export default App;
