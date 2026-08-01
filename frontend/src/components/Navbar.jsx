import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-white shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link
          to="/"
          className="text-2xl font-bold text-blue-600"
        >
          ⚖️ LegalDraft AI
        </Link>

        <div className="flex gap-6">
          <Link
            to="/"
            className="text-gray-700 hover:text-blue-600 transition"
          >
            Home
          </Link>

          <Link
            to="/generate"
            className="text-gray-700 hover:text-blue-600 transition"
          >
            Generate
          </Link>

          <Link
            to="/history"
            className="text-gray-700 hover:text-blue-600 transition"
          >
            History
          </Link>

          <Link
            to="/ai"
            className="text-gray-700 hover:text-blue-600 transition"
          >
            AI Workspace
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;