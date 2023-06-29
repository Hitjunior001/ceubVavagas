import React, { useEffect, useState } from 'react';
import { getVagas } from '../src/firebaseStore';
import {signOut} from '../src/firebaseAuth';
import { useNavigate } from "react-router-dom";



function Dashboard() {
  const navigate = useNavigate()
  const [vagas, setVagas] = useState([]);

  useEffect(() => {
    fetchVagas();
  }, []);

  const fetchVagas = async () => {
    try {
      const vagasData = await getVagas();
      setVagas(vagasData);
    } catch (error) {
      console.error('Erro ao buscar as vagas:', error);
    }
  };

  const handleSignOut = async () => {
    try {
      const signedOut = await signOut();
      if (signedOut) {
        console.log("Deslogado com sucesso")
        navigate('/login')
      }
    } catch (error) {
      console.error('Erro ao fazer logout:', error);
    }
  };

  return (
    <div>
      <h1>Dashboard</h1>
      <button onClick={handleSignOut}>Logout</button>

      <h2>Vagas Disponíveis</h2>
      <ul>
        {vagas.map((vaga) => (
          <li key={vaga.idVaga}>
            <h3>{vaga.name}</h3>
            <p>{vaga.location}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Dashboard;
