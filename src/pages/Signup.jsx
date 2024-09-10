import { useState } from "react";
import { register } from "../api/auth";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState({
    nickname: "",
    id: "",
    password: "",
  });

  const onSubmithandler = async (e) => {
    e.preventDefault();
    const { message, success } = await register(userData);

    if (success) {
      alert(message);
      navigate("/login");
    } else {
      alert(message);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-8 text-center">회원가입</h2>
        <form onSubmit={onSubmithandler} className="space-y-4">
          <input
            type="text"
            placeholder="아이디"
            value={userData.id}
            onChange={(e) => setUserData({ ...userData, id: e.target.value })}
            required
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2"
          />
          <input
            type="password"
            placeholder="비밀번호"
            value={userData.password}
            onChange={(e) =>
              setUserData({ ...userData, password: e.target.value })
            }
            required
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2"
          />
          <input
            type="text"
            placeholder="닉네임"
            value={userData.nickname}
            onChange={(e) =>
              setUserData({ ...userData, nickname: e.target.value })
            }
            required
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2"
          />
          <button
            type="submit"
            className="w-full py-3 bg-white text-red-600 rounded-lg font-semibold hover:bg-red-600 hover:text-white transition"
          >
            가입하기
          </button>
        </form>
        <div className="flex items-center gap-2 text-sm">
          <p>이미 계정이 있으신가요?</p>
          <Link to="/login" className="text-red-600">
            로그인
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Signup;
