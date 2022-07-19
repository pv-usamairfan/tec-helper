import "./App.css";
import Header from "./Components/Header/Header";
import LandingPage from "./Components/Landing-Page/LandingPage";
import Login from "./Components/Login/Login";
import Registration from "./Components/Registration/Registration";
import { Route, Routes } from "react-router-dom";
function App() {
  return (
    <>
      <Header></Header>
      <Routes>
        <Route path="/" element={<LandingPage />}>
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Registration />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
