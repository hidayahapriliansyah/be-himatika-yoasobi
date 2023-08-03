const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();
const app = express();
app.use(cors({
  origin: '*',
}));

app.get('/himatika', (req, res) => {
  res.status(200).json({ message: 'Hello Himatika! :)' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server berjalan di http://localhost:${PORT}`);
});
