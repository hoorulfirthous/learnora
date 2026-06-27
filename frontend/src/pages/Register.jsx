import { useState } from "react";
import { Link } from "react-router-dom";
import AuthLayout from "../components/AuthLayout/AuthLayout";
import "../styles/Register.css";

function Register() {

  const [name,setName] = useState("");

  const [email,setEmail] = useState("");

  const [password,setPassword] =
    useState("");

  const [confirmPassword,
    setConfirmPassword] =
    useState("");

  const [error,setError] =
    useState("");

  const handleSubmit = (e)=>{

    e.preventDefault();

    if(
      !name ||
      !email ||
      !password ||
      !confirmPassword
    ){

      setError(
        "Please fill all fields"
      );

      return;
    }

    if(
      password !==
      confirmPassword
    ){

      setError(
        "Passwords do not match"
      );

      return;
    }

    setError("");

    console.log({
      name,
      email,
      password
    });
  };

  return(

    <AuthLayout>

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
          onChange={(e)=>
            setName(
              e.target.value
            )
          }
        />

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e)=>
            setEmail(
              e.target.value
            )
          }
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e)=>
            setPassword(
              e.target.value
            )
          }
        />

        <input
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e)=>
            setConfirmPassword(
              e.target.value
            )
          }
        />

        <button
          className="register-btn"
        >
          Create Account
        </button>

      </form>

      <p className="login-text">

        Already have an account?

        <Link to="/login">
          Login
        </Link>

      </p>

    </AuthLayout>
  );
}

export default Register;