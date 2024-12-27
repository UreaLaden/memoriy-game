import { useContext } from "react";
import { Context, iContext } from "../models";

const useGameContext = () => {
  const context = useContext<iContext>(Context);
  if (!context) {
    throw new Error("Context failed to initialize");
  }
  return context;
};

export default useGameContext;
