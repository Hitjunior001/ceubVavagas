import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Dashboard, SignInComponent } from "./routes.js";
import { initializeFirebase } from "./firebase";
import { useEffect, useState } from "react";
import { getAuthenticatedUserId } from "./firebaseAuth";

import "./App.css";

// Inicializa o Firebase
initializeFirebase();

function App() {
  const [userAuthenticated, setUserAuthenticated] = useState(false);
  const [authenticationChecked, setAuthenticationChecked] = useState(false);

  useEffect(() => {
    checkUserAuthentication();
  }, []);

  const checkUserAuthentication = async () => {
    try {
      const userId = await getAuthenticatedUserId();
      console.log("Valor de userId:", userId); // Adicione este log

      if (userId) {
        setUserAuthenticated(true);
        console.log("Usuário autenticado");
      } else {
        setUserAuthenticated(false);
        console.log("Usuário não autenticado");
      }
    } catch (error) {
      setUserAuthenticated(false);
    } finally {
      setAuthenticationChecked(true);
    }
  };

  console.log("Valor de userAuthenticated:", userAuthenticated); // Adicione este log

  if (!authenticationChecked) {
    // Exibir um indicador de carregamento ou qualquer outra coisa enquanto a autenticação está sendo verificada
    return <div>Verificando autenticação...</div>;
  }

  return (
    <div className="container">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              userAuthenticated ? <Dashboard /> : <Navigate to="/login" />
            }
          />
          <Route path="/login" element={<SignInComponent />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
