import { useRef, useState } from "react";
import { toast } from "react-toastify";

import {
  chatWithAgreement,
  explainClause,
  improveAgreement,
  summarizeAgreement,
  analyzeRisk,
} from "../services/documentService";

function AIWorkspace() {
  const [documentId, setDocumentId] = useState("");
  const [question, setQuestion] = useState("");

  const [clause, setClause] = useState("");

  const [agreement, setAgreement] = useState("");
  const [instruction, setInstruction] = useState("");

  const [result, setResult] = useState("");

  const resultRef = useRef(null);

  const scrollToResult = () => {
    setTimeout(() => {
      resultRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }, 300);
  };

  const handleChat = async () => {
    try {
      const res = await chatWithAgreement({
        document_id: Number(documentId),
        question,
      });

      setResult(res.answer);
      toast.success("Response generated!");
      scrollToResult();
    } catch (err) {
      console.error(err);
      toast.error("Chat failed");
    }
  };

  const handleExplain = async () => {
    try {
      const res = await explainClause({
        clause,
      });

      setResult(res.explanation);
      toast.success("Explanation generated!");
      scrollToResult();
    } catch (err) {
      console.error(err);
      toast.error("Explain failed");
    }
  };

  const handleImprove = async () => {
    try {
      const res = await improveAgreement({
        agreement,
        instruction,
      });

      setResult(res.improved_agreement);
      toast.success("Agreement improved!");
      scrollToResult();
    } catch (err) {
      console.error(err);
      toast.error("Improve failed");
    }
  };

  const handleSummarize = async () => {
    try {
      const res = await summarizeAgreement({
        agreement,
      });

      setResult(res.summary);
      toast.success("Summary generated!");
      scrollToResult();
    } catch (err) {
      console.error(err);
      toast.error("Summarize failed");
    }
  };

  const handleRisk = async () => {
    try {
      const res = await analyzeRisk({
        agreement,
      });

      setResult(res.risk_analysis);
      toast.success("Risk analysis completed!");
      scrollToResult();
    } catch (err) {
      console.error(err);
      toast.error("Risk Analysis failed");
    }
  };

  return (
    <div className="max-w-6xl mx-auto p-10">
      <h1 className="text-3xl font-bold mb-8">
        AI Workspace
      </h1>

      <div className="grid gap-8">

        {/* Chat */}

        <div className="bg-white p-6 rounded-xl shadow">

          <h2 className="text-xl font-bold mb-4">
            Chat with Agreement
          </h2>

          <input
            type="number"
            placeholder="Document ID"
            value={documentId}
            onChange={(e) => setDocumentId(e.target.value)}
            className="border p-3 rounded w-full mb-3"
          />

          <textarea
            placeholder="Ask your question..."
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            className="border p-3 rounded w-full mb-3"
          />

          <button
            onClick={handleChat}
            className="bg-blue-600 text-white px-5 py-2 rounded"
          >
            Ask AI
          </button>

        </div>

        {/* Explain */}

        <div className="bg-white p-6 rounded-xl shadow">

          <h2 className="text-xl font-bold mb-4">
            Explain Clause
          </h2>

          <textarea
            placeholder="Paste clause..."
            value={clause}
            onChange={(e) => setClause(e.target.value)}
            className="border p-3 rounded w-full mb-3"
          />

          <button
            onClick={handleExplain}
            className="bg-green-600 text-white px-5 py-2 rounded"
          >
            Explain
          </button>

        </div>

        {/* Improve */}

        <div className="bg-white p-6 rounded-xl shadow">

          <h2 className="text-xl font-bold mb-4">
            Improve Agreement
          </h2>

          <textarea
            placeholder="Agreement..."
            value={agreement}
            onChange={(e) => setAgreement(e.target.value)}
            className="border p-3 rounded w-full mb-3"
          />

          <input
            placeholder="Instruction"
            value={instruction}
            onChange={(e) => setInstruction(e.target.value)}
            className="border p-3 rounded w-full mb-3"
          />

          <button
            onClick={handleImprove}
            className="bg-purple-600 text-white px-5 py-2 rounded"
          >
            Improve
          </button>

        </div>

        {/* Summarize */}

        <div className="bg-white p-6 rounded-xl shadow">

          <h2 className="text-xl font-bold mb-4">
            Summarize Agreement
          </h2>

          <button
            onClick={handleSummarize}
            className="bg-orange-600 text-white px-5 py-2 rounded"
          >
            Summarize
          </button>

        </div>

        {/* Risk */}

        <div className="bg-white p-6 rounded-xl shadow">

          <h2 className="text-xl font-bold mb-4">
            Risk Analysis
          </h2>

          <button
            onClick={handleRisk}
            className="bg-red-600 text-white px-5 py-2 rounded"
          >
            Analyze Risk
          </button>

        </div>

        {/* Result */}

        <div
          ref={resultRef}
          className="bg-white rounded-xl shadow p-6"
        >

          <h2 className="text-xl font-bold mb-4">
            AI Result
          </h2>

          <pre className="whitespace-pre-wrap">
            {result || "AI response will appear here..."}
          </pre>

        </div>

      </div>
    </div>
  );
}

export default AIWorkspace;