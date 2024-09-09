import { useState } from "react";
import { login } from "../api/auth";
import useUserStore from "../zustand/useUserStore";
import { useNavigate } from "react-router-dom";

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
      return;
    }
  };

  return (
    <div>
      <form onSubmit={onSubmitHandle}>
        <input
          type="text"
          value={userData.id}
          onChange={(e) => {
            setUserData({ ...userData, id: e.target.value });
          }}
          required
        />
        <input
          type="password"
          value={userData.password}
          onChange={(e) => {
            setUserData({ ...userData, password: e.target.value });
          }}
          required
        />
        <button type="submit">로그인</button>
      </form>
    </div>
  );
};

export default Login;
