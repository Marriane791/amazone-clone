import React from 'react'
import styled from 'styled-components'
import Product from './Product'
function Home() {
    return (
        <HomeBody>
            <Banner>
                <img src='/images/banner/realamazonbanner1.jpg' alt='amazon banner' />
            </Banner>
            <Content>
                <Product />
                <Product />
                <Product />
                <Product />
            </Content>
        </HomeBody>
    )
}

export default Home
const HomeBody = styled.div``

const Banner = styled.div`
img 
{
    width:1305px;
}
min-height:600px;
background-position:center;
background-size:cover;
z-index:1;  
mask-image:linear-gradient(to bottom, rgba(0, 0, 0, 1),rgba(0, 0, 0, 0));
`

const Content = styled.div`
padding-left:15px;
padding-right:15px;
margin-top:-350px;
display:flex;
`