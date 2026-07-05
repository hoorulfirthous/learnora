import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthLayout from "../components/AuthLayout/AuthLayout";
import API from "../api/authApi";
import "../styles/Login.css";

function Login() {

  const navigate = useNavigate();

  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const [showPassword, setShowPassword] = useState(false);

  const [error, setError] = useState("");

  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {

    e.preventDefault();

    if (!email || !password) {

      setError("Please fill all fields");
      return;

    }

    setError("");

    setLoading(true);

    try {

      const response = await API.post(
        "/auth/login",
        {
          email,
          password,
        }
      );

      // Save JWT Token
      localStorage.setItem(
        "token",
        response.data.access_token
      );

      alert("Login Successful!");

      navigate("/dashboard");

    }

    catch (err) {

      if (err.response) {

        setError(
          err.response.data.detail
        );

      }

      else {

        setError(
          "Server not responding"
        );

      }

    }

    finally {

      setLoading(false);

    }

  };

  return (

    <AuthLayout>

      <h1>
        Welcome Back 👋
      </h1>

      <p>
        Login to continue your learning journey.
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
          onChange={(e) =>
            setEmail(e.target.value)
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
            onChange={(e) =>
              setPassword(e.target.value)
            }
          />

          <button
            type="button"
            className="eye-btn"
            onClick={() =>
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
          type="submit"
          className="login-btn"
          disabled={loading}
        >
          {
            loading
              ? "Logging in..."
              : "Login"
          }
        </button>

      </form>

    </AuthLayout>

  );

}

export default Login;