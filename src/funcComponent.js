import {useState} from 'react'

import { Form,Button,Table } from "react-bootstrap"
function Product()
{
 //typeOfData [stateData,stateUpdateFunction]=useState(initialData)
  
   const [products,setProduct]=useState([]);
  
    const add = (event)=>
    {
        event.preventDefault();
//    console.log(event.target.product_name.value);
const formData=event.target;
    const newProduct ={
        product_name:formData.product_name.value , 
        price : formData.price.value ,
        qty : Number(formData.qty.value) 
    }
    // console.log(newProduct);
    //add s new product in product array
    setProduct([...products,newProduct]);
    // console.log(products);
    }

    //increment quantity value by 1
    const increQty=(e)=>
    {
     //console.log(e.target.value);
     const indexOfArray=e.target.value;
     products[indexOfArray].qty=products[indexOfArray].qty+1;
     setProduct([...products])
    }
     //derement quantity value by 1
     const decreQty=(e)=>
     {
        const indexOfArray=e.target.value;
        products[indexOfArray].qty=products[indexOfArray].qty-1;
        setProduct([...products])
     }
    return(
        <>
        <div>
            <Form onSubmit={add}>
  <Form.Group className="mb-3" controlId="formBasicProductName">
    <Form.Label>Product Name:</Form.Label>
    <Form.Control type="text" placeholder="Enter the product name" name="product_name"/>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPrice">
    <Form.Label>Price:</Form.Label>
    <Form.Control type="number" placeholder="Price in Rupees" name="price"/>
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicQty">
    <Form.Label>Quantity:</Form.Label>
    <Form.Control type="number" placeholder="Enter the Quantity" name="qty"/>
  </Form.Group>
  <Button variant="primary" type="submit">
   Add to Inventory
  </Button>
</Form>
        </div>
        <div>
        <Table striped bordered hover variant="dark">
  <thead>
    <tr>
      <th>Index</th>
      <th>Product Name</th>
      <th>Price</th>
      <th>Quantity</th>
      <th>Options</th>
    </tr>
  </thead>
  <tbody>
      {
          products.map((item,index)=>
          {
              return(
                <tr key={index}>
                <td>{index}</td>
                <td>{item.product_name}</td>
                <td>{item.price}</td>
                <td>{item.qty}</td>
                <td>
                    <Button variant='success' onClick={(e)=>increQty(e)} value={index}>+</Button>
                    <Button variant="danger" onClick={(e)=>decreQty(e)} value={index}>-</Button>
                </td>

              </tr>
              )
            
          }
        )
      }
  </tbody>
</Table>
        </div>
        </>
    )
}
export default Product;