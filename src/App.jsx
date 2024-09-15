import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home"
import Layout from "./containers/PageLayout"
import Navbar from "./components/Navbar/Navbar";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Detail from "./pages/Detail";
import Cart from "./pages/Cart";
import Footer from "./components/Footer/Footer";
import Favorite from "./pages/Favorite";
import Search from "./pages/Search";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <>
      <Router>
        <div className="main">
          <Navbar />
          <Layout>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/products/:id" element={<Detail />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/favorite" element={<Favorite />} />
              <Route path="/products/search/:keyword" element={<Search />} />
              <Route path="*" element={<NotFound/>} />
            </Routes>
          </Layout>
          <Footer />
        </div>
      </Router>
    </>
  )
}

export default App
