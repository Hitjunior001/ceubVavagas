import { useEffect, useState } from 'react';
import { getVagas } from '../src/firebaseStore';
import {signOut} from '../src/firebaseAuth';
import { useNavigate } from "react-router-dom";
import { getAuthenticatedTokenId } from "../src/firebaseAuth.js";
import axios from 'axios';
  
function Dashboard() {
  const [vagas, setVagas] = useState([]);
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const navigate = useNavigate()

  useEffect(() => {
    fetchVagas();
  }, []);

  const fetchVagas = async () => {
    try {
      const vagasData = await getVagas();
      setVagas(vagasData);
    } catch (error) {
      console.error("Erro ao buscar as vagas:", error);
    }
  };

  const handleSignOut = async () => {
    try {
      const signedOut = await signOut();
      if (signedOut) {
        navigate('/login')
      }
    } catch (error) {
      console.error("Erro ao fazer logout:", error);
    }
  };

  const handleCreateVaga = async () => {
    try {
    const token = await getAuthenticatedTokenId();
    const response = await axios.post(
      "http://localhost:8080/api/vagas/",
      { name, location },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
      console.log(response.data.message);
      // Atualize a lista de vagas após criar a vaga com sucesso
      fetchVagas();
    } catch (error) {
      console.error("Erro ao criar a vaga:", error);
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

      <h2>Criar Vaga</h2>
      <input
        type="text"
        placeholder="Nome"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Localização"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
      />
      <button onClick={handleCreateVaga}>Criar Vaga</button>
    </div>
  );
}

export default Dashboard;
