import React from "react";

export default function Header() {
  const menu = ["About", "Skills", "Experience", "Projects", "Contact"];

  const scrollToSection = (id) => {
    const section = document.getElementById(id.toLowerCase());
    if (section) section.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="fixed top-0 left-0 w-full bg-white/80 backdrop-blur-md shadow z-50">
      <nav className="max-w-6xl mx-auto flex items-center justify-between py-4 px-6">
        <h1
          className="text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600 cursor-pointer"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          Quang Lanh
        </h1>

        <ul className="flex gap-6 text-gray-700 font-medium">
          {menu.map((item) => (
            <li
              key={item}
              onClick={() => scrollToSection(item)}
              className="cursor-pointer hover:text-indigo-600 transition"
            >
              {item}
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
