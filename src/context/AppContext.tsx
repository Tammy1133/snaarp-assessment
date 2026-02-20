import { createContext, useContext, useState } from "react";
import type { ReactNode as RN } from "react";
import type { UserDetails } from "../types/usertype";

interface AppContextProps {
  user: UserDetails | null;
  setUser: (user: UserDetails) => void;
}

const AppContext = createContext<AppContextProps | undefined>(undefined);

interface AppProviderProps {
  children: RN;
}

export function AppProvider({ children }: AppProviderProps) {
  const [user, setUser] = useState<UserDetails | null>({
    firstname: "Chidinma",
    lastname: "Snaarp",
    email: "alm.lawson@example.com",
    code: "123456",
  });

  return (
    <AppContext.Provider value={{ user, setUser }}>
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("Not used within a provider");
  }
  return context;
}
