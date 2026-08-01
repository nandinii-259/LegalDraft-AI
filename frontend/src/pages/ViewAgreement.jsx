import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import { ArrowLeft } from "lucide-react";
import { toast } from "react-toastify";

import { getDocument } from "../services/documentService";

function ViewAgreement() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [document, setDocument] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchDocument();
  }, []);

  const fetchDocument = async () => {
    try {
      const data = await getDocument(id);
      setDocument(data);
    } catch (error) {
      console.error(error);
      toast.error("Failed to load agreement.");
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="max-w-6xl mx-auto p-10">
        <h1 className="text-3xl font-bold">
          Loading...
        </h1>
      </div>
    );
  }

  if (!document) {
    return (
      <div className="max-w-6xl mx-auto p-10">
        <h1 className="text-3xl font-bold">
          Agreement Not Found
        </h1>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto p-10">

      <button
        onClick={() => navigate("/history")}
        className="flex items-center gap-2 mb-6 bg-slate-800 text-white px-4 py-2 rounded-lg"
      >
        <ArrowLeft size={18} />
        Back
      </button>

      <div className="bg-white shadow-lg rounded-xl p-8">

        <h1 className="text-3xl font-bold">
          {document.title}
        </h1>

        <div className="mt-3 flex gap-6 text-gray-600">

          <p>
            <strong>Type:</strong>{" "}
            {document.agreement_type}
          </p>

          <p>
            <strong>Date:</strong>{" "}
            {new Date(
              document.created_at
            ).toLocaleDateString()}
          </p>

        </div>

        <hr className="my-6" />

        <article className="prose max-w-none">
          <ReactMarkdown>
            {document.generated_content}
          </ReactMarkdown>
        </article>

      </div>

    </div>
  );
}

export default ViewAgreement;