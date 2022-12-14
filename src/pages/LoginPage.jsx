import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import LoginHeader from '../components/Login/LoginHeader'
import Logo from "../assets/logo.png";
import { ReactComponent as EyeOn } from "../assets/Eyeon.svg";
import { ReactComponent as EyeOff } from "../assets/Eyeoff.svg";
import { ReactComponent as Bar } from "../assets/bar.svg";
import { ReactComponent as Horizon } from "../assets/horizon.svg";
import { ReactComponent as Naver } from "../assets/naver.svg";
import { ReactComponent as Kakao } from "../assets/kakao.svg";
import { ReactComponent as Google } from "../assets/google.svg";
import { ReactComponent as Apple } from "../assets/apple.svg";
import { ReactComponent as Arrow } from "../assets/Arrow-Right.svg";
import ErrorToggle from "../components/Login/ErrorToggle";


const LoginBody = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 32px 40px 0;
  gap: 60px;
  padding-top: 60px;
  /* position: absolute; */
  /* width: 728px; */
  /* left: 596px;
  right: 596px; */
  /* top: 60px; */
  background: #FFFFFF;

  > form {
    max-width: 728px;
    width: 100%;
    background-color: #fff;

    @media only screen and (max-width: 728px) { 
      width: 100%;
    }
  }
`;
const LogoImg = styled.img`
  width: 170px;
  height: 44px;
`;
const InputForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  /* align-items: flex-start; */
  gap: 16px;

  /* width: 648px; */
  /* height: 204px; */

  @media only screen and (max-width: 390px) {
    width: 100%;
    /* width: 350px; */
    /* height: 200px; */
  }
`;
const Input = styled.input`
  align-items: center;
  box-sizing: border-box;
  width: 648px;
  height: 48px;
  /* border-bottom: 1px solid #e0e0e0; */
  border-bottom: 1px solid ${props => props.errorEmail ? "#D32F2F" :"#e0e0e0"};
  padding: 12px;
  /* margin: 40px 40px 0px 40px; */
  font-weight: 400;
  font-size: 16px;

  color: #bdbdbd;
  &:focus {
    outline: none;
    border-bottom: 1px solid #616161;
    color: #212121;
  }

  @media only screen and (max-width: 390px) {
    width: 100%;
  }
`;
const InputError = styled.p`
align-items: flex-start;
  font-weight: 400;
  font-size: 13px;
  color: #D32F2F;
  padding: 0;
  margin: 0;
`
const PwdContainer = styled.div`
  box-sizing: border-box;
  width: 648px;
  height: 48px;
  /* border-bottom: 1px solid #D32F2F; */
  /* border-bottom: 1px solid #e0e0e0; */
  border-bottom: 1px solid ${props => props.errorPwd ? "#D32F2F" :"#e0e0e0"};
  padding: 12px;

  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #bdbdbd;

  @media only screen and (max-width: 390px) {
    width: 100%;
  }
`;
const PwdInput = styled.input`
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #bdbdbd;
  outline: none;
  &::-ms-reveal {
   display: none;
  }
`;
const EyeOffStyle = styled.div`
  float: right;
`;
const LoginButton = styled.button`
  justify-content: center;
  align-items: center;
  width: 648px;
  height: 52px;
  background: ${ props => props.color  ? "#0B806F" : "#e0e0e0"};
  border-radius: 4px;

  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  color: #ffffff;

  @media only screen and (max-width: 390px) {
    width: 100%;
  }
`;

const FindStyle = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 16px;
  `;
const FindAccount = styled.button`
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: #424242;
  flex: none;
  flex-grow: 0;
  float: left;

  @media only screen and (max-width: 390px) {
    font-weight: 300;
  }
`;
const GapContainer = styled.div``;
const SnsStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 28px;
  width: 648px;
  height: 100px;
`;
const SnsTextStyle = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0px;
  gap: 24px;

  width: 648px;
  height: 20px;
`;
const Snstext = styled.p`
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: #757575;
  flex: none;
  text-align: center;
`;
const SnsIcon = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0px;
  gap: 20px;
  width: 648px;
  height: 52px;
  flex: none;
  align-self: stretch;
  flex-grow: 0;
`;
const LoginFooter = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 4px;
  margin: 130px;
  padding-top: 35px;
  /* bottom: 0; */
  /* align-items: center; */
`;
const LoginText = styled.p`
  /* display: flex; */
  /* flex-direction: row; */
  /* width: 220px; */
  /* justify-content: center; */
  font-weight: 400;
  font-size: 14px;
  /* line-height: 20px; */
  color: #424242;
  /* flex: none; */
