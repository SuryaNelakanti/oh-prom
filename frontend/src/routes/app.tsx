import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { Sidebar } from '../components/sidebar/sidebar';
import { ProjectList } from '../components/project-list/project-list';

export const App = () => {
  const location = useLocation();

  // Check if the current route is the home route ('/')
  const isHomeRoute = location.pathname === '/';

  return (
    <>
      <Sidebar />
      <div id="detail">
        {isHomeRoute && <ProjectList />}
        <Outlet />
      </div>
    </>
  );
};
