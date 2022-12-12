import React from 'react'
import MainFooter from '../components/Main/MainFooter'
import MainNav from '../components/Main/MainNav'
import styled from 'styled-components'
import MainBanner from '../components/Main/MainBanner'
import MainCategory from '../components/Main/MainCategory'
import MainBestCoupon from '../components/Main/MainBestCoupon'
import MainLastChance from '../components/Main/MainLastChance'
import MainBestProduct from '../components/Main/MainBestProduct'
import MainNewMarket from '../components/Main/MainNewMarket'
import MainBestCollection from '../components/Main/MainBestCollection'

let MainPageBg = styled.div`
  background: #1E1E1E;
  width: 100wh;
  height: 100vh;
`
function MainPage() {
  return (
    <div>
      <MainNav />

      <MainPageBg></MainPageBg>
      <MainBanner/>
      <MainCategory/>
      <MainBestCoupon/>
      <MainLastChance/>
      <MainBestProduct/>
      <MainNewMarket/>
      <MainBestCollection/>

      
      <MainFooter />
    </div>
  )
}

export default MainPage