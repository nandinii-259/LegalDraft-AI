import { Link } from "react-router-dom";
import Button from "../components/Button";
import Card from "../components/Card";

function Home() {
  const features = [
    {
      icon: "📄",
      title: "Agreement Generator",
      description: "Generate professional legal agreements in seconds.",
    },
    {
      icon: "🤖",
      title: "AI Assistant",
      description: "Ask legal questions about your agreement.",
    },
    {
      icon: "📖",
      title: "Clause Explanation",
      description: "Understand every clause in simple language.",
    },
    {
      icon: "✨",
      title: "Agreement Improvement",
      description: "Improve clarity and legal wording using AI.",
    },
    {
      icon: "📝",
      title: "Summarization",
      description: "Get concise summaries of lengthy agreements.",
    },
    {
      icon: "⚠️",
      title: "Risk Analysis",
      description: "Identify risky clauses before signing.",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 py-20">

      {/* Hero Section */}
      <section className="text-center">
        <h1 className="text-6xl font-bold text-slate-800 leading-tight">
          Generate Professional
          <br />
          Legal Agreements with AI
        </h1>

        <p className="mt-6 text-xl text-slate-600 max-w-3xl mx-auto">
          Create legally structured agreements using Google Gemini AI.
          Save, manage and analyze your documents effortlessly.
        </p>

        <div className="mt-10 flex justify-center gap-4">
          <Link to="/generate">
            <Button>Generate Agreement</Button>
          </Link>

          <Link to="/history">
            <Button className="bg-slate-700 hover:bg-slate-800">
              View History
            </Button>
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="mt-24">
        <h2 className="text-4xl font-bold text-center text-slate-800">
          Features
        </h2>

        <p className="text-center text-slate-600 mt-4">
          Everything you need to draft, understand and improve legal documents.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {features.map((feature, index) => (
            <Card
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </section>

      {/* How It Works */}
      <section className="mt-24">
        <h2 className="text-4xl font-bold text-center text-slate-800">
          How It Works
        </h2>

        <p className="text-center text-slate-600 mt-4">
          Create legal agreements in just three simple steps.
        </p>

        <div className="grid md:grid-cols-3 gap-10 mt-14">
          <div className="text-center">
            <div className="w-16 h-16 mx-auto rounded-full bg-blue-600 text-white flex items-center justify-center text-2xl font-bold">
              1
            </div>

            <h3 className="mt-6 text-xl font-semibold">
              Fill the Form
            </h3>

            <p className="mt-3 text-slate-600">
              Enter agreement details using our easy-to-use form.
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 mx-auto rounded-full bg-blue-600 text-white flex items-center justify-center text-2xl font-bold">
              2
            </div>

            <h3 className="mt-6 text-xl font-semibold">
              AI Generates
            </h3>

            <p className="mt-3 text-slate-600">
              Google Gemini AI creates a professional legal draft instantly.
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 mx-auto rounded-full bg-blue-600 text-white flex items-center justify-center text-2xl font-bold">
              3
            </div>

            <h3 className="mt-6 text-xl font-semibold">
              Save & Download
            </h3>

            <p className="mt-3 text-slate-600">
              Store your agreement, revisit it later, or export it as a PDF.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;