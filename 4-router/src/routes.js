import Start from "./components/Start";
import Blog from "./components/Blog";
import Post from "./components/Post";

export const routes = [
  { path: "/", component: Start },
  { path: "/blog", component: Blog },
  { path: "/post/:id", component: Post },
];
