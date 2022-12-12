import React from 'react'
import styled from 'styled-components'
import EmailRequest from '../components/Login/EmailRequest'
import FindResult from '../components/Login/FindResult'
import LoginHeader from '../components/Login/LoginHeader'


let EmailBody = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 32px 40px 0;
  padding-top: 60px;
  gap: 40px;
  /* position: absolute; */
  /* width: 728px; */
  /* left: 596px; */
  /* right: 596px; */
  /* top: 60px; */
  background: #FFFFFF;

  @media only screen and (max-width: 390px) {
    width: 100%;
    /* top: 104px;
    padding: 40px 20px;
    gap: 40px;
    left: 0px;
    right: 0px; */
  }
`

function FindEmail() {
  return (
    <div>
      <LoginHeader title="이메일 찾기"/>
      <EmailBody>
        <EmailRequest/>
        {/* <FindResult/> */}

      </EmailBody>
    </div>
  )
}

export default FindEmail