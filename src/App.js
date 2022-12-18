import React from 'react';
//import CartItem from './CartItem';
import Cart from './Cart'
import Navbar from './Navbar';
import firebase from 'firebase/compat/app';
import 'firebase/firestore';
import {} from 'firebase/compat/firestore';

class App extends  React.Component {



  constructor (){
    super();
    this.state={
       products:[],
       loding:true
    }
}

componentDidMount(){
  firebase
  .firestore()
  .collection('products')
  .onSnapshot((snapshot)=>{
    const products=  snapshot.docs.map((doc)=>{
      const data=doc.data();
      data['id']=doc.id;
      return data;
  
  
      })
  this.setState({
    products,
    loding:false
    })
  
    })

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
  totalSum = totalSum + product.Qty *product.Price;
})

return totalSum;
}




  render(){
const {products,loding}=this.state;

  return (
    <div className="App">
    <Navbar count ={this.getCartItemCount()}/>
      <Cart
       products={products} 
        key={products.id} 
       onDecreaseQty={this.handleDecreaseQty}
       onIncreaseQty={this.handleIncreaseQty}
       onDelete={this.handleDelete}

      />
    {loding && <h1>Lodding products....</h1>}
      <div style={{padding:10,fontSize:30}}>Total: {this.getCartTotalValue()}</div>
    </div>
  );

  }
}

export default App;
