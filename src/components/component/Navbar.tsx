import { ModeToggle } from "../mode-toggle";
import { NavigationMenuDemo } from "../NavigationMenuDemo";

const Navbar = () => {
  return (
    <div className="flex justify-center mt-6 gap-1">
      <NavigationMenuDemo></NavigationMenuDemo>
      <ModeToggle></ModeToggle>
    </div>
  );
};

export default Navbar;
