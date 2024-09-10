import { useState } from "react";
import { login } from "../api/auth";
import { useUserStore } from "../zustand/useUserStore";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const { loginUser } = useUserStore();
  const [userData, setUserData] = useState({
    id: "",
    password: "",
  });

  const onSubmitHandle = async (e) => {
    e.preventDefault();
    const data = await login(userData);

    if (data.success) {
      alert("로그인 성공!");
      loginUser(data);
      navigate("/");
    } else {
      alert(data.message);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-8 text-center">로그인</h2>
        <form onSubmit={onSubmitHandle} className="space-y-4">
          <input
            type="text"
            placeholder="아이디"
            value={userData.id}
            onChange={(e) => {
              setUserData({ ...userData, id: e.target.value });
            }}
            required
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2"
          />
          <input
            type="password"
            placeholder="비밀번호"
            value={userData.password}
            onChange={(e) => {
              setUserData({ ...userData, password: e.target.value });
            }}
            required
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2"
          />
          <button
            type="submit"
            className="w-full py-3 bg-white text-red-600 rounded-lg font-semibold hover:bg-red-600 hover:text-white transition"
          >
            로그인
          </button>
        </form>
        <div className="flex items-center gap-2 text-sm">
          <p>계정이 없으신가요?</p>
          <Link to="/signup" className="text-red-600">
            회원가입
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
