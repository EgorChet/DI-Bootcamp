const express = require('express');
const app = express();
const todoRouter = require('./routes/todos');

app.use(express.json());

// Use the todoRouter for /todos routes
app.use('/todos', todoRouter);
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
