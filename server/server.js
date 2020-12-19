// setting up the server
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 5000;
// declaring variables
let inputNumbers = [];      // array to store user inputs
let answer = [];            // array to store the answer of the equation
let history = [];           // array to store all equations

// using body-parser
app.use(bodyParser.urlencoded({extended: true}));
// using local files
app.use(express.static('server/public'));

// getting user data  
app.post('/calculate', (req, res) => {
    // emptying array to calculate current equation
    inputNumbers = [];
    // pushing user data into array
    let userInput = req.body;
    inputNumbers.push(userInput);
    // running function outcome() to solve equation
    outcome();
    // sending created status to client which tells the client the 
    // equation has been solved
    res.sendStatus(201);
    console.log(inputNumbers);
    console.log(userInput);
})

// function to solve the equation based on which operator was chosen
function outcome() {
    // emptying answer array to store current answer
    answer = [];
    // for loop to discern which operator was used
    for (let operant of inputNumbers){
        if (operant.operator === '+'){
            // calculating solution to equation
            let result = Number(operant.value1) + Number(operant.value2);
            // pushing full equation to the history array
            history.push(`${operant.value1} + ${operant.value2} = ${result}`);
            // pushing just the answer to the answer array
            answer.push(result);
            // testing calculation is correct
            console.log(result);
        }
        else if (operant.operator === '-'){
            let result = Number(operant.value1) - Number(operant.value2);
            history.push(`${operant.value1} - ${operant.value2} = ${result}`);
            answer.push(result);
            console.log(result);
        }
        else if (operant.operator === '*'){
            let result = Number(operant.value1) * Number(operant.value2);
            history.push(`${operant.value1} * ${operant.value2} = ${result}`);
            answer.push(result);
            console.log(result);
        }
        else if (operant.operator === '/'){
            let result = Number(operant.value1) / Number(operant.value2);
            history.push(`${operant.value1} / ${operant.value2} = ${result}`);
            answer.push(result);
            console.log(result);
        }
    }
    console.log(answer);
}

// sending the answer to the server 
app.get('/result', (req, res) => {
    res.send(answer);
});

// sending the history of equations to the server
app.get('/history', (req, res) => {
    res.send(history);
});

// opening port 5000
app.listen(PORT, () => {
    console.log('server is running on port: ', PORT);
})