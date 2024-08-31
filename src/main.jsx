import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./component/App";
//import { CartProvider } from "./component/Context/CartContext";

// import WrapperComponent from "./demo2/WrapperComponent.jsx";
// import ChieldComponent from "./demo2/ChieldComponent.jsx";
// import MyComponent from "./context/MyComponent.jsx";
// import ContextProvider from "./context/MyContext.jsx";

// import Search from "./component/Search.jsx";

createRoot(document.getElementById("root")).render(
  <>
    <StrictMode>
      <App />
    </StrictMode>
  </>
);
