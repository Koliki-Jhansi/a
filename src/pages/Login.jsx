function Login() {
  return (
    <div style={{ padding: "40px" }}>
      <h2>Login</h2>
      <form>
        <input type="text" placeholder="Username" /><br /><br />
        <input type="password" placeholder="Password" /><br /><br />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
