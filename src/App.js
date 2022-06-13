import { Route, Routes } from "react-router-dom";
import "App.css";
import Home from "pages/Home";
import { ROUTES } from "routes";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path={ROUTES.home} element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
