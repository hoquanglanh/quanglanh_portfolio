import { useState } from "react";
import axios from "axios";
import { motion, AnimatePresence } from "framer-motion";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [popup, setPopup] = useState({ visible: false, success: true });

  // ✅ Hàm gửi form
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Gửi đến backend — dùng biến môi trường nếu có
      const apiUrl = process.env.REACT_APP_API_URL
        ? `${process.env.REACT_APP_API_URL}/api/contact`
        : "http://localhost:8080/api/contact";

      await axios.post(apiUrl, form);
      setPopup({ visible: true, success: true });
      setForm({ name: "", email: "", message: "" });
    } catch (err) {
      console.error("❌ Error sending message:", err);
      setPopup({ visible: true, success: false });
    }
  };

  return (
    <section className="py-16 bg-white text-center relative">
      <h2 className="text-3xl font-bold text-purple-700 mb-6">Contact Me</h2>

      <form
        onSubmit={handleSubmit}
        className="max-w-md mx-auto flex flex-col gap-3 bg-white p-6 rounded-lg shadow-lg"
      >
        <input
          className="border p-3 rounded focus:ring-2 focus:ring-purple-300"
          placeholder="Your Name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          required
        />
        <input
          className="border p-3 rounded focus:ring-2 focus:ring-purple-300"
          placeholder="Your Email"
          type="email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          required
        />
        <textarea
          className="border p-3 rounded focus:ring-2 focus:ring-purple-300"
          rows="4"
          placeholder="Message"
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          required
        />
        <button
          type="submit"
          className="bg-purple-600 text-white py-2 rounded hover:bg-purple-700 transition"
        >
          Send
        </button>
      </form>

      {/* ✅ Popup thông báo */}
      <AnimatePresence>
        {popup.visible && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white rounded-xl p-8 shadow-2xl text-center max-w-sm mx-auto"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
            >
              <h3
                className={`text-2xl font-semibold ${
                  popup.success ? "text-green-600" : "text-red-600"
                }`}
              >
                {popup.success
                  ? "✅ Message sent successfully!"
                  : "❌ Failed to send message!"}
              </h3>
              <p className="text-gray-600 mt-2">
                {popup.success
                  ? "Thank you for reaching out — I’ll reply soon!"
                  : "Please check your connection and try again."}
              </p>
              <button
                className="mt-6 bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700 transition"
                onClick={() => setPopup({ ...popup, visible: false })}
              >
                Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
