function Dashboard({ user, onLogout }) {
  return (
    <div className="dashboard">
      <div className="dashboard-card">
        <h1>Welcome, {user.name}!</h1>

        <p>
          You are successfully logged in.
        </p>

        <div className="user-info">
          <p>
            <strong>Name:</strong> {user.name}
          </p>

          <p>
            <strong>Email:</strong> {user.email}
          </p>
        </div>

        <button onClick={onLogout}>
          Logout
        </button>
      </div>
    </div>
  );
}

export default Dashboard;