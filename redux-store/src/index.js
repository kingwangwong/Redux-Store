import React from "react";
import ReactDOM from "react-dom";
import { StrictMode } from "react";
import App from "./App";
import store from "./redux/store";
import { Provider } from "react-redux";
import { createRoot } from 'react-dom/client'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
)
// ReactDOM.render(
//   <React.StrictMode>
//     <Provider store={store}>
//       <App />
//     </Provider>
//   </React.StrictMode>,
//   document.getElementById("root")
// );
