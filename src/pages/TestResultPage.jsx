import { useEffect, useState } from "react";
import { useUserStore } from "../zustand/useUserStore";
import axios from "axios";
import TestResultList from "../components/TestResultList";

const TestResult = () => {
  const { user } = useUserStore();
  const [results, setResults] = useState([]);
  const [showMyResults, setShowMyResults] = useState(false);

  const fetchResults = async () => {
    const response = await axios.get("http://localhost:5000/testResults");
    setResults(response.data);
  };

  const displayedResults = showMyResults
    ? results.filter((result) => result.userId === user.userId)
    : results.filter(
        (result) => result.visibility || result.userId === user.userId
      );

  useEffect(() => {
    fetchResults();
  }, []);

  const handleUpdate = () => {
    fetchResults();
  };

  const handleDelete = () => {
    fetchResults();
  };

  return (
    <div className="w-full flex flex-col items-center justify-center bg-white shadow-lg rounded-lg p-8">
      <div className="bg-white max-w-2xl w-full">
        <h1 className="text-3xl font-bold text-primary-color mb-6 text-center">
          {showMyResults ? "내 테스트 결과" : "모든 테스트 결과"}
        </h1>
        <button
          onClick={() => setShowMyResults((prev) => !prev)}
          className="bg-red-500 py-2 px-4 rounded-lg text-sm hover:bg-red-600 transition"
        >
          {showMyResults ? "전체 결과 보기" : "내 테스트 결과만 보기"}
        </button>
        <TestResultList
          results={displayedResults}
          user={user}
          onUpdate={handleUpdate}
          onDelete={handleDelete}
        />
      </div>
    </div>
  );
};

export default TestResult;
