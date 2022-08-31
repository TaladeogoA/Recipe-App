import { FaPizzaSlice, FaHamburger } from "react-icons/fa";
import { GiNoodles, GiChopsticks } from "react-icons/gi";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

function Category() {
  return (

    <List>
      <StyledLink to={"/cuisine/Italian"}>
        <FaPizzaSlice />
        <h4>Italian</h4>
      </StyledLink>

      <StyledLink to={"/cuisine/American"}>
        <FaHamburger />
        <h4>American</h4>
      </StyledLink>

      <StyledLink to={"/cuisine/Thai"}>
        <GiNoodles />
        <h4>Thai</h4>
      </StyledLink> 

      <StyledLink to={"/cuisine/Chinese"}>
        <GiChopsticks />
        <h4>Chinese</h4>
      </StyledLink> 
    </List>
  );
}

const StyledLink = styled(NavLink)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;  
  border-radius: 50%;
  margin-right: 2rem;
  text-decoration: none;
  background: linear-gradient(35deg, #494949, #313131);
  width: 5.5rem;
  height: 5.5rem;
  cursor: pointer;
  transform: scale(0.8);

  h4 {
    color: #fff;
    font-size: 0.8rem;
    font-weight: normal;
    margin-top: 5px;
  }

  svg {
    color: #fff;
    font-size: 1.5rem;
  }

  &.active {
    background: linear-gradient(to right, #f27121, #e94057);

    svg {
      color: #fff;
    }

    h4 {
      color: #fff;
    }
  }

`;

const List = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 2rem;
`;

export default Category;
