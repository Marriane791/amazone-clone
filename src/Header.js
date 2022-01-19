import React from 'react'
import styled from 'styled-components'
import SearchIcon from '@mui/icons-material/Search';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import {Link} from "react-router-dom"
function Header() {
    return (
        <div>
            <HeaderFull>
            <HeaderLogo>
                <Link to= "/">
                <img src='/images/amazon-logo3.jpg' alt='amazonLogo'/>
                </Link>
             </HeaderLogo>

             <HeaderOptionLocation>
                  <LocationOnIcon/>
               </HeaderOptionLocation>

           <HeaderOptionAdress>
             <HeaderOptionLineOne>Hello</HeaderOptionLineOne>
             <HeaderOptionLineTwo>Select Your Adress</HeaderOptionLineTwo>
           </HeaderOptionAdress>

           <HeaderSearch>
               <HeaderSearchInput type='text' />
               <HeaderSearchIcon>
                   <SearchIcon/>
               </HeaderSearchIcon>
           </HeaderSearch>

           <HeaderNavItems>
               <HeaderOption>
                   <OptionLineOne>Hello,  Marrie</OptionLineOne>
                   <OptionLineTwo>Account & Lists</OptionLineTwo>
               </HeaderOption>
               <HeaderOption>
                   <OptionLineOne>Returns</OptionLineOne>
                   <OptionLineTwo>Orders</OptionLineTwo>
               </HeaderOption>

               <HeaderOptionCart>
                  <Link to="/cart">
                   <ShoppingBasketIcon />
                   <CartCount>5</CartCount>
                   </Link>

               </HeaderOptionCart>
               

           </HeaderNavItems>

          </HeaderFull>
        </div>
    )
}

export default Header


const HeaderFull = styled.div`
height:60px;
background-color:#0F1111;
color:white;
display:flex;
align-items:center;
justify-content:space-between;
`
const HeaderLogo = styled.div `
img {
    width:100px;
}

`
const HeaderOptionAdress = styled.div`
padding-left:9px;
`
const HeaderOptionLocation = styled.div`

`

const HeaderOptionLineOne = styled.div`
 

`
const HeaderOptionLineTwo = styled.div`

`
const HeaderSearch = styled.div`
display:flex;
flex-grow:1;
height:30px;
border-radius:4px;
overflow:hiddem;
margin-left:4px;
background-color:white;
:focus-within
{
    box-shadow: 0 0 0 3px #F90;
}
`
const HeaderSearchInput = styled.input`
flex-grow:1;
border:0px;
:focus{
    outline:none;
}
`
const HeaderSearchIcon = styled.div`
background-color:#febd69;
color:black;
width:45px:
display:flex;
justify-content:center;
align-items:center;
`
const HeaderNavItems = styled.div`
display:flex;
`

const HeaderOption = styled.div`
padding:10px 9px 10px 9px;

`
const OptionLineOne = styled.div`
`
const OptionLineTwo = styled.div`
font-weight:700;
`
const HeaderOptionCart = styled.div`
display:flex;
a {
    display:flex;
    align-items:center;
    padding-right:9px;
    color:white;
    text-decoration:none;
}

`
const CartCount = styled.div`
padding-left:4px;
`
