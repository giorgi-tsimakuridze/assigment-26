import { NavLink, Outlet } from "react-router-dom";

export default function MainLayout() {
  return (
    <>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/posts">Posts</NavLink>
      </nav>

      <main>
        <Outlet />
      </main>
    </>
  );
}
