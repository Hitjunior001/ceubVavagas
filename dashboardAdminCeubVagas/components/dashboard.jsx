import { useEffect, useState } from 'react';
import {getFirestore, collection, addDoc, getDocs, doc, updateDoc } from 'firebase/firestore';
import { signOut,getAuth } from 'firebase/auth';


function Dashboard() {
  const [vagas, setVagas] = useState([]);
  const [usuarios, setUsuarios] = useState([]);
  const [novaVaga, setNovaVaga] = useState('');
  const [locationVaga, setLocationVaga] = useState('');


  const auth = getAuth();

  const firestore = getFirestore();

  useEffect(() => {
    // Função para carregar as vagas do banco de dados
    const carregarVagas = async () => {
      try {
        const vagasRef = collection(firestore, 'vagas');
        const vagasSnapshot = await getDocs(vagasRef);
        const vagasData = vagasSnapshot.docs.map((doc) => doc.data());
        setVagas(vagasData);
      } catch (error) {
        console.error('Erro ao carregar as vagas:', error);
      }
    };

    // Função para carregar os usuários do banco de dados
    const carregarUsuarios = async () => {
      try {
        const usuariosRef = collection(firestore, 'users');
        const usuariosSnapshot = await getDocs(usuariosRef);
        const usuariosData = usuariosSnapshot.docs.map((doc) => doc.data());
        setUsuarios(usuariosData);
      } catch (error) {
        console.error('Erro ao carregar os usuários:', error);
      }
    };

    carregarVagas();
    carregarUsuarios();
  }, [firestore]);

  const handleLogout = () => {
    // Função para realizar o logout do administrador
    // Substitua a chamada abaixo pela função correta para realizar o logout no Firebase Authentication
    signOut(auth)
      .then(() => {
        // Logout realizado com sucesso
        console.log('Logout realizado');
      })
      .catch((error) => {
        console.error('Erro ao realizar logout:', error);
      });
  };

  const handleNovaVagaSubmit = async (e) => {
    e.preventDefault();
  
    try {
      // Adicionar nova vaga ao banco de dados
      const vagaRef = collection(firestore, 'vagas');
      const docRef = await addDoc(vagaRef, {
        name: novaVaga,
        location: locationVaga,
        reservedBy: '',
        availability: true,
        isActive: true,
      });
  
      // Obter o ID do documento recém-criado
      const docId = docRef.id;
  
      // Atualizar o campo idVaga com o ID do documento
      const vagaDocRef = doc(firestore, 'vagas', docId);
      await updateDoc(vagaDocRef, {
        idVaga: docId
      });

      // Limpar o campo da nova vaga após a adição
      setNovaVaga('');
      setLocationVaga('');
    } catch (error) {
      console.error('Erro ao adicionar nova vaga:', error);
    }
  }

  return (
    <div>
      <h2>Vagas</h2>
      <ul>
        {vagas.map((vaga, index) => (
          <li key={index}>{vaga.name}</li>
        ))}
      </ul>

      <h2>Usuários</h2>
      <ul>
        {usuarios.map((usuario, index) => (
          <li key={index}>{usuario.name}</li>
        ))}
      </ul>

      <form onSubmit={handleNovaVagaSubmit}>
        <input
          type="text"
          value={novaVaga}
          onChange={(e) => setNovaVaga(e.target.value)}
          placeholder="Nome da nova vaga"
          required
        />
          <input
          type="text"
          value={locationVaga}
          onChange={(e) => setLocationVaga(e.target.value)}
          placeholder="Localização da vaga"
          required
        />
        <button type="submit">Criar Vaga</button>
      </form>

      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default Dashboard;
