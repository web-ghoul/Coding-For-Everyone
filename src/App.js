import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Home/Home"
import Topics from "./Components/Topics/Topics"
import NumSys from "./Components/Topics/NumSys/NumSys"
import styles from "./Framework/CSS/Framework.modulus.css"
import Main from "./Components/Main/Main"
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />}>
          <Route index element={<Home />} />
          <Route path ="home" element={<Home />} />
          <Route path ="topics" element={<Topics />} />
          <Route path ="NumSys" element={<NumSys />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
