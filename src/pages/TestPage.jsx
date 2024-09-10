import TestForm from "../components/TestForm";
import calculateMBTI from "../utils/mbtiCalculaor";
import { createTestResult } from "../api/testResults";
import { useNavigate } from "react-router-dom";
import { useUserStore } from "../zustand/useUserStore";

const Test = () => {
  const navigate = useNavigate();
  const { user } = useUserStore();

  const handleTestSubmit = async (answers) => {
    const result = calculateMBTI(answers);
    const resultData = {
      userId: user.userId,
      nickname: user.nickname,
      result,
      answers,
      date: new Date().toISOString(),
      visibility: true,
    };
    await createTestResult(resultData);
    navigate("/TestResultPage");
  };

  return (
    <div className="max-w-md mx-auto mt-10">
      <h1 className="text-2xl font-bold mb-4">MBTI 테스트</h1>
      <TestForm onSubmit={handleTestSubmit} />
    </div>
  );
};

export default Test;
