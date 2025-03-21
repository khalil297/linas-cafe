import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Layout } from "antd";
import Navbar from "./components/Header";
import Home from "./pages/Home";
import MenuPage from "./components/Menu";
import About from "./pages/About";
import AppFooter from "./components/Footer";
import { CartProvider } from "./context/CartContext.tsx";

const { Content } = Layout;

function App() {
  return (
    <CartProvider>
      <Router>
        <Layout
          style={{
            minHeight: "100vh",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Navbar brandName="Lina’s Café" />

          <Content style={{ flex: 1, padding: "20px", textAlign: "center" }}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/menu" element={<MenuPage />} />
              <Route path="/about" element={<About />} />
            </Routes>
          </Content>

          <AppFooter />
        </Layout>
      </Router>
    </CartProvider>
  );
}

export default App;
