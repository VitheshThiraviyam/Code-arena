import React, { useState, useRef } from "react";
import CodeMirror from "@uiw/react-codemirror";
import { cpp } from "@codemirror/lang-cpp";
import { java } from "@codemirror/lang-java";
import { python } from "@codemirror/lang-python";
import "./Codeeditor.css";

const defaultFiles = {
    c: `#include <stdio.h>\n\nint main() {\n    int num = 10;\n    printf("Number: %d\\n", num);\n    return 0;\n}`,
    cpp: `#include <iostream>\nusing namespace std;\n\nint main() {\n    int num = 10;\n    cout << "Number: " << num << endl;\n    return 0;\n}`,
    java: `public class Main {\n    public static void main(String[] args) {\n        int num = 10;\n        System.out.println("Number: " + num);\n    }\n}`,
    python3: `num = 10\nprint("Number:", num)`
};

const Codeeditor = ({ problemTitle, problemDescription }) => {
    const [language, setLanguage] = useState("c");
    const [code, setCode] = useState(defaultFiles[language]);
    const [output, setOutput] = useState("");
    const [error, setError] = useState("");
    const [dividerPos, setDividerPos] = useState(50); // Initial 50% split

    const isDragging = useRef(false);

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

    const startDragging = () => {
        isDragging.current = true;
    };

    const stopDragging = () => {
        isDragging.current = false;
    };

    const handleDragging = (e) => {
        if (!isDragging.current) return;
        const newWidth = (e.clientX / window.innerWidth) * 100;
        if (newWidth > 20 && newWidth < 80) {
            setDividerPos(newWidth);
        }
    };

    return (
        <div className="editor-container" onMouseMove={handleDragging} onMouseUp={stopDragging}>
            <div className="top-container">
                <div className="problem-section" style={{ width: `${dividerPos}%` }}>
                    <h2>{problemTitle || "Problem Title"}</h2>
                    <p>{problemDescription || "Problem description will be displayed here."}</p>
                </div>

                <div className="divider" onMouseDown={startDragging} />

                <div className="code-editor-section" style={{ width: `${100 - dividerPos}%` }}>
                    <select onChange={handleLanguageChange} className="language-select" value={language}>
                        <option value="c">C</option>
                        <option value="cpp">C++</option>
                        <option value="java">Java</option>
                        <option value="python3">Python</option>
                    </select>
                    <CodeMirror
                        value={code}
                        height="100%"
                        extensions={[cpp(), java(), python()].find(ext => language !== "java" || ext === java())}
                        onChange={(value) => setCode(value)}
                        className="code-editor"
                    />
                    <button onClick={handleRun} className="run-button">Run Code</button>
                </div>
            </div>

            <div className="output-container">
                {error && <pre className="error-box">{error}</pre>}
                <pre className="output-box">{output}</pre>
            </div>
        </div>
    );
};

export default Codeeditor;