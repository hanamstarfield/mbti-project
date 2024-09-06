import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const Layout = ({ children }) => {
  const navigate = useNavigate();

  // login 페이지로 이동
  // useEffect(()=>{

  // }, [])

  // const handleLogout = () => {}

  return (
    <div>
      <Link to="/">홈</Link>
      <div>
        {user ? (
          <>
            <button>로그아웃</button>
            <button>프로필</button>
            <button>테스트</button>
            <button>결과 보기</button>
          </>
        ) : (
          <Link to="/login">로그링</Link>
        )}
      </div>
    </div>
  );
};

export default Layout;
