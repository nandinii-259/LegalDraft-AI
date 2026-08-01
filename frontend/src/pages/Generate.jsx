import { useState } from "react";
import ReactMarkdown from "react-markdown";
import { toast } from "react-toastify";
import {
  Copy,
  RotateCcw,
  Download,
  Printer,
} from "lucide-react";

import Button from "../components/Button";
import {
  generateAgreement,
  downloadPDF,
} from "../services/documentService";

function Generate() {
  const [formData, setFormData] = useState({
    agreement_type: "Rental Agreement",
    landlord_name: "",
    tenant_name: "",
    property_address: "",
    monthly_rent: "",
    security_deposit: "",
    lease_start_date: "",
    lease_end_date: "",
  });

  const [generatedAgreement, setGeneratedAgreement] = useState("");
  const [documentId, setDocumentId] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleGenerate = async (e) => {
    e.preventDefault();

    setLoading(true);

    try {
      const payload = {
        agreement_type: formData.agreement_type,
        title: "Rental Agreement",
        form_data: {
          landlord_name: formData.landlord_name,
          tenant_name: formData.tenant_name,
          property_address: formData.property_address,
          monthly_rent: formData.monthly_rent,
          security_deposit: formData.security_deposit,
          lease_start_date: formData.lease_start_date,
          lease_end_date: formData.lease_end_date,
        },
      };

      const response = await generateAgreement(payload);

      setGeneratedAgreement(response.generated_content);
      setDocumentId(response.document_id);

      toast.success("Agreement generated successfully!");
    } catch (error) {
      console.error(error);
      toast.error("Failed to generate agreement.");
    } finally {
      setLoading(false);
    }
  };

  const copyAgreement = async () => {
    if (!generatedAgreement) return;

    await navigator.clipboard.writeText(generatedAgreement);
    toast.success("Agreement copied!");
  };

  const regenerateAgreement = async () => {
    if (loading) return;

    await handleGenerate({
      preventDefault: () => {},
    });
  };

  const handleDownload = async () => {
    if (!documentId) return;

    try {
      const pdf = await downloadPDF(documentId);

      const url = window.URL.createObjectURL(
        new Blob([pdf], { type: "application/pdf" })
      );

      const link = document.createElement("a");

      link.href = url;
      link.download = `agreement_${documentId}.pdf`;

      document.body.appendChild(link);

      link.click();

      link.remove();

      window.URL.revokeObjectURL(url);

      toast.success("PDF downloaded.");
    } catch (error) {
      console.error(error);
      toast.error("Download failed.");
    }
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="max-w-6xl mx-auto py-12 px-6">
      <h1 className="text-4xl font-bold text-slate-800 mb-8">
        Generate Agreement
      </h1>

      <form
        onSubmit={handleGenerate}
        className="bg-white rounded-xl shadow-lg p-8 space-y-6"
      >
        <div>
          <label className="block mb-2 font-medium">
            Agreement Type
          </label>

          <select
            name="agreement_type"
            value={formData.agreement_type}
            onChange={handleChange}
            className="w-full border rounded-lg p-3"
          >
            <option>Rental Agreement</option>
            <option>Employment Agreement</option>
            <option>Non Disclosure Agreement (NDA)</option>
          </select>
        </div>

        <div>
          <label className="block mb-2 font-medium">
            Landlord Name
          </label>

          <input
            type="text"
            name="landlord_name"
            value={formData.landlord_name}
            onChange={handleChange}
            className="w-full border rounded-lg p-3"
            required
          />
        </div>

        <div>
          <label className="block mb-2 font-medium">
            Tenant Name
          </label>

          <input
            type="text"
            name="tenant_name"
            value={formData.tenant_name}
            onChange={handleChange}
            className="w-full border rounded-lg p-3"
            required
          />
        </div>

        <div>
          <label className="block mb-2 font-medium">
            Property Address
          </label>

          <textarea
            rows="3"
            name="property_address"
            value={formData.property_address}
            onChange={handleChange}
            className="w-full border rounded-lg p-3"
            required
          />
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="block mb-2 font-medium">
              Monthly Rent
            </label>

            <input
              type="number"
              name="monthly_rent"
              value={formData.monthly_rent}
              onChange={handleChange}
              className="w-full border rounded-lg p-3"
              required
            />
          </div>

          <div>
            <label className="block mb-2 font-medium">
              Security Deposit
            </label>

            <input
              type="number"
              name="security_deposit"
              value={formData.security_deposit}
              onChange={handleChange}
              className="w-full border rounded-lg p-3"
              required
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="block mb-2 font-medium">
              Lease Start Date
            </label>

            <input
              type="date"
              name="lease_start_date"
              value={formData.lease_start_date}
              onChange={handleChange}
              className="w-full border rounded-lg p-3"
              required
            />
          </div>

          <div>
            <label className="block mb-2 font-medium">
              Lease End Date
            </label>

            <input
              type="date"
              name="lease_end_date"
              value={formData.lease_end_date}
              onChange={handleChange}
              className="w-full border rounded-lg p-3"
              required
            />
          </div>
        </div>

        <Button type="submit" className="w-full">
          {loading ? "Generating..." : "Generate Agreement"}
        </Button>
      </form>

      <div className="mt-12">
        <div className="flex justify-between items-center mb-6 flex-wrap gap-3">
          <h2 className="text-3xl font-bold">
            Generated Agreement
          </h2>

          <div className="flex gap-3 flex-wrap">
            <button
              onClick={copyAgreement}
              disabled={!generatedAgreement}
              className="bg-slate-900 text-white px-4 py-2 rounded-lg flex items-center gap-2 disabled:opacity-40"
            >
              <Copy size={18} />
              Copy
            </button>

            <button
              onClick={handleDownload}
              disabled={!documentId}
              className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center gap-2 disabled:opacity-40"
            >
              <Download size={18} />
              PDF
            </button>

            <button
              onClick={handlePrint}
              disabled={!generatedAgreement}
              className="bg-purple-600 text-white px-4 py-2 rounded-lg flex items-center gap-2 disabled:opacity-40"
            >
              <Printer size={18} />
              Print
            </button>

            <button
              onClick={regenerateAgreement}
              disabled={!generatedAgreement}
              className="bg-green-600 text-white px-4 py-2 rounded-lg flex items-center gap-2 disabled:opacity-40"
            >
              <RotateCcw size={18} />
              Regenerate
            </button>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-lg border p-8 min-h-[500px] overflow-auto">
          {loading ? (
            <div className="text-center py-20">
              <p className="text-blue-600 font-semibold">
                Generating Agreement...
              </p>
            </div>
          ) : generatedAgreement ? (
            <article className="prose max-w-none">
              <ReactMarkdown>
                {generatedAgreement}
              </ReactMarkdown>
            </article>
          ) : (
            <div className="text-center py-24 text-gray-500">
              No Agreement Yet
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Generate;