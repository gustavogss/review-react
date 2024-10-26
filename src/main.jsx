import { render } from "preact";
import { App } from "./app.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { TaskPage } from "./screens/task-page.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/task",
    element: <TaskPage />,
  },
]);

render(<RouterProvider router={router} />, document.getElementById("app"));
