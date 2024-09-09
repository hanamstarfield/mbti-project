import { useContext, useState } from "react";
import { auth, login } from "../api/auth";

const Login = () => {
  const [userdata, setUserdata] = useState({
    id: "",
    password: "",
  });

  const onSubmitHandle = async (e) => {
    e.prventDEfault();
    const data = await login(userdata);

    if (data.success) {
      alert("로그인 성공!");
    }
  };

  return (
    <div>
      <form>
        <input
          type="text"
          value={id}
          onChange={(e) => {
            setId(e.target.value);
          }}
        />
        <input
          type="password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <button>로그인</button>
      </form>
    </div>
  );
};

export default Login;
