import { useEffect, useState } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";

function Recipe() {
  let params = useParams();
  const [details, setDetails] = useState([]);
  const [activeTab, setActiveTab] = useState("instructions");

  const fetchDetails = async () => {
    const data = await fetch(
      `https://api.spoonacular.com/recipes/${params.name}/information?apiKey=${process.env.REACT_APP_API_KEY}`
    );
    const detailData = await data.json();
    setDetails(detailData);
    console.log(detailData);
  };

  useEffect(() => {
    fetchDetails();
  }, [params.name]);

  return (
    <DetailWrapper>
      <Image className="recipe-img">
        <h2>{details.title}</h2>
        <img src={details.image} alt={details.title} />
      </Image>

      <Info>
        <ButtonsContainer>
          <StyledButton
            className={activeTab === "instructions" ? "active" : ""}
            onClick={() => setActiveTab("instructions")}
          >
            Instructions
          </StyledButton>
          <StyledButton
            className={activeTab === "ingredients" ? "active" : ""}
            onClick={() => setActiveTab("ingredients")}
          >
            Ingredients
          </StyledButton>
        </ButtonsContainer>

        {activeTab === "instructions" && (
          <div>
            <h4 dangerouslySetInnerHTML={{ __html: details.summary }}></h4>
            <h4 dangerouslySetInnerHTML={{ __html: details.instructions }}></h4>
          </div>
        )}

        {activeTab === "ingredients" && (
          <ul>
            {details.extendedIngredients.map((ingredient) => (
              <li key={ingredient.id}>{ingredient.original}</li>
            ))}
          </ul>
        )}
      </Info>
    </DetailWrapper>
  );
}

const DetailWrapper = styled.div`
  margin-top: 5rem;
  margin-bottom: 5rem;
  display: flex;
  justify-content: center;

  .active {
    background: linear-gradient(35deg, #494949, #313131);
    color: white;
    border: 2px solid #494949;
  }

  h4 {
    margin-top: 2rem;
  }

  li {
    font-size: 1.2rem;
    line-height: 2.5rem;
  }

  ul {
    margin-top: 2rem;
  }

  > div {
    flex: 1;
  }

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const Image = styled.div`
  width: 50%;

  h2 {
    margin-bottom: 2rem;
  }

  img {
    width: 100%;
    object-fit: cover;
  }

  @media (max-width: 768px) {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

    img {
      width: 70%;
      margin: 0 auto;
    }
  }
`;

const Info = styled.div`
  margin-left: 2rem;
  width: 50%;

  @media (max-width: 768px) {
    margin-left: 0;
    width: calc(100% - 4rem);
    margin: 0 2rem;
  }
`;

const ButtonsContainer = styled.div`
  display: flex;

  @media (max-width: 768px) {
    margin-top: 1rem;
    justify-content: center;
  }
`;

const StyledButton = styled.button`
  padding: 0.8rem 1.2rem;
  color: #313131;
  background: #fff;
  border: 2px solid black;
  margin-right: 1rem;
  font-size: 1rem;
  font-weight: 400;

  @media (max-width: 1075px) {
    padding: 0.5rem 1rem;
  }
`;

export default Recipe;
