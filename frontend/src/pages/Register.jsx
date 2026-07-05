import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import API from "../api/authApi";
import "../styles/Register.css";

function Register() {

  const navigate = useNavigate();

  const [name, setName] = useState("");

  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const [confirmPassword, setConfirmPassword] = useState("");

  const [error, setError] = useState("");

  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {

    e.preventDefault();

    if (
      !name ||
      !email ||
      !password ||
      !confirmPassword
    ) {

      setError("Please fill all fields");
      return;

    }

    if (password !== confirmPassword) {

      setError("Passwords do not match");
      return;

    }

    setError("");

    setLoading(true);

    try {

      const response = await API.post(
        "/auth/register",
        {
          username: name,
          email,
          password,
        }
      );

      alert(
        response.data.message ||
        "Registration Successful!"
      );

      navigate("/login");

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

    <div className="register">

      <div className="register-card">

        <h1>
          Create Account ✨
        </h1>

        <p>
          Start learning smarter
          with Learnora AI.
        </p>

        {
          error &&
          <p className="error">
            {error}
          </p>
        }

        <form onSubmit={handleSubmit}>

          <input
            type="text"
            placeholder="Full Name"
            value={name}
            onChange={(e) =>
              setName(e.target.value)
            }
          />

          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) =>
              setEmail(e.target.value)
            }
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) =>
              setPassword(e.target.value)
            }
          />

          <input
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) =>
              setConfirmPassword(
                e.target.value
              )
            }
          />

          <button
            type="submit"
            className="register-btn"
            disabled={loading}
          >
            {
              loading
                ? "Creating Account..."
                : "Create Account"
            }
          </button>

        </form>

        <p className="login-text">

          Already have an account?

          <Link to="/login">
            Login
          </Link>

        </p>

      </div>

    </div>

  );

}

export default Register;