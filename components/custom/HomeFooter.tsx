import { AboutResponsiveDrawer } from "@/components/custom/AboutResponsiveDrawer";

export const HomeFooter = () => {
  return (
    <footer className="flex flex-row w-full h-16 m-0 p-0 fixed bottom-0 left-0 justify-center">
      <div className="flex flex-col justify-center align-middle">
        <AboutResponsiveDrawer></AboutResponsiveDrawer>
      </div>
    </footer>
  );
};
