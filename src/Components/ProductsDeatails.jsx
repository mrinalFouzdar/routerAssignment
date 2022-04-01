import React from 'react'
import { useParams } from 'react-router-dom'

export default function ProductsDeatails() {
  const {id}=useParams();
  const [product,setProduct]=React.useState(null)
  const [err,setErr]=React.useState(false)
  // console.log(id);
  React.useEffect(()=>{
    fetch(`http://localhost:3001/products/${id}`)
    .then((res)=>res.json())
    .then((res)=>{
      console.log(res);
      if(Object.keys(res).length===0){
        setErr(true)
      }else{

        setProduct(res)
      }
    })
    .catch((err)=>{
      console.log("errr12")
      setErr(true)})

  },[])
  console.log("err" , err)
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
