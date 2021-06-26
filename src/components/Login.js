import React from 'react'
import styled from 'styled-components'
function Login(props) {
    return (
        <Container>
            <Content>
                <CTA>
                    <CTALogoOne src="/images/cta-logo-one.svg" alt=" " />
                   <SignUpWrapper>
                   <SignUp>Get All There</SignUp>
                   </SignUpWrapper>
                    
                    <Description>
                        Get Premier Access to Raya and the Last Dragon for an additional fee width: width
                        a Disney+ Subscription.As of 03/26/21, the price of Disney+ and The Disney Bundle will
                        Increase By $21.
                    </Description>
                    <CTALogoTwo src="/images/cta-logo-two.png" alt=" "/>
                </CTA>
            </Content>
        </Container>
    )
}

const Container=styled.section`
 overflow:hidden;
 display:flex;
 flex-direction:column;
 text-align:center;
 height:100vh;
 
`

const Content=styled.div`
  margin-bottom:100vw;
  width:100%;
  position:relative;
  min-height:100vh;
  box-sizing:border-box;
  display:flex;
  justify-content:center;
  align-items:center;
  flex-direction:column;
  padding:80px 40px;
  height:100%;
 background-image:url("/images/login-background.jpg");
 background-position:top;
 background-repeat:no-repeat;
 background-size:cover;
 z-index:-1;
`

const CTA=styled.div`
  margin-bottom:2vw;
  text-align:center;
`

const CTALogoOne=styled.img`
 margin:20px auto;
 max-width:600px;
 min-height:1px;
 display:block;
 width:100%;
 margin-bottom:30px;
`

const SignUpWrapper=styled.div`
 width:100%;
 max-width:600px;
 padding:16.5px 0px;
   border:1px solid transparent;
   border-radius:4px;
   background-color:#0063e5;
  
   @media (min-width:768px){
     margin-left:20px;
   }
`
const SignUp=styled.a`
  font-weight:bold;
  color:#f9f9f9;
  letter-spacing:1.5px;
  font-size:20px;
`

const Description=styled.p`
margin-top:40px;
color:hsla(0,01,95.31,1);
font-size:11px;
margin-left:24px;
margin-right:24px;
line-height:1.5;
letter-spacing:1.5px;
margin-bottom:20px;
max-width:600px;

`
const CTALogoTwo=styled.img`
  max-width:600px;
  margin-bottom:20px;
  display:inline-block;
  vertical-align:bottom;
  width:100%;
`


export default Login


