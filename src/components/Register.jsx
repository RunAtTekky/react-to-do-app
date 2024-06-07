import React, { useState } from "react";
import { Link } from "react-router-dom";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(name, email, password);
  };
  return (
    <div className="login">
      <section>
        <form onSubmit={submitHandler}>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            type="name"
            placeholder="name"
          />
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            type="email"
            placeholder="email"
          />
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            type="password"
            placeholder="password"
          />
          <button type="submit">Register</button>
          <h4>Or</h4>
          <Link to="/login">Log In</Link>
        </form>
      </section>
    </div>
  );
};

export default Register;
