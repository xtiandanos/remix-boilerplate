
export default function LoginPage() {
  return (
    <div className="login-container">
      <h2>Login</h2>
      <form className="login-form">
        <div className="form-group">
          Username:
          <input
            className="form-control"
            type="text"
          />
        </div>
        <div className="form-group">
         Password:
          <input
            className="form-control"
            type="password"
          />
        </div>
        <button className="btn-login" type="submit">Login</button>
      </form>
    </div>
  );
}
