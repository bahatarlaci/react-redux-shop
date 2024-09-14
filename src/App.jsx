import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home"
import Layout from "./containers/PageLayout"
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <>
      <Layout>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </Router>
      </Layout>
    </>
  )
}

export default App
