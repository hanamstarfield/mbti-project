import { useState } from "react";
import { useUserStore } from "../zustand/useUserStore";
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
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold mb-8 text-center">프로필 수정</h1>
        <form onSubmit={onSubmithandler} className="space-y-4">
          <input
            placeholder="닉네임"
            type="text"
            value={nickname}
            onChange={(e) => {
              setNickname(e.target.value);
            }}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2"
          />
          <button
            type="submit"
            className="w-full py-3 bg-white text-red-600 rounded-lg font-semibold hover:bg-red-600 hover:text-white transition"
          >
            프로필 업데이트
          </button>
        </form>
      </div>
    </div>
  );
};

export default Profile;
