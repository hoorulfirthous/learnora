import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        <h2 className="footer-logo">
          Learnora AI
        </h2>

        <p className="footer-description">
          AI-Powered Learning Assistant for smarter
          studying and better learning.
        </p>

        <div className="footer-features">

          <div className="feature-item">
            <span>📄</span>
            <p>Notes</p>
          </div>

          <div className="feature-item">
            <span>🧠</span>
            <p>Flashcards</p>
          </div>

          <div className="feature-item">
            <span>📝</span>
            <p>Quiz</p>
          </div>

          <div className="feature-item">
            <span>💬</span>
            <p>AI Chat</p>
          </div>

        </div>

        <div className="footer-links">

          <a href="#">About</a>

          <span>•</span>

          <a href="#">Contact</a>

          <span>•</span>

          <a href="#">Support</a>

          <span>•</span>

          <a href="#">Privacy Policy</a>

          <span>•</span>

          <a href="#">Terms of Service</a>

        </div>

        <div className="footer-bottom">
          © 2026 Learnora AI. All rights reserved.
        </div>

      </div>

    </footer>
  );
}

export default Footer;