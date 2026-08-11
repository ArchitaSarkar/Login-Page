import { useState } from "react";

import Login from "./components/Login";
import Register from "./components/Register";
import Dashboard from "./components/Dashboard";

function App() {
  const [user, setUser] = useState(null);
  const [isLogin, setIsLogin] = useState(true);

  const handleLogin = (userData) => {
    setUser(userData);
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    setUser(null);
    setIsLogin(true);
  };

  if (user) {
    return (
      <Dashboard
        user={user}
        onLogout={handleLogout}
      />
    );
  }

  return isLogin ? (
    <Login
      onLogin={handleLogin}
      onSwitch={() => setIsLogin(false)}
    />
  ) : (
    <Register
      onRegister={handleLogin}
      onSwitch={() => setIsLogin(true)}
    />
  );
}

export default App;