import { FC } from "react";
import { Layout, Menu } from "antd";
import styled from "@emotion/styled";
import { Link, useLocation } from "react-router-dom";

const { Header } = Layout;

interface NavbarProps {
  brandName?: string;
}

const StyledHeader = styled(Header)`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #5c4033; /* Classy coffee brown */
  padding: 0;
`;

const StyledMenu = styled(Menu)`
  background: transparent;
  border: none;
  display: flex;
  justify-content: center;
  width: 100%;

  .ant-menu-item {
    color: white;
    font-size: 18px;
    flex: 1;
    text-align: center;
    border-bottom: none !important;
    outline: none !important;
    position: relative;
  }

  .ant-menu-item a {
    color: white;
    text-decoration: none !important;
    outline: none !important;
    border: none !important;
    box-shadow: none !important;
  }

  .ant-menu-item:hover {
    background: rgba(255, 255, 255, 0.2);
  }

  .ant-menu-item::after {
    content: none !important;
  }

  .ant-menu-item-selected {
    background: transparent !important;
    border-bottom: 3px solid #d2b48c !important;
  }

  .ant-menu-item-selected a {
    color: #d2b48c !important;
    font-weight: bold;
  }

  .ant-menu-item:focus,
  .ant-menu-item:active,
  .ant-menu-item a:focus,
  .ant-menu-item a:active,
  a:focus,
  a:active {
    outline: none !important;
    text-decoration: none !important;
    border: none !important;
    box-shadow: none !important;
  }

  *:focus {
    outline: none !important;
    box-shadow: none !important;
  }

  a:-webkit-any-link {
    text-decoration: none !important;
    outline: none !important;
    border-bottom: none !important;
  }
`;

const Navbar: FC<NavbarProps> = ({ brandName = "Lina's Café" }) => {
  const location = useLocation();

  return (
    <StyledHeader>
      <StyledMenu
        theme="dark"
        mode="horizontal"
        selectedKeys={[location.pathname]}
      >
        <div
          style={{
            color: "white",
            fontSize: "22px",
            fontWeight: "bold",
          }}
        >
          {brandName}
        </div>
        <Menu.Item key="/">
          <Link to="/">Home</Link>
        </Menu.Item>
        <Menu.Item key="/menu">
          <Link to="/menu">Menu</Link>
        </Menu.Item>
        <Menu.Item key="/about">
          <Link to="/about">About</Link>
        </Menu.Item>
      </StyledMenu>
    </StyledHeader>
  );
};

export default Navbar;
