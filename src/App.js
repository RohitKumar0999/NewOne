
import "bootstrap/dist/css/bootstrap.min.css";
import "@coreui/coreui/dist/css/coreui.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "react-circular-progressbar/dist/styles.css";

// import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Admin from "./Pages/Admin";
import Customer from "./Pages/Customer";
import Engineer from "./Pages/Engineer";
import Auth from "./hoc/auth";
import Login from "./Login";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route
            path="/admin"
            element={
              <Auth>
                <Admin />
              </Auth>
            }
          />
          <Route
            path="/customer"
            element={
              <Auth>
                <Customer />
              </Auth>
            }
          />
          <Route
            path="/engineer"
            element={
              <Auth>
                <Engineer />
              </Auth>
            }
          />
        </Routes>
      </Router>
    </div>
  );
}
export default App;
