import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="h-screen flex flex-col justify-center items-center text-center">
      <motion.h1
        className="text-5xl font-bold text-purple-700"
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
      >
        👋 Hi, I'm <span className="text-indigo-700">Van Nghia</span>
      </motion.h1>
      <motion.p
        className="mt-4 text-lg text-gray-700 max-w-lg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        A Software Engineering student who loves web, IoT, and cloud technologies.
      </motion.p>
    </section>
  );
}
