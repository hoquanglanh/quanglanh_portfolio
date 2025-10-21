import { useState } from "react";
import axios from "axios";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [success, setSuccess] = useState(null);

  const API_BASE = process.env.REACT_APP_API_URL || "http://localhost:8080";

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`${API_BASE}/api/contact`, form);
      setSuccess(true);
      setForm({ name: "", email: "", message: "" });
    } catch (err) {
      console.error("❌ Error sending contact:", err);
      setSuccess(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-white text-center">
      <h2 className="text-4xl font-bold text-purple-700 mb-10">Contact Me</h2>
      <form
        onSubmit={handleSubmit}
        className="max-w-md mx-auto flex flex-col gap-4 bg-purple-50 p-8 rounded-2xl shadow"
      >
        <input
          className="border border-purple-200 p-3 rounded focus:ring-2 focus:ring-purple-300"
          placeholder="Your Name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          required
        />
        <input
          type="email"
          className="border border-purple-200 p-3 rounded focus:ring-2 focus:ring-purple-300"
          placeholder="Your Email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          required
        />
        <textarea
          rows="4"
          className="border border-purple-200 p-3 rounded focus:ring-2 focus:ring-purple-300"
          placeholder="Message"
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          required
        />
        <button className="bg-purple-600 text-white py-3 rounded hover:bg-purple-700 transition">
          Send Message
        </button>
      </form>

      {success !== null && (
        <p
          className={`mt-4 text-lg font-medium ${
            success ? "text-green-600" : "text-red-600"
          }`}
        >
          {success
            ? "✅ Message sent successfully!"
            : "❌ Failed to send message!"}
        </p>
      )}
    </section>
  );
}
