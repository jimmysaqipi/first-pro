const express = require('express');
const mongoose = require('mongoose');
const app = express();
app.use(express.json());
mongoose.connect('mongodb://localhost:27017/testdb', {
  useNewUrlparser: true,
  useUnifiedTopology: true,
})
.then (() =>console.log('U lidh me MongoDB!'))
.catch(err => console.log(err))

app.get('/', (req, res)=>{
  res.send('Hello from Dockerfile');
});
const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}/`);
});
