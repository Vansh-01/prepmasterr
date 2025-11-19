import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Editor from "@monaco-editor/react";
import { Play, RotateCcw, Home } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

const CodingPractice = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [code, setCode] = useState(`// Write your code here
function solution() {
  // Your solution
  return "Hello, World!";
}

// Test your code
console.log(solution());`);
  const [output, setOutput] = useState("");

  const handleRunCode = () => {
    try {
      // Capture console.log output
      const logs: string[] = [];
      const originalLog = console.log;
      console.log = (...args) => {
        logs.push(args.join(" "));
      };

      // Execute the code
      eval(code);

      // Restore console.log
      console.log = originalLog;

      setOutput(logs.join("\n") || "Code executed successfully!");
      toast({
        title: "Success",
        description: "Code executed successfully",
      });
    } catch (error) {
      setOutput(`Error: ${error instanceof Error ? error.message : "Unknown error"}`);
      toast({
        title: "Error",
        description: "Failed to execute code",
        variant: "destructive",
      });
    }
  };

  const handleReset = () => {
    setCode(`// Write your code here
function solution() {
  // Your solution
  return "Hello, World!";
}

// Test your code
console.log(solution());`);
    setOutput("");
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="container px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-3xl font-bold">Coding Practice</h1>
          <Button variant="outline" onClick={() => navigate("/interview-mode")}>
            <Home className="w-4 h-4 mr-2" />
            Back to Modes
          </Button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card className="p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold">Code Editor</h2>
              <div className="flex gap-2">
                <Button variant="outline" size="sm" onClick={handleReset}>
                  <RotateCcw className="w-4 h-4 mr-2" />
                  Reset
                </Button>
                <Button size="sm" onClick={handleRunCode}>
                  <Play className="w-4 h-4 mr-2" />
                  Run Code
                </Button>
              </div>
            </div>
            <div className="border rounded-lg overflow-hidden">
              <Editor
                height="500px"
                defaultLanguage="javascript"
                theme="vs-dark"
                value={code}
                onChange={(value) => setCode(value || "")}
                options={{
                  minimap: { enabled: false },
                  fontSize: 14,
                  lineNumbers: "on",
                  scrollBeyondLastLine: false,
                  automaticLayout: true,
                }}
              />
            </div>
          </Card>

          <Card className="p-6">
            <h2 className="text-xl font-semibold mb-4">Output</h2>
            <div className="bg-muted rounded-lg p-4 min-h-[500px] font-mono text-sm whitespace-pre-wrap">
              {output || "Run your code to see the output here..."}
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default CodingPractice;
