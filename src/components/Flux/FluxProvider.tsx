import { createContext, PropsWithChildren, useContext } from 'react';

type FluxContextValue = {
  gutter: number[] | number;
};

const FluxContext = createContext<FluxContextValue>({} as FluxContextValue);

export const useFlux = () => useContext(FluxContext);

const FluxProvider = ({ children, gutter = 0 }: PropsWithChildren<FluxContextValue>) => {
  console.log(gutter);
  return <FluxContext.Provider value={{ gutter }}>{children}</FluxContext.Provider>;
};

export default FluxProvider;
