import axios from "axios";
import { useState } from "react";
import SqlEditor from "../components/sqlEditor";
import SampleDataViewer from "../components/SampleDataViewer";
function AttemptPage() {
  const [query, setQuery] = useState("SELECT * FROM students");
  const [results, setResults] = useState([]);
  const [hint, setHint] = useState("");
  const [error, setError] = useState("");

  const runQuery = async () => {

    try {

      const res = await axios.post(
        "http://localhost:5000/execute-query",
        { query }
      );

      setResults(res.data);
      setError("");

    } catch (err) {

      setResults([]);

      setError(
        err.response?.data?.error || "Invalid SQL query"
      );
    }
  };
  const getHint = async () => {
    const res = await axios.post(
      "http://localhost:5000/api/hint",
      {
        question: "Find students older than 20",
        query: query
      }
    );

    setHint(res.data.hint);
  };

  return (
    <div>
      <h1>SQL Practice</h1>
      <SampleDataViewer />
      <div className="editor-section">
        <SqlEditor query={query} setQuery={setQuery} />
      </div>

      <button onClick={runQuery}>Run Query</button>
      <button onClick={getHint} style={{ marginLeft: "10px" }}>
        Get Hint
      </button>
      {error && (
        <div style={{ color: "red", marginTop: "10px" }}>
          <strong>Error:</strong> {error}
        </div>
      )}

      {results.length > 0 && (
        <table className="results-table">
          <thead>
            <tr>
              {Object.keys(results[0]).map((col) => (
                <th key={col}>{col}</th>
              ))}
            </tr>
          </thead>

          <tbody>
            {results.map((row, i) => (
              <tr key={i}>
                {Object.values(row).map((val, j) => (
                  <td key={j}>{val}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      )}
      {hint && (
        <div className="results-table"  >
          <h3>Hint</h3>
          <p>{hint}</p>
        </div>
      )}
    </div>
  );
}

export default AttemptPage;