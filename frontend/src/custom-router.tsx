import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import { ErrorPage, ProjectDetails, Profile, App } from './routes';
import { LoginPage } from './routes/sign-in/login';
import { ProtectedRoute } from './routes/util-pages/protected-route';
import { LogoutPage } from './routes/sign-in/logout';

export const customRouter = createBrowserRouter([
  {
    path: '/',
    element: (
      <ProtectedRoute>
        <App />
      </ProtectedRoute>
    ),
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/projects/:projectId',
        element: (
          <ProtectedRoute>
            <ProjectDetails />
          </ProtectedRoute>
        ),
      },
      {
        path: '/users',
        element: (
          <ProtectedRoute>
            <Profile />
          </ProtectedRoute>
        ),
      },
    ],
  },
  {
    path: '/login',
    element: <LoginPage />,
  },
  {
    path: '/logout',
    element: <LogoutPage />,
  },
]);
