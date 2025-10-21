import { Code, Database, Cloud, Cpu, Wrench } from "lucide-react";

export default function Skills() {
  const skills = [
    { icon: <Code />, name: "Frontend", tech: "React, Tailwind, Next.js" },
    { icon: <Database />, name: "Backend", tech: "Node.js, Express, MongoDB" },
    { icon: <Cloud />, name: "DevOps", tech: "Docker, AWS, CI/CD" },
    { icon: <Cpu />, name: "IoT", tech: "ESP32, Raspberry Pi, MQTT" },
    { icon: <Wrench />, name: "Tools", tech: "Git, Linux, VS Code" },
  ];

  return (
    <section id="skills" className="py-24 bg-gradient-to-b from-indigo-50 to-white text-center">
      <h2 className="text-4xl font-bold text-purple-700 mb-10">Skills & Tools</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {skills.map((s, i) => (
          <div
            key={i}
            className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl border border-purple-100 transition"
          >
            <div className="flex justify-center text-purple-600 mb-4 text-4xl">{s.icon}</div>
            <h3 className="text-xl font-semibold text-indigo-700 mb-2">{s.name}</h3>
            <p className="text-gray-600">{s.tech}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
