import { Link } from "react-router-dom";
import { useUserStore } from "../zustand/useUserStore";

const Layout = ({ children }) => {
  const { user, logoutUser } = useUserStore();

  const handleLogout = () => {
    alert("로그아웃!");
    logoutUser();
    return <Navigate to="/" />;
  };

  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-gray-500 text-white p-4">
        <nav className="container mx-auto flex justify-between items-center">
          <Link to="/" className="hover:bg-gray-700">
            홈
          </Link>
          <div className="flex space-x-4">
            {user?.success ? (
              <>
                <p>안녕하세요 {user.nickname}님!</p>
                <div className="flex space-x-4">
                  <Link to="/profile" className="hover:bg-gray-700">
                    프로필
                  </Link>
                  <Link to="/testpage" className="hover:bg-gray-700">
                    테스트
                  </Link>
                  <Link to="/testresultpage" className="hover:bg-gray-700">
                    결과보기
                  </Link>
                  <button
                    onClick={handleLogout}
                    className="bg-red-500 hover:bg-red-600 text-white p-1 rounded-md transition"
                  >
                    로그아웃
                  </button>
                </div>
              </>
            ) : (
              <>
                <Link to="/login" className="hover:bg-gray-700">
                  로그인
                </Link>
              </>
            )}
          </div>
        </nav>
      </header>
      <main>{children}</main>
    </div>
  );
};

export default Layout;
