import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const Layout = ({ children }) => {
  // const navigate = useNavigate();

  // useEffect(() => {
  //   if (!user) {
  //     navigate("/login");
  //   }
  // }, [user]);

  // const handleLogout = () => {}

  return (
    <div>
      <header>
        <Link to="/">홈</Link>
        <div>
          <>
            <Link to="/profile">
              <button>프로필</button>
            </Link>
            <Link to="/testpage">
              <button>테스트</button>
            </Link>
            <Link to="/testresultpage">
              <button>결과보기</button>
            </Link>
            <button>로그아웃</button>
          </>
          <Link to="/login">로그인</Link>
        </div>
      </header>
      <main>{children}</main>
    </div>
  );
};

export default Layout;
