import { FC } from "react";
import styled from "@emotion/styled";

// ✅ Theme Variables for Consistency
const theme = {
  primaryColor: "#d2b48c",
  textColor: "#5c4033",
  borderRadius: "8px",
  spacing: "20px",
};

// ✅ Styled Components for Layout
const AboutContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-image: url("/images/coffee.png"); /* ✅ Background Image */
  background-size: cover;
  background-position: center;
  text-align: center;
  color: white;
  padding: 40px;
`;

const ContentBox = styled.div`
  background: rgba(0, 0, 0, 0.7); /* ✅ Semi-transparent box */
  padding: 40px;
  border-radius: ${theme.borderRadius};
  max-width: 800px;
`;

const Title = styled.h1`
  font-size: 50px;
  font-weight: bold;
  text-shadow: 3px 3px 6px rgba(0, 0, 0, 0.6);
  margin-bottom: ${theme.spacing};
`;

const Subtitle = styled.p`
  font-size: 22px;
  line-height: 1.6;
  max-width: 700px;
  margin-bottom: ${theme.spacing};
`;

const About: FC = () => {
  return (
    <AboutContainer>
      <ContentBox>
        <Title>About Lina's Café</Title>
        <Subtitle>
          Lina's Café is a cozy Lebanese café specializing in traditional
          Manakish and authentic drinks. Our mission is to bring the warmth of
          Lebanese hospitality to every guest with high-quality, fresh
          ingredients.
        </Subtitle>
        <Subtitle>
          From the aromatic Zaatar Manakish to the rich Lebanese coffee, every
          bite and sip will transport you to the heart of Beirut. Join us and
          experience the flavors of Lebanon in a welcoming atmosphere.
        </Subtitle>
      </ContentBox>
    </AboutContainer>
  );
};

export default About;
