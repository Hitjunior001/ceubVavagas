import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Dashboard, SignInComponent } from './routes.js';
import { getCurrentUser, checkAdmin } from '../src/firebase';

import './App.css';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkAdminAuthentication = async () => {
      const currentUser = await getCurrentUser();
      if (currentUser) {
        const isAdminAuthenticated = await checkAdmin(currentUser.uid);
        setIsAuthenticated(isAdminAuthenticated);
      }
  
      setLoading(false);
    };
  
    checkAdminAuthentication();
  }, []);

  if (loading) {
    return <div>Loading...</div>; // Pode exibir um spinner de carregamento enquanto verifica a autenticação
  }

  return (
    <div className="container">
      <BrowserRouter>
        <Routes>
          {isAuthenticated ? (
            <Route path="/" element={<Dashboard />} />
          ) : (
            <Route path="/login" element={<SignInComponent />} />
          )}
          {/* Redireciona para a tela de login se nenhuma rota corresponder */}
          <Route path="/*" element={<Navigate to="/login" />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
