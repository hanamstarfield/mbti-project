import { useState } from "react";
import { register } from "../api/auth";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();
  const [userData, setUserdata] = useState({
    username: "",
    id: "",
    password: "",
  });

  const onSubmithandler = async (e) => {
    e.preventDefault();
    const { message, success } = await register(userData);

    if (success) {
      alert(message);
      navigate("/");
    } else {
      alert(message);
      return;
    }
  };

  return (
    <div>
      <form onSubmit={onSubmithandler}>
        <p>닉네임</p>
        <input
          type="text"
          value={userData.username}
          onChange={(e) =>
            setUserdata({ ...userData, username: e.target.value })
          }
          required
        />
        <p>아이디</p>
        <input
          type="text"
          value={userData.id}
          onChange={(e) => setUserdata({ ...userData, id: e.target.value })}
          required
        />
        <p>패스워드</p>
        <input
          type="password"
          value={userData.password}
          onChange={(e) =>
            setUserdata({ ...userData, password: e.target.value })
          }
          required
        />
        <button type="submit">가입하기</button>
      </form>
    </div>
  );
};

export default Signup;
