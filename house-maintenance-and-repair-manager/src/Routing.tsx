import './routing.css'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import HousesOverview from "./pages/HousesOverview";
import Login from "./pages/Login";
import PageTemplate from "./pages/PageTemplate";
import House from "./pages/House";

function Routing() {

  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<PageTemplate />}>
            <Route index element={<HousesOverview />} />
            <Route path="login" element={<Login />} />
              <Route path="house/:id" element={<House />} />
          </Route>
        </Routes>
      </BrowserRouter>
  )
}

export default Routing
