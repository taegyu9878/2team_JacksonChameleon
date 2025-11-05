import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import "./scss/login.scss"
import { useAuthStore } from '../store/authStore';

const Login = () => {
  //1 변수
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // store 전역변수
  const { onLogin, onGoogleLogin } = useAuthStore();

  //외부 컴포넌트 실행하기 위한 라우터 훅
  const navigate = useNavigate();

  //2 메서드
  //기본 로그인
  const handleSubmit = async (e) => {
    e.preventDefault();
    await onLogin(email, password);
    //로그인되면 첫번째 페이지로 이동
    navigate("/");
  }

  //구글 로그인


  //카카오 로그인

  //3 화면에 뿌려질 내용
  return (
    <div className="sub-page">
      <div className="inner">
        <div className="login-wrap">
          <div className="right-login">
            <h2 className="section-title">LOGIN</h2>

            <form onSubmit={handleSubmit}>
              <input type="email" value={email}
                placeholder='Email'
                onChange={(e) => setEmail(e.target.value)} />
              <input type="password" value={password}
                placeholder='Password'
                onChange={(e) => setPassword(e.target.value)} />
              <button type='submit'>로그인</button>


              <div className='log-text'>
                <p>계정이 없으신가요?</p><p className='btn'> <Link to="/Join">회원가입</Link></p>
              </div>


              <p className='log-web'>SNS 간편로그인</p>
              <button >구글 로그인</button>
              <button>카카오 로그인</button>

            </form>
          </div>

          <div className="login-left">
            <p><img src="" alt="" /></p>
            <p>Welcome back to a space of new harmony</p>
          </div>

        </div>

      </div>
    </div>
  )
}


export default Login