import { FC } from "react";
import Product from "../components/Products";
import styled from "@emotion/styled";
import Cart from "./Cart";

const MenuContainer = styled.div`
  padding: 20px;
  text-align: center;
`;

const SectionTitle = styled.h2`
  font-size: 24px;
  color: #5c4033;
  margin-bottom: 15px;
  border-bottom: 2px solid #d2b48c;
  display: inline-block;
  padding-bottom: 5px;
`;

const ProductsGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  margin-bottom: 40px;
`;

// Manakish Products
const manakishProducts = [
  {
    id: 1,
    image: "images/zaatar.png",
    name: "Zaatar",
    description: "Traditional Lebanese flatbread topped with zaatar.",
    price: 5.0,
  },
  {
    id: 2,
    image: "images/jebne.png",
    name: "Cheese",
    description: "Freshly baked flatbread with melted Akkawi cheese.",
    price: 6.0,
  },
  {
    id: 3,
    image: "images/sejouk.png",
    name: "Soujouk",
    description: "Spicy Armenian-style beef sausage on baked flatbread.",
    price: 7.0,
  },
  {
    id: 4,
    image: "images/keshek.png",
    name: "Kishk",
    description:
      "Fermented yogurt with onions and spices, giving a tangy, savory flavor.",
    price: 6.5,
  },
  {
    id: 5,
    image: "images/lahm-bi-ajeen.png",
    name: "Lahm Bi Ajeen",
    description:
      "Spiced minced lamb or beef with tomatoes and onions on flatbread.",
    price: 7.5,
  },
];

// Drinks Products
const drinksProducts = [
  {
    id: 6,
    image: "images/tea.png",
    name: "Tea",
    description: "Traditional Lebanese tea with mint.",
    price: 2.5,
  },
  {
    id: 7,
    image: "images/coffee.png",
    name: "Coffee",
    description: "Strong and flavorful coffee.",
    price: 3.0,
  },
  {
    id: 8,
    image: "images/hot-chocolate.png",
    name: "Hot chocolate",
    description: "Rich and creamy hot chocolate.",
    price: 3.5,
  },
];

const MenuPage: FC = () => {
  return (
    <MenuContainer>
      <Cart />
      {/* Manakish Section */}
      <SectionTitle>Manakish</SectionTitle>
      <ProductsGrid>
        {manakishProducts.map((product) => (
          <Product key={product.id} {...product} />
        ))}
      </ProductsGrid>

      {/* Drinks Section */}
      <SectionTitle>Drinks</SectionTitle>
      <ProductsGrid>
        {drinksProducts.map((product) => (
          <Product key={product.id} {...product} />
        ))}
      </ProductsGrid>
    </MenuContainer>
  );
};

export default MenuPage;
