// import { motion } from "framer-motion";

// export default function Hero() {
//   return (
//     <section className="relative h-screen flex flex-col justify-center items-center text-center overflow-hidden bg-gradient-to-b from-purple-100 via-white to-indigo-100">
//       {/* Hiệu ứng background mờ động */}
//       <motion.div
//         className="absolute w-72 h-72 bg-purple-300/40 rounded-full blur-3xl top-20 left-32"
//         animate={{ x: [0, 40, 0], y: [0, -30, 0] }}
//         transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
//       />
//       <motion.div
//         className="absolute w-96 h-96 bg-indigo-300/30 rounded-full blur-3xl bottom-20 right-32"
//         animate={{ x: [0, -40, 0], y: [0, 30, 0] }}
//         transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
//       />

//       {/* Nội dung chính */}
//       <motion.h1
//         className="text-6xl sm:text-7xl font-extrabold bg-gradient-to-r from-purple-700 via-indigo-600 to-pink-500 text-transparent bg-clip-text drop-shadow-lg"
//         initial={{ y: -50, opacity: 0 }}
//         animate={{ y: 0, opacity: 1 }}
//         transition={{ duration: 0.8 }}
//       >
//         👋 Hi, I'm <span className="text-indigo-700">Quang Lanh</span>
//       </motion.h1>

//       <motion.p
//         className="mt-6 text-xl sm:text-2xl text-gray-700 max-w-2xl leading-relaxed"
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ delay: 0.5, duration: 1 }}
//       >
//         A passionate <span className="font-semibold text-purple-700">Software Engineering student</span> who loves building things with <span className="text-indigo-600 font-medium">Web, IoT, and Cloud technologies</span>.
//       </motion.p>

//       {/* Nút hành động */}
//       <motion.div
//         className="mt-10 flex gap-4"
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ delay: 1, duration: 0.8 }}
//       >
//       </motion.div>
//     </section>
//   );
// }
