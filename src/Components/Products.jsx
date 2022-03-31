import React from 'react'
import { Link } from 'react-router-dom'

export default function Products() {
    const [products,setProducts]=React.useState([])

    const getData=()=>{
        fetch(`http://localhost:3001/products`)
        .then((res)=>res.json())
        .then((res)=>{
            console.log(res)
            setProducts(res)
        })
    }
    React.useEffect(()=>{
     getData()
    },[])
  return (
    <div>
        {
            products.map((item)=>(
                <div key={item.id}>
                <div >{item.name}</div>
                <div> <Link to={`/products_details/${item.id}`}>More Details...</Link> </div>
                </div>
            ))
        }
    </div>
  )
}
