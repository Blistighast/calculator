import { ResultWrapper } from "../contexts/ResultContext";
import { ThemeWrapper } from "../contexts/ThemeContext";

function MyApp({ Component, pageProps }) {
  return (
      <ThemeWrapper>
        <ResultWrapper>
          <Component {...pageProps} />
        </ResultWrapper>
      </ThemeWrapper>
  );
}

export default MyApp;
