const express = require('express');
const app = express();
require('./config/db');

app.use(express.json());

const authorRoutes = require('./app/routes/authorRoutes');
app.use('/api', authorRoutes);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
