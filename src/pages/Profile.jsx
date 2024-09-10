import { useState } from "react";
import useUserStore from "../zustand/useUserStore";
import { updateProfile } from "../api/auth";

const Profile = () => {
  const { user, updateUserProfile } = useUserStore();
  const [nickname, setNickname] = useState("");

  const onSubmithandler = async (e) => {
    e.preventDefault();
    const accessToken = user?.accessToken;
    if (accessToken) {
      const { message, success } = await updateProfile(
        { nickname },
        accessToken
      );

      if (success) {
        updateUserProfile({ nickname });
        alert(message);
      } else {
        alert(message);
      }
    }
  };

  return (
    <div>
      <h1>프로필 수정</h1>
      <form onSubmit={onSubmithandler}>
        <label>닉네임</label>
        <input
          type="text"
          value={nickname}
          onChange={(e) => {
            setNickname(e.target.value);
          }}
        />
        <button type="submit">프로필 업데이트</button>
      </form>
    </div>
  );
};

export default Profile;
