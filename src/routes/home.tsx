import { styled } from "styled-components";
import CompanyList from "../components/companyList";
import { useState } from "react";

const Wrapper = styled.div`
  margin: 0px 10px 10px;
  border: 2px solid black;
  width: 98%;
  height: 96%;
  display: flex;
  flex-direction: column;
  align-items: center;
  input {
    border: 2px solid red;
    margin: 20px;
    width: 300px;
    display:flex;
    justify-content: column;
    height: 7%;
    border-radius: 15px;
    font-family: 'intelone-mono-font-family-regular';
    text-align: center;
    font-size: 30%;
  }
`;

export default function Home() {
  const [company, setCompany] = useState([]);
  const [userInput, setUserInput] = useState("");

  const handleChange = (e) => {
    setUserInput(e.target.value);
    console.log(userInput);
  };
  
  return (
    <Wrapper>
      <input onChange={handleChange} type="text" placeholder="Enter company to be searched"></input>
      <CompanyList/>
    </Wrapper>
  );
}