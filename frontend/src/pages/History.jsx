import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Trash2, Eye } from "lucide-react";
import { toast } from "react-toastify";

import {
  getDocuments,
  deleteDocument,
} from "../services/documentService";

function History() {
  const [documents, setDocuments] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchDocuments = async () => {
    try {
      const data = await getDocuments();
      setDocuments(data);
    } catch (error) {
      console.error(error);
      toast.error("Failed to load agreements.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDocuments();
  }, []);

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Delete this agreement?"
    );

    if (!confirmDelete) return;

    try {
      await deleteDocument(id);

      setDocuments((prev) =>
        prev.filter((doc) => doc.id !== id)
      );

      toast.success("Agreement deleted.");
    } catch (error) {
      console.error(error);
      toast.error("Delete failed.");
    }
  };

  if (loading) {
    return (
      <div className="max-w-6xl mx-auto p-10">
        <h1 className="text-3xl font-bold">
          Agreement History
        </h1>

        <p className="mt-6">Loading...</p>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto p-10">

      <h1 className="text-3xl font-bold mb-8">
        Agreement History
      </h1>

      {documents.length === 0 ? (
        <p>No agreements found.</p>
      ) : (
        <div className="overflow-x-auto">

          <table className="w-full border rounded-lg overflow-hidden">

            <thead className="bg-slate-100">

              <tr>

                <th className="p-4 text-left">ID</th>

                <th className="p-4 text-left">Title</th>

                <th className="p-4 text-left">Type</th>

                <th className="p-4 text-left">Created</th>

                <th className="p-4 text-center">
                  Actions
                </th>

              </tr>

            </thead>

            <tbody>

              {documents.map((doc) => (

                <tr
                  key={doc.id}
                  className="border-t"
                >

                  <td className="p-4">
                    {doc.id}
                  </td>

                  <td className="p-4">
                    {doc.title}
                  </td>

                  <td className="p-4">
                    {doc.agreement_type}
                  </td>

                  <td className="p-4">
                    {new Date(
                      doc.created_at
                    ).toLocaleDateString()}
                  </td>

                  <td className="p-4">

                    <div className="flex justify-center gap-3">

                      <Link
                        to={`/agreement/${doc.id}`}
                        className="bg-blue-600 text-white px-3 py-2 rounded-lg flex items-center gap-2"
                      >
                        <Eye size={18} />
                        View
                      </Link>

                      <button
                        onClick={() =>
                          handleDelete(doc.id)
                        }
                        className="bg-red-600 text-white px-3 py-2 rounded-lg flex items-center gap-2"
                      >
                        <Trash2 size={18} />
                        Delete
                      </button>

                    </div>

                  </td>

                </tr>

              ))}

            </tbody>

          </table>

        </div>
      )}

    </div>
  );
}

export default History;