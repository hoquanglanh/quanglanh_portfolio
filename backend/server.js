// === CÁC DÒNG ĐÃ CÓ ===
import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

// === KẾT NỐI MONGODB ===
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB connected"))
  .catch(err => console.log("❌ MongoDB error:", err));

// === SCHEMA CONTACT (ĐÃ CÓ) ===
const Contact = mongoose.model("Contact", new mongoose.Schema({
  name: String,
  email: String,
  message: String,
}));

// === SCHEMA PROJECT (MỚI) ===
const Project = mongoose.model("Project", new mongoose.Schema({
  title: String,
  description: String,
  image: String,
  github: String,
  tags: [String],
}));

// === API LIÊN HỆ ===
app.post("/api/contact", async (req, res) => {
  await new Contact(req.body).save();
  res.json({ success: true });
});

// === API PROJECTS ===

// 📌 Lấy tất cả project
app.get("/api/projects", async (req, res) => {
  const projects = await Project.find();
  res.json(projects);
});


// 📌 (Tuỳ chọn) Thêm project mới (cho admin dùng)
app.post("/api/projects", async (req, res) => {
  const project = new Project(req.body);
  await project.save();
  res.json({ success: true, project });
});

app.get("/", (req, res) => res.send("Portfolio Backend Running ✅"));

app.listen(8080, () => console.log("🚀 Backend running on port 8080"));
