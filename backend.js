const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 3000;

// Middleware
app.use(cors()); // Mengizinkan request dari frontend lain
app.use(express.json()); // Untuk membaca request body JSON

// Endpoint untuk menerima data dari frontend
app.post("/submit", (req, res) => {
  const { jawaban } = req.body;
  console.log("✅ Data diterima dari frontend:", jawaban); // Debugging

  // Kirim respons ke frontend
  res.json({
    message: `Jawaban yang diterima: ${jawaban}`, // Gunakan backtick untuk template string
  });
});

// Jalankan server (panggil app.listen hanya SEKALI)
app.listen(PORT, () => {
  console.log(`✅ Server berjalan di http://localhost:${PORT}`);
});
