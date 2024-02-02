import { NavLink, Outlet } from 'react-router-dom';

export const Layout = () => {
  return (
    <div>
      <ul>
        <li>
          <NavLink to="/">Домашня</NavLink>
        </li>
        <li>
          <NavLink to="/dogs">Колекція</NavLink>
        </li>
      </ul>
      <main>
        <Outlet />
      </main>
    </div>
  );
};
