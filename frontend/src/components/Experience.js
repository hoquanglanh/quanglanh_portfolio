export default function Experience() {
  const experiences = [
    {
      role: "Intern Developer",
      company: "Tech Startup Vietnam",
      time: "06/2024 - 09/2024",
      desc: "Built IoT dashboard using React & Node.js. Set up CI/CD pipeline with GitHub Actions.",
    },
    {
      role: "Freelance Web Developer",
      company: "Personal Clients",
      time: "2023 - Present",
      desc: "Designed responsive websites using React, TailwindCSS, and MongoDB backend.",
    },
  ];

  return (
    <section id="experience" className="py-24 bg-white text-center">
      <h2 className="text-4xl font-bold text-purple-700 mb-10">Experience</h2>
      <div className="max-w-4xl mx-auto grid gap-8">
        {experiences.map((exp, i) => (
          <div
            key={i}
            className="bg-purple-50 border border-purple-100 rounded-2xl p-8 shadow hover:shadow-md transition"
          >
            <h3 className="text-2xl font-semibold text-indigo-700">{exp.role}</h3>
            <p className="text-purple-600 font-medium">{exp.company}</p>
            <p className="text-gray-500 text-sm mt-1">{exp.time}</p>
            <p className="text-gray-700 mt-3">{exp.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
