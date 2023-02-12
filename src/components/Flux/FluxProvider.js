import { createContext, useContext } from 'react';

const FluxContext = createContext();

export const useFlux = () => useContext(FluxContext);

const FluxProvider = ({ children, gutter = 0 }) => {
  console.log(gutter);
  return (
    <FluxContext.Provider value={{ gutter }}>{children}</FluxContext.Provider>
  );
};

export default FluxProvider;
