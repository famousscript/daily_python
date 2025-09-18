const express = require('express');
const cors = require('cors');

const app = express();

app.use(express.json())

app.use(cors());

const PORT = 8080


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});


// https://technicalcontent99.blogspot.com/2024/01/mern-stack-crud-operations-step-by-step.html