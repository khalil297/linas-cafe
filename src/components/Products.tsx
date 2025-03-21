import { FC } from "react";
import { Card, Button, Badge } from "antd";
import { PlusCircleOutlined, MinusCircleOutlined } from "@ant-design/icons";
import styled from "@emotion/styled";
import { useCart } from "../context/CartContext.tsx";

const { Meta } = Card;

interface ProductProps {
  id: number;
  image: string;
  name: string;
  description: string;
  price: number;
}

const StyledCard = styled(Card)`
  width: 300px;
  border-radius: 8px;
  overflow: hidden;
  text-align: center;
  position: relative;

  img {
    height: 200px;
    object-fit: cover;
  }

  .ant-card-meta-title {
    font-size: 18px;
    font-weight: bold;
    color: #5c4033;
  }

  .ant-card-meta-description {
    font-size: 14px;
    color: #7b6d64;
  }

  .price {
    font-size: 16px;
    font-weight: bold;
    color: #d2b48c;
    margin-top: 8px;
  }

  .quantity-control {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 10px;
    gap: 10px; /* ✅ Keep even spacing between elements */
  }

  .quantity-badge-container {
    position: relative;
    width: 30px; /* ✅ Fixed width to prevent shifting */
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .ant-btn {
    background: none;
    border: none;
    color: #5c4033;
    font-size: 20px;
  }

  .ant-btn:hover {
    color: #d2b48c;
  }
`;

const QuantityBadge = styled(Badge)`
  .ant-badge-count {
    background-color: #5c4033 !important;
    color: white !important;
    font-size: 12px;
    font-weight: bold;
    height: 20px;
    min-width: 20px;
    border-radius: 10px;
  }
`;

const Product: FC<ProductProps> = ({ id, image, name, description, price }) => {
  const { cart, addToCart, removeFromCart } = useCart();

  const currentQuantity = cart.find((item) => item.id === id)?.quantity || 0;

  return (
    <StyledCard cover={<img src={image} alt={name} />} hoverable>
      <Meta title={name} description={description} />
      <p className="price">${price}</p>
      <div className="quantity-control">
        <Button
          icon={<MinusCircleOutlined />}
          onClick={() => removeFromCart(id)}
          aria-label={`Remove ${name} from cart`}
        />

        <div className="quantity-badge-container">
          {currentQuantity > 0 && <QuantityBadge count={currentQuantity} />}
        </div>

        <Button
          icon={<PlusCircleOutlined />}
          onClick={() => addToCart(id, name, price)}
          aria-label={`Add ${name} to cart`}
        />
      </div>
    </StyledCard>
  );
};

export default Product;
