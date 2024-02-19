const express = require('express');
const app = express();
const port = process.env.PORT || 7000;

app.get('/', (req, res) => {
    res.send('hello World');
});

// query paramerters
app.get('/api/course/:year/:day', (req, res) => {
    res.send(req.params);
});

app.listen(port, () => console.log(`app is running on port ${port}...`));