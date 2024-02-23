import { createBrowserRouter, RouterProvider } from "react-router-dom";

import RootLayout from "./Root";

import MainPage from "./Components/MainPage/MainPage";
import ContactPage from "./Components/ContactPage/ContactPage";

import "./App.css";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        { path: "/", element: <MainPage /> },
        { path: "/kontakt", element: <ContactPage /> },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
