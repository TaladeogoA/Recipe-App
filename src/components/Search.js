import styled from "styled-components";
import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import {useNavigate} from "react-router-dom";

function Search() {
  const [input, setInput] = useState("");
  const navigate = useNavigate();


  const submitHandler = (e) => {
    e.preventDefault();
    navigate('/searched/' + input);
  }

  return (
    <StyledForm onSubmit={submitHandler}>
      <div>
        <StyledSearchIcon />
        <input
          onChange={(e) => setInput(e.target.value)}
          type="text"
          placeholder="Search"
          value={input}
        />
      </div>
    </StyledForm>
  );
}

const StyledForm = styled.form`
  margin: 0 20rem;

  div {
    position: relative;
    width: 100%;
  }

  input {
    border: none;
    background: linear-gradient(to right, #494949, #313131);
    font-size: 1rem;
    color: #fff;
    padding: 0.5rem 3rem;
    border: none;
    border-radius: 0.5rem;
    outline: none;
    width: 100%;
  }

  svg {
    position: absolute;
    top: 50%;
    left: 0%;
    transform: translateY(-50%);
    color: #fff;
  }
`;

const StyledSearchIcon = styled(FaSearch)`
  margin-left: 1rem;
`;

export default Search;
