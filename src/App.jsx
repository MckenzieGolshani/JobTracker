// App.jsx

import { onAuthStateChanged, signOut } from 'firebase/auth';
import { useEffect, useState } from 'react';
import { auth } from './firebase';
import AuthPage from './AuthPage';

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, setUser);
    return () => unsub();
  }, []);

  if (!user) return <AuthPage />;

  return (
    <div>
      <p>Welcome, {user.email}</p>
      <button onClick={() => signOut(auth)}>Log Out</button>
    </div>
  );
}

export default App;
