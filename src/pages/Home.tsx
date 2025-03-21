import { FC } from "react";
import { Button } from "antd";
import { Link } from "react-router-dom";
import styled from "@emotion/styled";
import ImageShuffler from "../components/ImageShuffler";

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-image: url("/images/zaatar.png");
  background-size: cover;
  background-position: center;
  text-align: center;
  color: white;
`;

/* ✅ Use a responsive flexbox to prevent overlapping */
const ImageContainer = styled.div`
  display: flex;
  justify-content: space-between; /* ✅ Keeps food & drink apart */
  align-items: center;
  width: 90%; /* ✅ Adjusts to screen size */
  max-width: 800px; /* ✅ Prevents images from stretching too much */
  margin-bottom: 20px;

  @media (max-width: 600px) {
    flex-direction: column; /* ✅ Stack images on smaller screens */
    gap: 20px;
  }
`;

const Title = styled.h1`
  font-size: 50px;
  font-weight: bold;
  text-shadow: 3px 3px 6px rgba(0, 0, 0, 0.6);
  margin-bottom: 20px;
`;

const Subtitle = styled.p`
  font-size: 24px;
  margin-bottom: 30px;
  max-width: 600px;
  line-height: 1.5;
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 20px; /* ✅ Adds space between buttons */
  margin-top: 20px;

  @media (max-width: 600px) {
    flex-direction: column; /* ✅ Stack buttons on mobile */
    width: 100%;
    align-items: center;
  }
`;
const StyledButton = styled(Button)`
  font-size: 20px;
  padding: 12px 24px;
  background-color: #d2b48c;
  border: none;
  color: #5c4033;
  font-weight: bold;
  border-radius: 8px;

  &:hover {
    background-color: #b89570;
  }
`;

const Home: FC = () => {
  return (
    <HomeContainer>
      <ImageContainer>
        <ImageShuffler category="food" />
        <ImageShuffler category="drink" />
      </ImageContainer>

      <Title>Welcome to Lina's Café</Title>
      <Subtitle>
        Experience the taste of authentic Lebanese Manakish and traditional
        drinks in a cozy atmosphere.
      </Subtitle>
      <ButtonContainer>
        <Link to="/menu">
          <StyledButton>Explore Menu</StyledButton>
        </Link>
        <Link to="/about">
          <StyledButton>About Us</StyledButton>
        </Link>
      </ButtonContainer>
    </HomeContainer>
  );
};

export default Home;
