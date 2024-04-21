import React, { ReactNode } from 'react';
import { Navigate } from 'react-router-dom';
import { TokenManager } from '../../utils/token-manager';

type Props = {
  children: ReactNode;
};

export const ProtectedRoute: React.FC<Props> = ({ children }) => {
  if (!TokenManager.getAccessToken()) {
    // user is not authenticated
    return <Navigate to="/login" />;
  }

  return children;
};
