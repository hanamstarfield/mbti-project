import { useEffect, useState } from "react";
import { useUserStore } from "../zustand/useUserStore";
import axios from "axios";
import TestResultList from "../components/TestResultList";

const TestResult = () => {
  const { user } = useUserStore();
  const [results, setResults] = useState([]);

  const fetchResults = async () => {
    const response = await axios.get("http://localhost:5000/testResults");
    setResults(response.data);
  };

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
          모든 테스트 결과
        </h1>
        <TestResultList
          results={results}
          user={user}
          onUpdate={handleUpdate}
          onDelete={handleDelete}
        />
      </div>
    </div>
  );
};

export default TestResult;
