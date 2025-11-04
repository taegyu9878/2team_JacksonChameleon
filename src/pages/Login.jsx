import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import "./scss/login.scss"
import { useAuthStore } from '../store/authStore';



const Login = () => {
  //1 변수
  const [email, setEmail] =useState("");
  const [password, setPassword] =useState("");
  // store 전역변수
  const {onLogin, onGoogleLogin} = useAuthStore();
  
  
  const navigate = useNavigate();

  //2 메서드
  //기본 로그인
  const handleSubmit = async (e) =>{
    e.preventDefault();
    await onLogin(email,password);
    navigate("/");
  }
  
  
  //3 화면에 뿌려질 내용
  return (
    <div>
      <div className="sub-page">
        <div className="inner">
          <div className="login-wrap">
            <h2 className="section-title">로그인</h2>
            <form onSubmit={handleSubmit}>
              <input type="email" value={email}  
              placeholder='이메일을 입력하세요' 
               
              onChange={(e)=> setEmail(e.target.value)}  />
              <input type="password" value={password}
               placeholder='비밀번호를 입력하세요' 
                
               onChange={(e)=> setPassword(e.target.value)}  />

              <button type='submit'>로그인</button>
              <button >Google 로그인</button>
              <button>KaKao로그인</button>
        
            </form>
                  <button className='btn'> <Link to ="/Join">회원가입</Link></button>
          </div>
        </div>
      </div>
    </div>
  )
}


export default Login