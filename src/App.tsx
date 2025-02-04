import { BrowserRouter, Routes, Route } from "react-router-dom";

import Homepage from "./pages/Homepage.js";
import Signin from "./pages/Signin.js";
import Signup from "./pages/Signup.js";
import Sendpage from "./pages/Sendpage.js";
import { ThemeProvider } from "./components/theme-provider.js";
import { NavigationMenuDemo } from "./components/NavigationMenuDemo.js";
import { ModeToggle } from "./components/mode-toggle.js";
import Navbar from "./components/component/Navbar.js";

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<Homepage />}></Route>
          <Route path="/signin" element={<Signin />} />
          <Route path="singup" element={<Signup />} />
          <Route path="send" element={<Sendpage />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
