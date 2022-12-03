import './App.css'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import TaskOverview from "./pages/TaskOverview";
import Login from "./pages/Login";
import PageTemplate from "./pages/PageTemplate";

function App() {

  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<PageTemplate />}>
            <Route index element={<TaskOverview />} />
            <Route path="login" element={<Login />} />
          </Route>
        </Routes>
      </BrowserRouter>
  )
}

export default App
