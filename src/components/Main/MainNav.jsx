import React from 'react'
import styled from 'styled-components'
import MainLogo from "../../assets/logos.png";
import { ReactComponent as News } from "../../assets/news.svg";
import { ReactComponent as Cart } from "../../assets/cart.svg";
import { ReactComponent as Pin } from "../../assets/pin.svg";
import { ReactComponent as ArrowDown } from "../../assets/Arrow-Down.svg";

let MainHeaderDiv = styled.div`
  box-sizing: border-box;
  position: absolute;
  height: 60px;
  left: 0px;
  right: 0px;
  top: 0px;
  background: #FFFFFF;
  border-bottom: 1px solid #EEEEEE;
  display: flex;
  justify-items: center;
  align-items: center;
`
let MainLocation = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 0px;
  gap: 2px;

  position: absolute;
  left: 31%;
  top: calc(50% - 20px/2);

`
let LocationText = styled.p`
font-family: 'Pretendard';
font-style: normal;
font-weight: 500;
font-size: 15px;
color: #424242;
`
let LogoImg = styled.img`
  position: absolute;
  width: 72px;
  height: 32px;
  left: calc(50% - 72px/2);
  top: calc(50% - 32px/2);
`;
let NewsStyle = styled.svg`
  position: absolute;
  width: 24px;
  height: 24px;
  right: 652px;
  top: calc(50% - 24px/2);
`
let CartStyle = styled.svg`
  position: absolute;
  width: 24px;
  height: 24px;
  right: 612px;
  top: calc(50% - 24px/2);
`

function MainNav() {
  return (
    <MainHeaderDiv>
      <MainLocation>
        <Pin/>
        <LocationText>서울특별시 가양동</LocationText>
        <ArrowDown/>
      </MainLocation>
      <LogoImg src={MainLogo} />
      <NewsStyle>
       <News/>
      </NewsStyle>
      <CartStyle>
        <Cart/>
      </CartStyle>
    </MainHeaderDiv>
  )
}

export default MainNav