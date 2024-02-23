import { Drawer } from "../ui/drawer";
import { AboutResponsiveDrawer } from "../custom/AboutResponsiveDrawer";

export const Footer = () => {
  return (
    <footer className="flex flex-row w-full h-10 m-0 p-0 fixed bottom-0 left-0 justify-center">
      <AboutResponsiveDrawer></AboutResponsiveDrawer>
    </footer>
  );
};
