// context.ts
import { createContext } from "react";

const AppContext = createContext<{
  fetchUserDetail: () => void;
  user: any;
  setUser: React.Dispatch<React.SetStateAction<any>>;
}>({
  fetchUserDetail: () => {},
  user: null,
  setUser: () => {},
});

export default AppContext;
