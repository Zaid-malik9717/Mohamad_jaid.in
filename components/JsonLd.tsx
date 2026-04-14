export default function JsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Mohamad Jaid",
    url: "https://www.mohamadjaid.in",
    jobTitle: "AI/ML Engineer",
    description:
      "AI/ML engineer building intelligent, full-stack products. Researcher and developer.",
    alumniOf: "Geeta University",
    knowsAbout: [
      "Artificial Intelligence",
      "Machine Learning",
      "Python",
      "Large Language Models (LLMs)",
      "Generative AI",
      "Computer Vision",
      "Deep Learning",
      "Prompt Engineering",
    ],
    sameAs: [
      "https://linkedin.com/in/mohamad-jaid-305797323",
      "https://github.com/Zaid-malik9717",
      "https://mohamad-jaid-in.vercel.app",
    ],
    image: "https://www.mohamadjaid.in/Mohamad_Jaid.webp",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
