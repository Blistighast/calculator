import { createContext, useContext, useState } from 'react';

const ResultContext = createContext();

export function ResultWrapper({ children }) {
  const [result, setResult] = useState('0');
  const [isSolved, setIsSolved] = useState(false)

  return (
    <ResultContext.Provider value={{result, setResult, isSolved, setIsSolved}}>
      {children}
    </ResultContext.Provider>
  );
}

export function useResultContext() {
  return useContext(ResultContext);
}