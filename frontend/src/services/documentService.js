import API from "./api";

export const generateAgreement = async (data) => {
  const response = await API.post(
    "/agreements/agreements/generate",
    data
  );
  return response.data;
};

export const getDocuments = async () => {
  const response = await API.get("/documents");
  return response.data;
};

export const getDocument = async (id) => {
  const response = await API.get(`/documents/${id}`);
  return response.data;
};

export const deleteDocument = async (id) => {
  const response = await API.delete(`/documents/${id}`);
  return response.data;
};

export const downloadPDF = async (id) => {
  const response = await API.get(`/documents/${id}/pdf`, {
    responseType: "blob",
  });

  return response.data;
};

// ---------------- AI ----------------

export const chatWithAgreement = async (data) => {
  const response = await API.post("/chat/", data);
  return response.data;
};

export const explainClause = async (data) => {
  const response = await API.post("/explain/", data);
  return response.data;
};

export const improveAgreement = async (data) => {
  const response = await API.post("/improve/", data);
  return response.data;
};

export const summarizeAgreement = async (data) => {
  const response = await API.post("/summarize/", data);
  return response.data;
};

export const analyzeRisk = async (data) => {
  const response = await API.post("/risk-analysis/", data);
  return response.data;
};