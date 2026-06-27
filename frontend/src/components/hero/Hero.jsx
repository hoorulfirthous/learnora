import "../hero/Hero.css";

function Hero() {

  return(

    <section className="hero">

      <div className="hero-left">

        <span className="tag">

          AI Powered Learning Assistant

        </span>

        <h1>

          Learn Smarter
          <br/>

          with Learnora AI

        </h1>

        <p>

          Upload your study materials
          and instantly generate notes,
          flashcards, quizzes and
          AI powered answers.

        </p>

        <div className="hero-buttons">

          <button
          className="btn-primary"
          >
            Get Started
          </button>

          <button
          className="btn-secondary"
          >
            Explore Features
          </button>

        </div>

      </div>

      <div className="hero-right">

        <div className="brain-circle">

          🧠

        </div>

      </div>

    </section>

  );
}

export default Hero;