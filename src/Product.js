import React from 'react'
import styled from 'styled-components'
function Product() {
    return (
        <Producto>
            <Title>Apple iPhone 12 Pro Max, 128GB, Gold - Fully Unlocked (Renewed)</Title>
            <Price>Price:$955.00</Price>
            <Rating>⭐⭐⭐⭐⭐</Rating>
            <Image src='/images/productimages/iphone12.jpg'/>
            <AddSection>
            <AddToCartButton>Add to cart</AddToCartButton>
            </AddSection>
        </Producto>
    )
}

export default Product

const Producto = styled.div`
background-color:white;
z-index:100;
flex:1; 
padding:20px;
margin:10px;
max-height:400px;
display:flex;
flex-direction:column;
`
const Title = styled.span`
font-weight:500;
margin-top:3px;
`
const Price = styled.span``

const Rating = styled.div``

const Image = styled.img`
max-height:200px;
object-fit:contain;
`
const AddSection = styled.div`
margin-top:10px;
display:grid;
place-items:center;
`

const AddToCartButton = styled.button`
width:100px;
height:30px;
background-color:#f0c14b;
border:2px solid #a88734;
border-radius:2px;
place-items:center;
`