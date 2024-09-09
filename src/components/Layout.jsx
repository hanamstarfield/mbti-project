import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import useUserStore from "../zustand/useUserStore";

const Layout = ({ children }) => {
  const navigate = useNavigate();
  const { user, logoutUser } = useUserStore();

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, [user]);

  const handleLogout = () => {
    logoutUser();
  };

  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-gray-500 text-white p-4">
        <nav className="container mx-auto flex justify-between items-center">
          <Link to="/">홈</Link>

          {user?.success ? (
            <>
              <Link to="/profile">프로필</Link>
              <Link to="/test">테스트</Link>
              <Link to="/testResults">결과보기</Link>
              <button onClick={handleLogout}>로그아웃</button>
            </>
          ) : (
            <>
              <Link to="/signup">회원가입</Link>
              <Link to="/login">로그인</Link>
            </>
          )}
        </nav>
      </header>
      <main>{children}</main>
    </div>
  );
};

export default Layout;
