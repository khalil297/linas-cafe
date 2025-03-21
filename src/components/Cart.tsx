import { FC, useState } from "react";
import { useCart } from "../context/CartContext.tsx";
import { db, collection, addDoc } from "../firebaseConfig";
import styled from "@emotion/styled";
import { Button, Input, message, Modal } from "antd";
import { ShoppingCartOutlined } from "@ant-design/icons";

const FloatingCartButton = styled(Button)`
  position: absolute;
  top: 15px;
  right: 20px;
  background-color: #d2b48c;
  color: white;
  border: none;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);

  &:hover {
    background-color: #b8977e;
  }
`;

const CartContainer = styled.div`
  padding: 20px;
  background: #fffaf0;
  border: 1px solid #d2b48c;
  border-radius: 8px;
  max-width: 350px;
  text-align: center;
  margin: auto;
`;

const CartItem = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px;
  border-bottom: 1px solid #d2b48c;

  &:last-child {
    border-bottom: none;
  }
`;

const TotalContainer = styled.div`
  font-size: 18px;
  font-weight: bold;
  color: #5c4033;
  margin-top: 15px;
  padding-top: 10px;
  border-top: 2px solid #d2b48c;
`;

const NameInput = styled(Input)`
  margin-top: 10px;
  width: 90%;
  padding: 8px;
`;

const ActionButton = styled(Button)`
  margin-top: 10px;
  background-color: #5c4033;
  color: white;
  border: none;
  width: 100%;

  &:hover {
    background-color: #8b5e3c;
  }
`;

const ClearButton = styled(Button)`
  margin-top: 10px;
  background-color: #d9534f;
  color: white;
  border: none;
  width: 100%;

  &:hover {
    background-color: #c9302c;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Cart: FC = () => {
  const { cart, clearCart } = useCart();
  const [customerName, setCustomerName] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const handleCheckout = async () => {
    if (cart.length === 0) {
      alert("Your cart is empty!");
      return;
    }

    if (!customerName.trim()) {
      alert("Please enter your name before confirming the order.");
      return;
    }

    try {
      const order = {
        customerName,
        items: cart.map((item) => ({
          name: item.name,
          quantity: item.quantity,
          price: item.price,
        })),
        total: totalPrice,
        timestamp: new Date().toISOString(),
      };

      await addDoc(collection(db, "orders"), order);
      console.log("Order placed successfully!");
      message.success("Order placed successfully!");
      setCustomerName("");
      clearCart();
      setTimeout(() => {
        setIsModalOpen(false);
      }, 1000);
    } catch (error) {
      console.error("Error placing order:", error);
      message.error("Failed to place order.");
    }
  };

  return (
    <>
      {cart.length > 0 && (
        <FloatingCartButton onClick={() => setIsModalOpen(true)}>
          <ShoppingCartOutlined style={{ fontSize: "24px" }} />
        </FloatingCartButton>
      )}

      {/* Cart Modal */}
      <Modal
        title="🛒 Your Cart"
        open={isModalOpen}
        onCancel={() => setIsModalOpen(false)}
        footer={null}
      >
        <CartContainer>
          {cart.length === 0 ? (
            <p>Your cart is empty</p>
          ) : (
            <>
              {cart.map((item) => (
                <CartItem key={item.id}>
                  <span>
                    {item.name} ({item.quantity})
                  </span>
                  <span>${(item.price * item.quantity).toFixed(2)}</span>
                </CartItem>
              ))}

              {/* ✅ Show total price */}
              <TotalContainer>Total: ${totalPrice.toFixed(2)}</TotalContainer>

              {/* Name Input */}
              <NameInput
                placeholder="Enter your name"
                value={customerName}
                onChange={(e) => setCustomerName(e.target.value)}
              />

              <ButtonContainer>
                <ActionButton onClick={handleCheckout}>
                  Confirm Order
                </ActionButton>
                <ClearButton onClick={clearCart}>Clear Cart</ClearButton>
              </ButtonContainer>
            </>
          )}
        </CartContainer>
      </Modal>
    </>
  );
};

export default Cart;
