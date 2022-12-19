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
    this.db= firebase.firestore();
}

componentDidMount(){
 
  this.db.collection('products')
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
// products[index].Qty +=1;

// this.setState({
// products:products
// })
const docRef=this.db.collection('products').doc(products[index].id);

docRef.update({
  Qty:products[index].Qty +1
})
.then(()=>{
  console.log('Updated Successfully');
})
.catch((error)=>{
  console.log('Error',error);

})

};


 handleDecreaseQty =(product) =>{
    const {products}=this.state;
    const index =products.indexOf(product); 
    // if(products[index].Qty > 0){
    // products[index].Qty -= 1;
    // }
//  this.setState({
//      products:products
//  })
const docRef=this.db.collection('products').doc(products[index].id);

if(products[index].Qty>0){
  docRef.update({
    Qty:products[index].Qty -1
  })
  .then(()=>{
    console.log('Updated Successfully');
  })
  .catch((error)=>{
    console.log('Error',error);
  
  })
}
 
     };

handleDelete=(id) =>{
const {products}=this.state;
// const item =products.filter((item)=>item.id !== id); //{[array after deletion]}
// this.setState({
// products:item
// });

const docRef=this.db.collection('products').doc(id);
docRef
.delete()
.then(()=>{
  console.log('Deleted Successfully');
})
.catch((error)=>{
  console.log('Error',error);

})

};

getCartItemCount = () =>{
  const {products}=this.state;
let count=0;


products.forEach((product) =>{
  count += product.Qty;

})

return count;

};


getCartTotalValue =()=>{
  const {products}=this.state;
let totalSum=0;
products.map((product) =>{
  totalSum = totalSum + product.Qty *product.Price;
  return totalSum;

})
return totalSum;
}

// addProduct =()=>{
//   this.db.collection('products')
//   .add({
//     Title:'Washing Machine',
//     Price:1299,
//     Qty:1,
//     Img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSd3qhwQ6QPoYcT-hkuLf8FEib_eTbXT30-pzbOSefELi0uRMlwY6n025LZSCUs9Zoa0vU&usqp=CAU'
//   })
//   .then((docRef)=>{
//     console.log("Product Added",docRef);

//   })
//   .catch((error)=>{
//     console.log(error);
//   })

// }




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
      {/* <div><button style={{padding:20,FontSize:20}} onClick={this.addProduct}>Add Product</button></div>*/}
    </div>
  );

  }
}

export default App;
