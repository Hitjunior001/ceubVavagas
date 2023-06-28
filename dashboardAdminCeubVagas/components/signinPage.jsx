import { useState } from 'react';
import { signInAdmin } from '../src/firebaseStore';

function SignInComponent() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const handleLogin = async () => {
    try {
      const isAdminAuthenticated = await signInAdmin(email, senha);

      if (isAdminAuthenticated) {
        // Usuário é um administrador
        console.log('Login bem-sucedido como administrador');
      } else {
        // Usuário não é um administrador
        console.log('Usuário não é um administrador');
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
        value={senha}
        onChange={(e) => setSenha(e.target.value)}
      />
      <button onClick={handleLogin}>Entrar</button>
    </div>
  );
}

export default SignInComponent;
