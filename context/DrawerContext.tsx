import { useContext, createContext, useState } from "react";

type DrawerContextType = {
  drawerOpen: boolean;
  toggleDrawer: () => void;
};

const drawerContextDefaultValues: DrawerContextType = {
  drawerOpen: false,
  toggleDrawer: () => {},
};

const DrawerContext = createContext<DrawerContextType>(
  drawerContextDefaultValues,
);

interface DrawerContextProps {
  children: React.ReactNode;
}

export const DrawerContextProvider = ({ children }: DrawerContextProps) => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const toggleDrawer = () => setDrawerOpen(prev => !prev);

  return (
    <DrawerContext.Provider value={{ drawerOpen, toggleDrawer }}>
      {children}
    </DrawerContext.Provider>
  );
};

export const useDrawer = () => {
  return useContext(DrawerContext);
};
