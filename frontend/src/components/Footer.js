export default function Footer() {
  return (
    <footer className="bg-indigo-700 text-white text-center py-6">
      <p>© {new Date().getFullYear()} Quang Lanh. All rights reserved.</p>
      <p className="text-sm mt-1 text-indigo-200">
        Built with React, Tailwind, and 💜 by Lanh
      </p>
    </footer>
  );
}
