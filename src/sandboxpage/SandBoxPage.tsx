import React, { useState } from "react";

const SandBoxPage: React.FC = () => {
  const [code, setCode] = useState<string>(
    'using System;\nclass Program\n{\n    static void Main()\n    {\n        Console.WriteLine("Hello World");\n    }\n}'
  );
  const [output, setOutput] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const runCode = async () => {
    setLoading(true);
    const proxyUrl = "https://cors-anywhere.herokuapp.com/";
    const targetUrl = "https://api.jdoodle.com/v1/execute";
    try {
      const response = await fetch(proxyUrl + targetUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          script: code,
          language: "csharp",
          versionIndex: "4",
          clientId: "2e7548ff8bceccc320931cbb6af18cb7",
          clientSecret:
            "a6ccf04e498468deffbb003a833a942597bce714e2f33ea8913382ef263139e",
        }),
      });

      const data = await response.json();
      setOutput(data.output);
    } catch (error: unknown) {
      setOutput("Error executing code. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ padding: "20px", maxWidth: "800px", margin: "0 auto" }}>
      <h2>C# Sandbox</h2>
      <textarea
        value={code}
        onChange={(e) => setCode(e.target.value)}
        rows={10}
        style={{
          width: "100%",
          fontSize: "16px",
          fontFamily: "monospace",
          marginBottom: "10px",
        }}
      />
      <br />
      <button
        onClick={runCode}
        disabled={loading}
        style={{ padding: "10px 20px", fontSize: "16px" }}
      >
        {loading ? "Running..." : "Run Code"}
      </button>
      <h3>Output:</h3>
      <pre
        style={{ backgroundColor: "#f4f4f4", padding: "10px", color: "black" }}
      >
        {output}
      </pre>
    </div>
  );
};

export default SandBoxPage;
