import React from 'react'
import { useParams } from 'react-router-dom'

export default function ProductsDeatails() {
  const {id}=useParams();
  const [product,setProduct]=React.useState(null)
  // console.log(id);
  React.useEffect(()=>{
    fetch(`http://localhost:3001/products/${id}`)
    .then((res)=>res.json())
    .then((res)=>{
      console.log(res);
      setProduct(res)
    })
    .catch((err)=>console.log(err))
    .finally(setProduct(null))

  },[])
  return product?(
    <div>
      <h1>Products Details</h1>
      <hr />
      <h3>{product.name}</h3>
      <h3>{product.id}</h3>
      <h3>{product.price}</h3>
    </div>
  ):(<div>
    <h1>Products is not avilable</h1>
  </div>)
}
