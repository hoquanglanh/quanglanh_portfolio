import { useEffect, useState } from "react";
import axios from "axios";

export default function Projects() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  const API_BASE = process.env.REACT_APP_API_URL || "http://localhost:8080";

  useEffect(() => {
    axios
      .get(`${API_BASE}/api/projects`)
      .then((res) => {
        setProjects(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("❌ Error fetching projects:", err);
        setLoading(false);
      });
  }, [API_BASE]);

  return (
    <section id="projects" className="py-24 bg-indigo-50 text-center">
      <h2 className="text-4xl font-bold text-purple-700 mb-10">My Projects</h2>

      {loading ? (
        <p className="text-gray-500">Loading projects...</p>
      ) : projects.length === 0 ? (
        <p className="text-gray-500">No projects found.</p>
      ) : (
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {projects.map((p, i) => (
            <div
              key={p._id || i}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition border border-purple-100"
            >
              <img
                src={
                  p.image ||
                  "https://images.unsplash.com/photo-1498050108023-c5249f4df085"
                }
                alt={p.title}
                className="w-full h-56 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-indigo-700">{p.title}</h3>
                <p className="text-gray-600 mt-2">{p.description}</p>
                {p.tags && (
                  <div className="flex flex-wrap justify-center gap-2 mt-3">
                    {p.tags.map((tag, j) => (
                      <span
                        key={j}
                        className="bg-purple-100 text-purple-600 px-3 py-1 text-xs rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
                {p.github && (
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-4 text-indigo-600 hover:underline"
                  >
                    🔗 View on GitHub
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
