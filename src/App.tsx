import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Stays } from "./pages/Stays";
import { Hotel } from "./pages/Hotel";
import { SingIn } from "./pages/Sing-in/Sing-in";

export function App() {
  return (
    <Router>
      <Routes>
        <Route path="/stays" element={<Stays />} />
        <Route path="/hotel/:id" element={<Hotel />} />
        <Route path="/sing-in" element={<SingIn />} />
        <Route path="/*" element={<Stays />} />
      </Routes>
    </Router>
  );
}
