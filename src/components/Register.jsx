export default function Register({ onSwitchToLogin }) {
  return (
    <div className="form-box register">
      <h2>Register</h2>
      <form>
        <div className="input-box">
          <input type="text" required />
          <label>Username</label>
        </div>

        <div className="input-box">
          <input type="email" required />
          <label>Email</label>
        </div>

        <div className="input-box">
          <input type="password" required />
          <label>Password</label>
        </div>

    
        <div className="remember-forgot">
          <label>
            <input type="checkbox" required />
            I agree to the terms & conditions
          </label>
        </div>

        <button type="submit" className="btn">
          Register
        </button>

        <div className="login-register">
          <p>
            Already have an account?{" "}
            <a href="#" onClick={onSwitchToLogin}>
              Login
            </a>
          </p>
        </div>
      </form>
    </div>
  );
}
