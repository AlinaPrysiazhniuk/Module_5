import { Outlet, NavLink } from 'react-router-dom';

export const Layout = () => {
  return (
    <div>
      <header>
        <nav>
          <ul>
            <li>
              <NavLink to="/">Домашня</NavLink>
            </li>
            <li>
              <NavLink to="/dogs">Колекція</NavLink>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
};
