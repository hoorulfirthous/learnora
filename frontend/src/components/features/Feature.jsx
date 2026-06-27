import "./Feature.css";

function Features() {

  const features = [
    {
      icon: "📄",
      title: "Smart Notes",
      description:
        "Generate concise notes from uploaded study materials."
    },

    {
      icon: "🧠",
      title: "Flashcards",
      description:
        "Create interactive flashcards for active learning."
    },

    {
      icon: "📝",
      title: "AI Quiz",
      description:
        "Generate MCQs and test your understanding instantly."
    },

    {
      icon: "💬",
      title: "AI Chat",
      description:
        "Ask questions from your uploaded documents."
    }
  ];

  return (
    <section className="features">

      <h2>Powerful Learning Tools</h2>

      <p className="features-subtitle">
        Everything you need to study smarter.
      </p>

      <div className="features-grid">

        {features.map((feature, index) => (

          <div
            className="feature-card"
            key={index}
          >

            <div className="feature-icon">
              {feature.icon}
            </div>

            <h3>{feature.title}</h3>

            <p>{feature.description}</p>

          </div>

        ))}

      </div>

    </section>
  );
}

export default Features;