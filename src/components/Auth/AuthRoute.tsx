import React from 'react';
import {
  Navigate,
} from 'react-router-dom';
import { Roles, AuthRoutes } from '../../enums';
import Layout from '../Layout';

interface AuthRouteProps {
  component: any;
  accessibleTo: Roles;
  url?: AuthRoutes
}

const AuthRoute: React.FC<AuthRouteProps> = ({ component, accessibleTo, url }) => {
  const Component = component;

  if (url && url === AuthRoutes.blank) {
    return <Navigate replace to={{ pathname: AuthRoutes.dashboard }} />;
  }

  return (
    <Layout>
      <Component />
    </Layout>
  );
};

export default AuthRoute;
