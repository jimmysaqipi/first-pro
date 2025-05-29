const express = require('express');
const mongoose = require('mongoose');

const app = express();
const PORT = 8000;

app.use(express.json());

// Use the container name "mongo" for MongoDB connection in Docker
mongoose.connect('mongodb://mongo:27017/mydb',
     {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected'))
.catch((err) => console.error('MongoDB connection error:', err))

const User = mongoose.model('User', new mongoose.Schema({
    name: String,
    email: String

}));

app.get('/', async (req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (err){
        console.error('Error getting users:', err);
        res.status(500).send('Server Error');
    }
    const users = User.find();
    res.send('hello from mongodb');
});

app.listen(8000, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
