import { useState } from "react";
import Home from "./pages/Home";
import AllProjectsPage from "./pages/AllProjectsPage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import "./css/index.css";

function App() {
  const [count, setCount] = useState(0);
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/all-projects",
      element: <AllProjectsPage />,
    },
  ]);

  return (
    <main className="w-full text-white">
      <div className="fixed top-0 left-0 -z-10 w-screen h-screen bg-gradient-to-b from-slate-900 to-slate-800"></div>
      <div className="max-w-6xl mx-auto">
        {/* <Home /> */}
        {/* <AllProjectsPage /> */}
        <RouterProvider router={router} />
      </div>
    </main>
  );
}

export default App;
