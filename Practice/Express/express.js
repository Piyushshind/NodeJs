const Joi = require("joi");
const express = require('express');
const app = express();
app.use(express.json());
const port = process.env.PORT || 7000;

const allCourses = [
    { id: 1, name: 'corse1' },
    { id: 2, name: 'corse2' },
    { id: 3, name: 'corse3' }
];

app.get('/', (req, res) => {
    res.send('hello World');
});

// query paramerters
app.get('/api/course/:year/:day', (req, res) => {
    res.send(req.params);
});

app.get('/api/courses/:id', (req, res) => {
    const courss = allCourses.find(c => c.id === parseInt(req.params.id));
    if (!courss) res.status(404).send('the givin course is not fount');
    res.send(courss);
})

app.post('/api/courses', (req, res) => {
    const schema = Joi.object({
        name: Joi.string().min(5).max(30).required(),
    });
    const result = Joi.validate(req.body, schema);

    if (result.error) {
        res.status(400).send(result.error.details[0].message);
        return;
    }
})

app.put('/api/courses/:id', (req, res) => {
    const course = allCourses.find(c => c.id === parseInt(req.params.id));
    if (!course) res.status(404).send('the givin course is not fount');

    const { error } = validateCourse(req.body)
    if (error) {
        res.status(400).send(result.error.details[0].message);
        return;
    }
})
function validateCourse(course) {
    const schema = Joi.object({
        name: Joi.string().min(5).max(30).required(),
    });
    return Joi.validate(course, schema);
}

app.post('/api/courses', (req, res) => {
    const course = {
        id: allCourses.length + 1,
        name: req.body.name
    }
    allCourses.push(course);
    res.send(allCourses);
})

app.listen(port, () => console.log(`app is running on port ${port}... `));