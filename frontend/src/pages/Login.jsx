import { useState } from "react";
import AuthLayout from "../components/AuthLayout/AuthLayout";
import "../styles/Login.css";

function Login() {

  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const [showPassword, setShowPassword] =
    useState(false);

  const [error, setError] = useState("");

  const handleSubmit = (e) => {

    e.preventDefault();

    if (!email || !password) {

      setError(
        "Please fill all fields"
      );

      return;
    }

    setError("");

    console.log(email);
    console.log(password);
  };

  return (

    <AuthLayout>

      <h1>
        Welcome Back 👋
      </h1>

      <p>
        Login to continue your
        learning journey.
      </p>

      {
        error &&
        <p className="error">
          {error}
        </p>
      }

      <form onSubmit={handleSubmit}>

        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e)=>
            setEmail(
              e.target.value
            )
          }
        />

        <div className="password-box">

          <input
            type={
              showPassword
              ? "text"
              : "password"
            }
            placeholder="Enter Password"
            value={password}
            onChange={(e)=>
              setPassword(
                e.target.value
              )
            }
          />

          <button
            type="button"
            className="eye-btn"
            onClick={()=>
              setShowPassword(
                !showPassword
              )
            }
          >
            {
              showPassword
              ? "🙈"
              : "👁️"
            }
          </button>

        </div>

        <div className="login-options">

          <a href="#">
            Forgot Password?
          </a>

        </div>

        <button
          className="login-btn"
        >
          Login
        </button>

      </form>

    </AuthLayout>
  );
}

export default Login;