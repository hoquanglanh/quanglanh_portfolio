import { useEffect, useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";

export default function Projects() {
  const [projects, setProjects] = useState([]);

  // ✅ Ưu tiên REACT_APP_API_URL nếu có, ngược lại dùng localhost (khi chạy dev)
  const API_BASE =
    process.env.REACT_APP_API_URL || "http://localhost:8080";

  useEffect(() => {
    axios
      .get(`${API_BASE}/api/projects`)
      .then((res) => setProjects(res.data))
      .catch((err) => console.error("❌ Error loading projects:", err));
  }, []);

  return (
    <section className="py-16 bg-indigo-50 text-center">
      <h2 className="text-3xl font-bold text-purple-700 mb-6">My Projects</h2>
      {projects.length === 0 ? (
        <p className="text-gray-500">Loading projects...</p>
      ) : (
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {projects.map((p, i) => (
            <motion.div
              key={p._id}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="bg-white shadow-md rounded-xl p-6 hover:shadow-lg transition"
            >
              <img
                src={
                  p.image ||
                  "https://images.unsplash.com/photo-1581092334531-3e09a4bb7a8b?auto=format&fit=crop&w=800&q=80"
                }
                alt={p.title}
                className="rounded-md mb-4 w-full h-48 object-cover"
              />
              <h3 className="text-xl font-semibold text-purple-700">{p.title}</h3>
              <p className="text-gray-600 mt-2">{p.description}</p>
              <div className="flex flex-wrap justify-center gap-2 mt-3">
                {p.tags?.map((tag, j) => (
                  <span
                    key={j}
                    className="bg-purple-100 text-purple-600 px-2 py-1 text-xs rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <a
                href={p.github}
                target="_blank"
                rel="noopener noreferrer"
                className="block mt-4 text-indigo-600 hover:underline"
              >
                🔗 View on GitHub
              </a>
            </motion.div>
          ))}
        </div>
      )}
    </section>
  );
}
