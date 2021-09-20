import { useResultContext } from "../contexts/ResultContext";
import ResultStyle from "./styles/ResultStyle";

const Result = () => {
  const { result } = useResultContext();

  return ( 
    <ResultStyle>
      {result}
    </ResultStyle>
   );
}
 
export default Result;