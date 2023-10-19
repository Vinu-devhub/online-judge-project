import { Route, Routes } from "react-router-dom";
import Header from "./components/views/Header";
import Home from "./pages/Home";
import { default as Login } from "./pages/Login";
import Profile from "./pages/Profile";
import Register from "./pages/Register";
import("preline");

function App() {
  return (
    <Routes>
      <Route element={<Header />}>
        <Route path="/" element={<Home />} />
        <Route path="profile" element={<Profile />} />
        <Route path="register" element={<Register />} />
        <Route path="login" element={<Login />} />
      </Route>
    </Routes>
  );
}

export default App;
