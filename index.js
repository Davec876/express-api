const Joi = require('joi');
const express = require('express');
const app = express();

app.use(express.json());

const courses = [
    {id: 1, name: 'course1'},
    {id: 2, name: 'course2'},
    {id: 3, name: 'course3'},
];


app.get('/', (req, res) => {
     res.send('Hello World!!');
});

app.get('/api/courses', (req, res) => {
    res.send(courses);
});

app.post('/api/courses', (req, res)=> {
    
    //getting error message
    const {error} = validateCourse(req.body);
    if(error) {
        res.status(400).send(result.error.details[0].message);
        return;
    }
    const course = {
        id: courses.length + 1,
        name: req.body.name
    };
    courses.push(course);
    res.send(course);
});

app.put('/api/courses/:id', (req, res) => {
    
    const course = courses.find(c => c.id === parseInt(req.params.id));
    if(!course) res.status(404).send('The course with the given ID was not found.');

    //getting error message
    const {error} = validateCourse(req.body);
    if(error) {
        res.status(400).send(result.error.details[0].message);
        return;
    }

    course.name = req.body.name;
    res.send(course);

});


app.get('/api/courses/:id', (req, res) => {
    //finding if course exists or not
    const course = courses.find(c => c.id === parseInt(req.params.id));
    if(!course) res.status(404).send('The course with the given ID was not found.');
    res.send(course);

    //getting error message
    const {error} = validateCourse(req.body);
    if(error) {
        res.status(400).send(result.error.details[0].message);
        return;
    }
    //updating and returning the course
    course.name = req.body.name;
    res.send(course);
});

//input validation function
function validateCourse(course) {
    //schema for validation
    const schema = {
        name: Joi.string().min(3).required()
    };
    //data input validation
    return Joi.validate(course, schema);
}


const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}.`));