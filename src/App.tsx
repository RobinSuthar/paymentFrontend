"use client";

import Lightingspeed from "./components/component/Lightingspeed";
import { FloatingNavDemo } from "./components/FloatingNavDemo";
import { MeteorsDemo } from "./components/MeteorsDemo";
import { MeteorsDemo2 } from "./components/MeteorsDemo2";
import { MeteorsDemo3 } from "./components/MeterorsDemo3";
import { ModeToggle } from "./components/mode-toggle";

import { ThemeProvider } from "./components/theme-provider";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <ModeToggle></ModeToggle>
      <div className="mb-24">
        <FloatingNavDemo></FloatingNavDemo>
      </div>
      <Lightingspeed></Lightingspeed>
      <div className="flex md:flex-row flex-col justify-center m-6 gap-9 ">
        <MeteorsDemo></MeteorsDemo>
        <MeteorsDemo2></MeteorsDemo2>
        <MeteorsDemo3></MeteorsDemo3>
      </div>
    </ThemeProvider>
  );
}

export default App;
