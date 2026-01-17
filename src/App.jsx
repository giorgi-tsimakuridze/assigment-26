import { createBrowserRouter } from "react-router-dom";

import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import About from "./pages/About";
import Posts from "./pages/Posts";
import NewPost from "./pages/NewPost";

import { postsLoader } from "./loaders/postsLoader";
import { newPostAction } from "./actions/newPostAction";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "about", element: <About /> },
      {
        path: "posts",
        element: <Posts />,
        loader: postsLoader,
      },
      {
        path: "posts/new",
        element: <NewPost />,
        action: newPostAction,
      },
    ],
  },
]);

export default router;
