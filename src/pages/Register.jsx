function Register() {
  return (
    <div style={{ padding: "40px" }}>
      <h2>Create Account</h2>

      <form>
        <input
          type="text"
          placeholder="Full Name"
          required
        /><br /><br />

        <input
          type="email"
          placeholder="Email"
          required
        /><br /><br />

        <input
          type="password"
          placeholder="Password"
          required
        /><br /><br />

        <input
          type="password"
          placeholder="Confirm Password"
          required
        /><br /><br />

        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default Register;
