import "./AuthLayout.css";

function AuthLayout({ children }) {
  return (
    <div className="auth-layout">

      <div className="auth-overlay"></div>

      <div className="auth-card">

        {children}

      </div>

    </div>
  );
}

export default AuthLayout;