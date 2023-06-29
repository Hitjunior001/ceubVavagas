import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Dashboard, SignInComponent } from './routes.js';
import { initializeFirebase } from './firebase';
import { getAuthenticatedUserId } from './firebaseAuth';
import {useEffect, useState} from 'react'

import './App.css';

// Inicializa o Firebase
initializeFirebase();

function App() {
  const [userAuthenticated, setUserAuthenticated] = useState(false);

  useEffect(() => {
    checkUserAuthentication();

  }, []);

  const checkUserAuthentication = async () => {
    try {
      const userId = await getAuthenticatedUserId();
      if (userId) {
        setUserAuthenticated(true);
        console.log(userAuthenticated)
      } else {
        setUserAuthenticated(false);
      }
    } catch (error) {
      setUserAuthenticated(false);
    }
  };
  return (
    <div className="container">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={userAuthenticated ? <Dashboard/> : <Navigate to="/login" />}
          />
          <Route path="/login" element={<SignInComponent />} />
          <Route path="/*" element={<Navigate to="/login" />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
