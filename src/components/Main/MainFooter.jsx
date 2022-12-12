import React from 'react'
import styled from 'styled-components'
import { ReactComponent as HomeIcon } from "../../assets/home-active.svg";
import { ReactComponent as SearchIcon } from "../../assets/more-disablecopy.svg";
import { ReactComponent as MarketIcon } from "../../assets/mymarket-disable.svg";
import { ReactComponent as MoreIcon } from "../../assets/more-disable.svg";


let MainFooterDiv = styled.div`
  display: fixed;
  /* justify-content: center; */
  /* justify-items: center; */
  /* align-items: center; */
  flex-direction: row;
  align-items: flex-start;
  padding: 0px;
  gap: 4px;

  position: absolute;
  height: 56px;
  left: 0px;
  right: 0px;
  bottom: 0px;
  background: #FFFFFF;
`
let FooterNav = styled.div`
  box-sizing: border-box;

  width: 728px;
  height: 56px;

  /* White */

  background: #FFFFFF;
  /* Gray/100 */

  border-top: 1px solid #F5F5F5;


`
let NavIcon = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0px;
  gap: 4px;

  position: absolute;
  width: 24px;
  height: 40px;
  left: calc(50% - 24px/2 - 283px);
  top: calc(50% - 40px/2);
`
let IconText = styled.p`
  width: 20px;
  height: 12px;

  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 500;
  font-size: 11px;
  line-height: 12px;
  text-align: center;
  color: #BDBDBD;
`




function MainFooter() {
  return (
    <MainFooterDiv>
      <FooterNav>
        <NavIcon>
          <HomeIcon />
          <IconText>홈</IconText>
        </NavIcon>
        <NavIcon>
          <SearchIcon />
          <IconText>검색</IconText>
        </NavIcon>
        <NavIcon>
          <HomeIcon />
          <IconText>단골가게</IconText>
        </NavIcon>
        <NavIcon>
          <MarketIcon />
          <IconText>주문내역</IconText>
        </NavIcon>
        <NavIcon>
          <MoreIcon />
          <IconText>더보기</IconText>
        </NavIcon>
      </FooterNav>
    </MainFooterDiv>
  )
}

export default MainFooter