`;
const Button = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  height: 20px;
`;
const SignupText = styled.p`
  /* display: flex; */
  /* flex-direction: row; */
  /* width: 60px; */
  /* justify-content: center; */
  /* display: flex; */
  /* flex-direction: row; */
  /* line-height: 20px; */
  font-weight: 600;
  font-size: 14px;
  color: #424242;
`;
const ArrowStyle = styled.svg`
  width: 18px;
  padding-top: 1px;
`;














function LoginPage() {
  const navigate = useNavigate();
  // const [account, setAccount] = useState({
  //   email: "",
  //   password: "",
  // });
  // const onChangeInput = (e) => {

  //   setAccount({
  //     ...account,
  //     [e.target.name]: e.target.value,
  //   });
  //   console.log(account);
  // };
  const [active, setActive] = useState(false);
  const [errorEmail, setErrorEmail] = useState(false);
  const [errorPwd, setErrorPwd] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [disabled, setDisable] = useState(false);

  const onChangeEmail = (e) => {
    setEmail(e.target.value);
  };
  const onChangePassword = (e) => {
    setPassword(e.target.value);
  };
  const [showPassword, setShowPassword] = useState(false);
  const togglePassWord = () => {
    /* e.preventDefault() */
    setShowPassword(!showPassword);
  };

  const acctiveLogin = () => {
    if (email && password.length >= 5 ) {
      setActive(true)
    }else{
      setActive(false)
    }
  };
  const errorCheckEmail = () => {
    if (email.includes('@')) {
      setErrorEmail(false)
    }else{
      setErrorEmail(true)
    }
    console.log(errorEmail);
  }

  
  const errorCheckPwd = () => {
    // if(?????????, ???????????? !== ????????????){setErrorPwd(false)}
  }

  const goToMain = () => {
    console.log('gotomain');
    // if(input===????????????){????????? ??? navigate('/main')}else{?????????????????????}
  } 
  const sumitInput = (e) => {
    e.preventDefault();
    setEmail('');
  };


  const loginNaver = () =>{

  }
  const loginKakao = () =>{
    
  }
  const loginGoogle = () =>{
    
  }
  const loginApple = () =>{

  }






  

  return (
    <div>
      <LoginHeader title="?????????"/>
      <LoginBody>
        <LogoImg src={Logo} />
        <InputForm>
          <Input
            placeholder="?????????"
            id="email"
            name="email"
            type='text'
            value={email}
            onKeyUp={acctiveLogin}
            onChange={onChangeEmail}
            errorEmail={errorEmail}
          />
          {errorEmail && <ErrorToggle errormessage="???????????? ?????? ????????? ???????????????."/>}
          <PwdContainer>
            <PwdInput
              id="password"
              name="password"
              type={showPassword ? "text" : "password"}
              placeholder="????????????"
              onKeyUp={acctiveLogin}
              onChange={onChangePassword}
              errorPwd={true}
              // errorPwd={errorPwd}
            />
            <EyeOffStyle onClick={togglePassWord}>
              {showPassword ? <EyeOn /> : <EyeOff />}
            </EyeOffStyle>
          </PwdContainer>
            {/* {errorPwd && <ErrorToggle errormessage="????????? ?????? ??????????????? ???????????? ????????????."/>} */}
             <ErrorToggle errormessage="????????? ?????? ??????????????? ???????????? ????????????."/>


          <LoginButton
            type="button"
            onClick={()=>{goToMain(); errorCheckEmail(); errorCheckPwd();}}
            disabled={disabled}
            // disabled={email === '' || password === ''  ? true : false}
            // active={active}
            color={active}
            >
            ?????????</LoginButton>
          {/* <LoginButtonActive onclick={sumitInput}>?????????</LoginButtonActive> */}
        </InputForm>
        <FindStyle>
          <FindAccount
            onClick={() => {
              navigate("find/email");
            }}
          >
            ????????? ??????
          </FindAccount>
          <Bar />
          <FindAccount
            onClick={() => {
              navigate("find/password");
            }}
          >
            ???????????? ??????
          </FindAccount>
        </FindStyle>
        <GapContainer>
          <SnsStyle>
            <SnsTextStyle>
              <Horizon />
              <Snstext>SNS??? 1????????? ????????????</Snstext>
              <Horizon />
            </SnsTextStyle>
            <SnsIcon>
              <Naver onClick={loginNaver}/>
              <Kakao onClick={loginKakao}/>
              <Google onClick={loginGoogle}/>
              {/* <Apple onClick={loginApple}/> */}
            </SnsIcon>
          </SnsStyle>
          <LoginFooter>
            <LoginText>?????? ????????? ????????? ????????????????</LoginText>
            <Button
              onClick={() => {
                navigate("signup");
              }}
            >
              <SignupText>????????????</SignupText>
              <ArrowStyle>
                <Arrow />
              </ArrowStyle>
            </Button>
          </LoginFooter>
        </GapContainer>
      </LoginBody>
    </div>
  );
}

export default LoginPage;
