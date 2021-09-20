import { createGlobalStyle } from "styled-components";

export const darkTheme = {
  mainBackground: "hsl(222, 26%, 31%)",
  keypadBackground: "hsl(223, 31%, 20%)",
  screenBackground: "hsl(224, 36%, 15%)",
  keyBackground: "hsl(30, 25%, 89%)",
  keyShadow: "0 3px hsl(28, 16%, 65%)",
  resetBackground: "hsl(225, 21%, 49%)",
  resetShadow: "0 3px hsl(224, 28%, 35%)",
  equalBackground: "hsl(6, 63%, 50%)",
  equalShadow: "0 3px hsl(6, 70%, 34%)",
  fontColor: "white",
  keyFont: "hsl(221, 14%, 31%)",
  equalsFont: "white",
}

export const lightTheme = {
  mainBackground: "hsl(0, 0%, 90%)",
  keypadBackground: "hsl(0, 5%, 81%)",
  screenBackground: "hsl(0, 0%, 93%)",
  keyBackground: "hsl(45, 7%, 89%)",
  keyShadow: "0 3px hsl(35, 11%, 61%)",
  resetBackground: "hsl(185, 42%, 37%)",
  resetShadow: "0 3px hsl(185, 58%, 25%)",
  equalBackground: "hsl(25, 98%, 40%)",
  equalShadow: "0 3px hsl(25, 99%, 27%)",
  fontColor: "hsl(60, 10%, 19%)",
  keyFont: "hsl(60, 10%, 19%)",
  equalsFont: "white",
}

export const purpleTheme = { 
  mainBackground: "hsl(268, 75%, 9%)",
  keypadBackground: "hsl(268, 71%, 12%)",
  screenBackground: "hsl(268, 71%, 12%)",
  keyBackground: "hsl(268, 47%, 21%)",
  keyShadow: "0 3px hsl(290, 70%, 36%)",
  resetBackground: "hsl(281, 89%, 26%)",
  resetShadow: "0 3px hsl(285, 91%, 52%)",
  equalBackground: "hsl(176, 100%, 44%)",
  equalShadow: "0 3px hsl(177, 92%, 70%)",
  fontColor: "hsl(52, 100%, 62%)",
  keyFont: "hsl(52, 100%, 62%)",
  equalsFont: "hsl(198, 20%, 13%)",
}

const GlobalStyles = createGlobalStyle`

html {
  --mainBackground: ${({ theme }) => theme.mainBackground};
  --keypadBackground: ${({ theme }) => theme.keypadBackground};
  --screenBackground: ${({ theme }) => theme.screenBackground};
  --keyBackground: ${({ theme }) => theme.keyBackground};
  --keyShadow: ${({ theme }) => theme.keyShadow};
  --resetBackground: ${({ theme }) => theme.resetBackground};
  --resetShadow: ${({ theme }) => theme.resetShadow};
  --equalBackground: ${({ theme }) => theme.equalBackground};
  --equalShadow: ${({ theme }) => theme.equalShadow};
  --fontColor: ${({ theme }) => theme.fontColor};
  --keyFont: ${({ theme }) => theme.keyFont};
  --equalsFont: ${({ theme }) => theme.equalsFont};
  
  box-sizing: border-box;
}
*, *:before, *:after {
  box-sizing: inherit;
}
body {
  padding: 0;
  margin: 0;
  font-family: "Spartan", sans-serif;
}
button {
  font-family: "Spartan", sans-serif;
}
`;

export default GlobalStyles;