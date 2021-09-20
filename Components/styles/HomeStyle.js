import styled from "styled-components";

const HomeStyle = styled.div`
  background-color: var(--mainBackground);
  color: var(--fontColor);
  font-weight: 700;
  min-height: 100vh;
  padding: 0 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  
  .main {
  width: 400px;
  }
  /* .title a:hover,
  .title a:focus,
  .title a:active {
  text-decoration: underline;
  } */

  @media (max-width: 375px) {
    .main {
      width: 100%;
      flex-direction: column;
    }
  }
`

export default HomeStyle