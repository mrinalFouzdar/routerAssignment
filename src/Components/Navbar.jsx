import React from 'react'
import { Link } from 'react-router-dom'
import styled from "styled-components"

const Div = styled.div`
display:flex ;
/* flex-direction:row-reverse; */
align-items:center;
background-color:darkgrey ;

`;
export default function Navbar() {
  return (
    <Div>
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>

    </Div>
  )
}
