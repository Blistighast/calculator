import styled from "styled-components";

const InputStyle = styled.div`
  background-color: var(--keypadBackground);
  padding: 1em;
  margin-top: 1em;
  border-radius: 5px;
  
  .buttonGrid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(4, 1fr);
  gap: 1em;
}

.button {
  background-color: var(--keyBackground);
  color: var(--keyFont);
  font-weight: 700;
  font-size: 32px;
  padding: 0.3em 0 0.1em 0;
  border-radius: 8px;
  border: none;
  box-shadow: var(--keyShadow);
}

.delete {
  background-color: var(--resetBackground);
  grid-column-start: 4;
  grid-row-start: 1;
  color: white;
  font-weight: 700;
  font-size: 18px;
  padding: 0.3em 0 0.1em 0;
  border-radius: 8px;
  border: none;
  box-shadow: var(--resetShadow);
}

.bottomButtons {
  margin-top: 1em;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1em;
}

.reset {
  background-color: var(--resetBackground);
  text-transform: uppercase;
  text-align: center;
  color: white;
  line-height: -10;
  font-size: 20px;
  padding: 0.6em 0 0.4em 0;
  border-radius: 8px;
  border: none;
  font-weight: 500;
  box-shadow: var(--resetShadow);
}

.equals {
  background-color: var(--equalBackground);
  color: var(--equalsFont);
  font-size: 20px;
  padding: 0.6em 0 0.4em 0;
  border-radius: 8px;
  border: none;
  font-weight: 700;
  box-shadow: var(--equalShadow);
}
`
export default InputStyle