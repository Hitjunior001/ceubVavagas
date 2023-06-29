import { useState } from 'react';
import { signIn } from '../src/firebaseAuth';
import { useNavigate } from 'react-router-dom';

function SignInComponent() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const user = await signIn(email, password);
      if (user) {
        // Usuário autenticado com sucesso
        console.log('Login bem-sucedido:', user.uid);
        navigate('/'); // Redireciona para a página inicial (dashboard)
      } else {
        // Falha na autenticação
        console.log('Credenciais inválidas. Falha na autenticação.');
      }
    } catch (error) {
      console.error('Erro ao fazer login:', error);
    }
  };

  return (
    <div>
      <h1>Login</h1>
      <input
        type="text"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Senha"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Entrar</button>
    </div>
  );
}

export default SignInComponent;
