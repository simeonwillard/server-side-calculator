const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 5000;
let inputNumbers = [];
let answer = [];

app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static('server/public'));

app.post('/calculate', (req, res) => {
    inputNumbers = [];
    let userInput = req.body;
    inputNumbers.push(userInput);
    res.sendStatus(201);
    console.log(inputNumbers);
    console.log(userInput);
    outcome();
})

function outcome() {
    answer = [];

    for (let operant of inputNumbers){
        if (operant.operator === '+'){
            let result = Number(operant.value1) + Number(operant.value2);
            answer.push(result);
            console.log(result);
        }
        else if (operant.operator === '-'){
            let result = Number(operant.value1) - Number(operant.value2);
            answer.push(result);
            console.log(result);
        }
        else if (operant.operator === '*'){
            let result = Number(operant.value1) * Number(operant.value2);
            answer.push(result);
            console.log(result);
        }
        else if (operant.operator === '/'){
            let result = Number(operant.value1) / Number(operant.value2);
            answer.push(result);
            console.log(result);
        }
    }
    console.log(answer);
}









app.listen(PORT, () => {
    console.log('server is running on port: ', PORT);
})