import React from 'react';
import {
  BrowserRouter as Router, Routes, Route,
} from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { NonAuthRoutes, AuthRoutes, Roles } from './enums';

// Pages
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Search from './pages/Search';
import Match from './pages/Match';
import ManageEnterprise from './pages/ManageEnterprise';
import AddEnterprise from './pages/AddEnterprise';

// Components
import AuthRoute from './components/Auth/AuthRoute';
import HttpInterceptor from './components/HttpInterceptor';

// Styles
import './App.css';
import './assets/styles/style.scss';
import 'react-toastify/dist/ReactToastify.css';

const App: React.FC = () => {
  return (
    <Router>
      <HttpInterceptor />
      <ToastContainer
        theme="dark"
        position="top-right"
        autoClose={5000}
        hideProgressBar
        newestOnTop
        closeOnClick
        rtl={false}
        draggable={false}
        closeButton={false}
        className="toast-container"
      />
      <Routes>
        <Route path={AuthRoutes.blank} element={<AuthRoute component={Dashboard} accessibleTo={Roles.admin} url={AuthRoutes.blank} />} />
        <Route path={AuthRoutes.notDefinedRoute} element={<AuthRoute component={Dashboard} accessibleTo={Roles.admin} url={AuthRoutes.blank} />} />
        <Route path={NonAuthRoutes.login} element={<Login />} />
        <Route path={NonAuthRoutes.register} element={<Login />} />
        <Route path={AuthRoutes.dashboard} element={<AuthRoute component={Dashboard} accessibleTo={Roles.admin} />} />
        <Route path={AuthRoutes.search} element={<AuthRoute component={Search} accessibleTo={Roles.admin} />} />
        <Route path={AuthRoutes.match} element={<AuthRoute component={Match} accessibleTo={Roles.admin} />} />
        <Route path={AuthRoutes.manageEnterprise} element={<AuthRoute component={ManageEnterprise} accessibleTo={Roles.admin} />} />
        <Route path={AuthRoutes.addEnterprise} element={<AuthRoute component={AddEnterprise} accessibleTo={Roles.admin} />} />
      </Routes>
    </Router>
  );
};

export default App;
