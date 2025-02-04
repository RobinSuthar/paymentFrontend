import { BrowserRouter, Routes, Route } from "react-router-dom";

import Homepage from "./pages/Homepage.js";
import Signin from "./pages/Signin.js";
import Signup from "./pages/Signup.js";
import Sendpage from "./pages/Sendpage.js";
import { ThemeProvider } from "./components/theme-provider.js";
import { NavigationMenuDemo } from "./components/NavigationMenuDemo.js";
import { ModeToggle } from "./components/mode-toggle.js";

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <div className="flex justify-center mt-6">
          <NavigationMenuDemo></NavigationMenuDemo>
          <ModeToggle></ModeToggle>
        </div>
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
