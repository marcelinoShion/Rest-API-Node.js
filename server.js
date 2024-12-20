const express = require('express');
const app = express();

const studentRouter = require('./src/student/routes');
const port = 8080;

app.use(express.json());

app.use('/api/v1/students',studentRouter);
app.listen(port , ()=>{
    console.log(`app listening  on port ${port}`)
})