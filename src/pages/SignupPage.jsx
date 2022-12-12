import React from 'react'
import styled from 'styled-components'
import TimeOut from '../components/Login/TimeOut';
import LoginHeader from '../components/Login/LoginHeader'
import SignupRequest from '../components/Login/SignupRequest';
import SignupInfo from '../components/Login/SignupInfo';
import Agreement from '../components/Login/Agreement';








function SignupPage() {
  return (
    <div>
      <LoginHeader title="회원가입"/>

        {/* <SignupRequest/> */}
        <Agreement/>
        {/* <SignupInfo/> */}
    </div>
  )
}

export default SignupPage