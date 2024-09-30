import React from "react";
import ReactDOM from "react-dom/client"; // Make sure this is uncommented
import "./index.css";
import App from "./App";
// import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import { store } from "./redux/store";
// Create the root element for React rendering
const root = ReactDOM.createRoot(document.getElementById("root")); // Create root


root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

// import React from "react";
// // import ReactDOM from "react-dom/client";
// import "./index.css";
// // import App from "./App";
// import reportWebVitals from "./reportWebVitals";
// // import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import App from "./App";
// // import Form from "./component/form";
// // import Calculator from "./component/calculator";

// // const router = createBrowserRouter([
// //   {
// //     path: "/",
// //     element: <App />,
// //   },

// //   {
// //     path: "/form",
// //     element: <Form />,
// //   },
// //   {
// //     path: "/calculator",
// //     element: <Calculator />,
// //   },
// // ]);
// // const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <React.StrictMode>
// <App/>
//   </React.StrictMode>
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
