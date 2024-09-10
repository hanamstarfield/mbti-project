import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-3xl font-bold mb-4">무료 성격 테스트</h1>
      <p className="text-lg mb-6">
        자신의 성격 유형을 확인할 수 있도록 솔직하게 답변해 주세요.
      </p>
      <button
        onClick={() => navigate("/testpage")}
        className=" bg-white text-red-600 rounded-lg font-semibold hover:bg-red-600 hover:text-white transition"
      >
        테스트 하러가기
      </button>
    </div>
  );
};

export default Home;
