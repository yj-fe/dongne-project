import { Routes, Route, Link, useNavigate, Outlet, createBrowserRouter,  RouterProvider } from 'react-router-dom'
import { useState } from 'react';
import LoginPage from './pages/LoginPage';
import FindEmail from './pages/FindEmail';
import FindPwd from './pages/FindPwd';
import SignupPage from './pages/SignupPage';
import MyPage from './components/MyPage';
import CategoryPage from './pages/CategoryPage';
import CollectionPage from './pages/CollectionPage';
import MainPage from './pages/MainPage';
import SignupTest from './pages/SignupTest';
import Agreement from './components/Login/Agreement';
import FindResult from './components/Login/FindResult';
import SignupInfo from './components/Login/SignupInfo';
import CheckComponent from './components/Login/CheckComponent';
import TimeOut from './components/Login/TimeOut';
import ModalPage from './components/Login/ModalPage';
import ToggleDetail from './components/Login/ToggleDetail';



function App() { 
  let navigate = useNavigate()
  return (
    <>

      <button onClick={()=>{ navigate('member/login') }}>LoginPage</button>
      <button onClick={()=>{ navigate('member/login/signup/test') }}>SignupInfo</button>
      <button onClick={()=>{ navigate('member/test') }}>TimeOut</button>
      <button onClick={()=>{ navigate('main') }}>MainPage</button>
    <Routes>

      <Route path="/main" element={ <MainPage /> } />
      <Route path="/categories" element={ <CategoryPage /> } />
      <Route path="/collections" element={ <CollectionPage /> } />
      <Route path="/member" element={ <MyPage /> } />
      <Route path="/member/login" element={ <LoginPage /> } />
      <Route path="/member/login/find/email" element={ <FindEmail /> } />
      <Route path="/member/login/find/password" element={ <FindPwd /> } />
      <Route path="/member/login/signup" element={ <SignupPage /> } />
      <Route path="/member/login/signup/test" element={ <SignupTest /> } />
      <Route path="/member/test" element={ <TimeOut /> } />
      <Route path="/member/test/modal" element={ <ToggleDetail /> } />
      {/* <Route path="/member/login/signup/test" element={ <SignupInfo /> } /> */}
    </Routes>


    {/* <Link to="/member/login"><LoginPage/></Link> */}
    {/* <Link to="/member/signup"><SignupPage/></Link>
    <Link to="/member/find/email"><FindEmail/></Link>
    <Link to="/member/find/password"><FindPwd/></Link>  */}
    </>
  );
}

export default App;
