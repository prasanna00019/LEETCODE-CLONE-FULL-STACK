import axios from "axios";
import { LANGUAGE_VERSIONS } from "./constant.js";

const API = axios.create({
  baseURL: "https://emkc.org/api/v2/piston",
});

export const executeCode = async (language, sourceCode) => {
  const response = await API.post("/execute", {
    language: language,
    version: LANGUAGE_VERSIONS[language],
    files: [
      {
        content: sourceCode,
      },
    ],
  });
//   const response2=await API.get('/runtimes')
//   console.log(response2.data)
  return response.data;
};