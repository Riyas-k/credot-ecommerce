import Home from "./pages/Home";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Shoes from "./pages/Shoes";
import BackPack from "./pages/BackPack";
import Cart from "./pages/Cart";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import { useSelector } from "react-redux";

function App() {
  const token = useSelector((state) => state.user?.token);
  return (
    <>
      <Router>
        {token && <Navbar />}
        
        <Routes>
          <Route
            path="/"
            element={token ? <Home /> : <Navigate to="/login" />}
          />
          <Route
            path="/shoes"
            element={token ? <Shoes /> : <Navigate to="/login" />}
          />
          <Route
            path="/bags"
            element={token ? <BackPack /> : <Navigate to="/login" />}
          />
          <Route
            path="/cart"
            element={token ? <Cart /> : <Navigate to="/login" />}
          />
          <Route
            path="/signup"
            element={!token ? <Signup /> : <Navigate to="/" />}
          />
          <Route
            path="/login"
            element={!token ? <Login /> : <Navigate to="/" />}
          />
        </Routes>
      </Router>
      {
        token && 
      <Footer />
      }
    </>
  );
}

export default App;
