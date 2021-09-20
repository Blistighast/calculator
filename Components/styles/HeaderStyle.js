import styled from "styled-components";

const HeaderStyle = styled.div`
display: flex;
justify-content: space-between;
font-size: 20px;
margin-bottom: 1em;
.title {
  position: relative;
  bottom: 0;
  font-size: larger;
  align-self: flex-end;
}

.theme {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: 0;
  justify-items: center; /* align horizontally */
  align-items: center; /* align vertically */
}

.themeTitle {
  font-size: 12px;
  font-weight: 500;
  text-transform: uppercase;
  padding-top: 3px;
  grid-column-start: 1;
  grid-row-start: 2;
}

.toggleRadio {
  display: flex;
  position: relative;
  grid-column-start: 2;
  grid-row-start: 2;
  background-color: var(--keypadBackground);
  border-radius: 50px;
  overflow: hidden;
}

.modern-radio-container {
  margin: 24px 0;
  display: flex;
  cursor: pointer;
  user-select: none;
}

.radio-outer-circle {
  width: 18px;
  height: 18px;
  min-width: 18px;
  min-height: 18px;
  /* border: 2px solid #0d5bc6; */
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1px 2px 1px 2px;
  transition: all 0.1s linear;
}

.radio-inner-circle {
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background-color: var(--equalBackground);
  transition: all 0.1s linear;
}
.unselected {
  /* border: 2px solid #666; */
}
.unselected-circle {
  width: 0;
  height: 0;
}
.helper-text {
  color: #666;
  padding-right: 8px;
}

.labels {
  grid-column-start: 2;
  grid-row-start: 1;
  font-weight: 500;
  font-size: 12px;
}

.label {
  margin-left: 7px;
  margin-right: 7px;
}
`

export default HeaderStyle