import React from 'react'
import Signup from './Components/Auth/Signup';

import "bootstrap/dist/css/bootstrap.min.css"
import { AuthProvider } from './AuthContext';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from './Components/Auth/Login';
import ForgotPassword from "./Components/Auth/ForgetPassword"
import PrivateRouteProfile from './Components/Auth/PrivateRoute';
import PrivateRouteDashboard from './Components/GoogleDrive/PrivateRouteDashboard';



function App() {

  return (
    <Router>
      <AuthProvider>
        <Routes>
          {/* GoogleDrive */}
          <Route exact path="/" element={<PrivateRouteDashboard />} />
          <Route exact path="/folder/:folderId" element={<PrivateRouteDashboard />} />

          {/* Profile */}
          <Route path="/user" element={<PrivateRouteProfile />} />

          {/* Auth */}
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
        </Routes>
      </AuthProvider>
    </Router>
  );
}

export default App;
