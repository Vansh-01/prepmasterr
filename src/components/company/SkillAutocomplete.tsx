import { useState, useRef, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Plus, X } from "lucide-react";
import { cn } from "@/lib/utils";

const SKILL_SUGGESTIONS = [
  "Python", "JavaScript", "TypeScript", "Java", "C++", "C#", "C", "Go", "Rust", "Ruby",
  "PHP", "Swift", "Kotlin", "Scala", "R", "MATLAB", "Perl", "Shell Scripting", "Bash",
  "React", "React Native", "Angular", "Vue.js", "Next.js", "Svelte", "Node.js", "Express.js",
  "Django", "Flask", "FastAPI", "Spring Boot", "ASP.NET", "Ruby on Rails", "Laravel",
  "HTML", "CSS", "Tailwind CSS", "Bootstrap", "SASS", "LESS",
  "SQL", "MySQL", "PostgreSQL", "MongoDB", "Redis", "Firebase", "Supabase", "DynamoDB",
  "Oracle", "SQLite", "Cassandra", "Neo4j", "Elasticsearch",
  "AWS", "Azure", "Google Cloud", "Docker", "Kubernetes", "Terraform", "Jenkins",
  "CI/CD", "GitHub Actions", "GitLab CI", "CircleCI",
  "Git", "GitHub", "GitLab", "Bitbucket", "SVN",
  "REST API", "GraphQL", "gRPC", "WebSocket", "Microservices",
  "Machine Learning", "Deep Learning", "TensorFlow", "PyTorch", "Scikit-learn",
  "Natural Language Processing", "Computer Vision", "Data Science", "Data Analysis",
  "Pandas", "NumPy", "Matplotlib", "Tableau", "Power BI", "Excel",
  "Figma", "Adobe XD", "Sketch", "UI/UX Design", "Photoshop", "Illustrator",
  "Agile", "Scrum", "Jira", "Confluence", "Trello",
  "Linux", "Windows Server", "Networking", "Cybersecurity", "Penetration Testing",
  "Blockchain", "Solidity", "Web3", "Ethereum",
  "Android Development", "iOS Development", "Flutter", "Dart",
  "Unity", "Unreal Engine", "Game Development",
  "DevOps", "SRE", "System Design", "Data Structures", "Algorithms",
  "Communication", "Leadership", "Problem Solving", "Teamwork", "Project Management",
  "Technical Writing", "Public Speaking", "Critical Thinking",
  "SAP", "Salesforce", "ServiceNow", "Workday", "HubSpot",
  "AutoCAD", "SolidWorks", "CATIA", "ANSYS",
  "Digital Marketing", "SEO", "SEM", "Google Analytics", "Content Marketing",
  "Hadoop", "Spark", "Kafka", "Airflow", "ETL", "Data Engineering",
  "ROS", "IoT", "Embedded Systems", "Arduino", "Raspberry Pi",
  "VHDL", "Verilog", "FPGA",
];

interface SkillAutocompleteProps {
  skills: string[];
  onSkillsChange: (skills: string[]) => void;
  disabled?: boolean;
  maxSkills?: number;
}

export default function SkillAutocomplete({
  skills,
  onSkillsChange,
  disabled = false,
  maxSkills = 15,
}: SkillAutocompleteProps) {
  const [input, setInput] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [highlightedIndex, setHighlightedIndex] = useState(-1);
  const wrapperRef = useRef<HTMLDivElement>(null);

  const filtered = input.trim().length >= 1
    ? SKILL_SUGGESTIONS.filter(
        (s) =>
          s.toLowerCase().includes(input.toLowerCase()) &&
          !skills.some((existing) => existing.toLowerCase() === s.toLowerCase())
      ).slice(0, 8)
    : [];

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target as Node)) {
        setShowSuggestions(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const addSkill = (skill: string) => {
    const trimmed = skill.trim();
    if (trimmed && !skills.some((s) => s.toLowerCase() === trimmed.toLowerCase()) && skills.length < maxSkills) {
      onSkillsChange([...skills, trimmed]);
    }
    setInput("");
    setShowSuggestions(false);
    setHighlightedIndex(-1);
  };

  const removeSkill = (skill: string) => {
    onSkillsChange(skills.filter((s) => s !== skill));
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      e.preventDefault();
      if (highlightedIndex >= 0 && filtered[highlightedIndex]) {
        addSkill(filtered[highlightedIndex]);
      } else if (input.trim()) {
        addSkill(input);
      }
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      setHighlightedIndex((prev) => Math.min(prev + 1, filtered.length - 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setHighlightedIndex((prev) => Math.max(prev - 1, -1));
    } else if (e.key === "Escape") {
      setShowSuggestions(false);
    }
  };

  return (
    <div className="space-y-2">
      <div className="relative" ref={wrapperRef}>
        <div className="flex gap-2">
          <Input
            placeholder="Type a skill and press Enter"
            value={input}
            onChange={(e) => {
              setInput(e.target.value);
              setShowSuggestions(true);
              setHighlightedIndex(-1);
            }}
            onFocus={() => setShowSuggestions(true)}
            onKeyDown={handleKeyDown}
            maxLength={50}
            disabled={disabled}
          />
          <Button
            type="button"
            variant="outline"
            size="icon"
            onClick={() => addSkill(input)}
            disabled={disabled || !input.trim()}
          >
            <Plus className="h-4 w-4" />
          </Button>
        </div>

        {showSuggestions && filtered.length > 0 && (
          <div className="absolute z-50 top-full mt-1 w-full bg-popover border rounded-md shadow-md max-h-48 overflow-y-auto">
            {filtered.map((suggestion, idx) => (
              <button
                key={suggestion}
                type="button"
                className={cn(
                  "w-full text-left px-3 py-2 text-sm hover:bg-accent transition-colors",
                  idx === highlightedIndex && "bg-accent"
                )}
                onMouseDown={(e) => {
                  e.preventDefault();
                  addSkill(suggestion);
                }}
                onMouseEnter={() => setHighlightedIndex(idx)}
              >
                {suggestion}
              </button>
            ))}
          </div>
        )}
      </div>

      {skills.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {skills.map((skill) => (
            <Badge key={skill} variant="secondary" className="gap-1 pr-1">
              {skill}
              <button
                type="button"
                onClick={() => removeSkill(skill)}
                className="ml-1 hover:text-destructive"
              >
                <X className="h-3 w-3" />
              </button>
            </Badge>
          ))}
        </div>
      )}
    </div>
  );
}
