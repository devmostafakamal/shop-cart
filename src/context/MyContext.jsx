import { createContext } from "react";
export const MyContext = createContext();
const ContextProvider = (props) => {
  return (
    <MyContext.Provider value={{ name: "mostafa", age: "23" }}>
      {props.children}
    </MyContext.Provider>
  );
};
export default ContextProvider;
