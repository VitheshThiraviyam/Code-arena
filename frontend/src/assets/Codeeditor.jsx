import React, { useState } from "react";
import CodeMirror from "@uiw/react-codemirror";
import { cpp } from "@codemirror/lang-cpp";
import { java } from "@codemirror/lang-java";
import { python } from "@codemirror/lang-python";
import "./Codeeditor.css";

const defaultFiles = {
    cpp: `#include <iostream>\nusing namespace std;\n\nint main() {\n    int num = 10; // Declare an integer variable\n    cout << "Number: " << num << endl;\n    return 0;\n}`,
    java: `public class Main {\n    public static void main(String[] args) {\n        int num = 10; // Declare an integer variable\n        System.out.println("Number: " + num);\n    }\n}`,
    python3: `# Declare a variable\nnum = 10\nprint("Number:", num)`
};

const Codeeditor = () => {
    const [language, setLanguage] = useState("cpp");
    const [code, setCode] = useState(defaultFiles[language]);
    const [output, setOutput] = useState("");
    const [error, setError] = useState("");

    const handleRun = async () => {
        setOutput("Running...");
        setError("");
        try {
            const response = await fetch("http://localhost:5000/run", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ code, language })
            });
            const result = await response.json();
            if (result.error) {
                setError(result.error);
                setOutput("");
            } else {
                setOutput(result.output);
            }
        } catch (err) {
            setError("Execution failed. Please try again.");
            setOutput("");
        }
    };

    const handleLanguageChange = (e) => {
        const newLang = e.target.value;
        setLanguage(newLang);
        setCode(defaultFiles[newLang]);
    };

    return (
        <div className="editor-container">
            <select onChange={handleLanguageChange} className="language-select" value={language}>
                <option value="cpp">C++</option>
                <option value="java">Java</option>
                <option value="python3">Python</option>
            </select>
            <CodeMirror
                value={code}
                height="300px"
                extensions={[language === "cpp" ? cpp() : language === "java" ? java() : python()]}
                onChange={(value) => setCode(value)}
                className="code-editor"
            />
            <button onClick={handleRun} className="run-button">Run Code</button>
            <div className="output-container">
                {error && <pre className="error-box">{error}</pre>}
                <pre className="output-box">{output}</pre>
            </div>
        </div>
    );
};

export default Codeeditor;
