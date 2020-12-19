console.log('client.js');

$(document).ready(readyNow);

// declaring variables
let operation = '';     // chosen operator 


// function to run the app
function readyNow() {
    // testing the function 
    console.log('jQuery is loaded');

    // when you press these buttons, run these functions
    $('#plusBtn').on('click', addNumbers);
    $('#minusBtn').on('click', subtractNumbers);
    $('#multiplyBtn').on('click', multiplyNumbers);
    $('#divideBtn').on('click', divideNumbers);
    $('#equalsBtn').on('click', result);
    $('#clearBtn').on('click', clear);      
}

// function to store '+' in operator variable
function addNumbers() {
    // testing button
    console.log('clicked the plus');
    operation = '+';
    
    console.log('operator is ', operation);
}

// function to store '-' in operator variable
function subtractNumbers() {
    // testing button
    console.log('clicked the minus');
    operation = '-';
    
    console.log('operator is ', operation);
}

// function to store '*' in operator variable
function multiplyNumbers() {
    // testing button
    console.log('clicked the star');
    operation = '*';
    
    console.log('operator is ', operation);
}

// function to store '/' in operator variable
function divideNumbers() {
    // testing button
    console.log('clicked the whack');

    operation = '/';
    
    console.log('operator is ', operation);
}

// function to send user data to the server
function result() {
    // testing button
    console.log('clicked equals');
    //defining object as user inputs and our user's preferred operator
    let dataToSend = {
        value1: $('#firstNumber').val(),
        value2: $('#secondNumber').val(),
        operator: operation
    }
    console.log(dataToSend)
    // posting the object to the server
    $.ajax({
        url: '/calculate',
        type: 'POST',
        data: dataToSend
    }).then(function (response) {
        // on response from the server run these functions
        console.log(response);
        console.log('received ', dataToSend);
        displayHistory();
        displayResult();
    });
}

// displaying passed calculations on the DOM
function displayHistory() {
    // testing function
    console.log('in displayHistory');
    // getting previous calculations from the server
    $.ajax({
        url: '/history',
        type: 'GET'
    }).then(function (response) {
        // on response from the server display the response
        $('#pastCalc').empty();
        for (let solution of response){
        $('#pastCalc').append(`
            <li>${solution}</li>
        `);
        }
        console.log(response);
    })
}

// function to display the most recent calculation
function displayResult() {
    // testing function
    console.log('in displayResult');
    // getting the answer to the problem from the server
    $.ajax({
        url: '/result',
        type: 'GET'
    }).then(function (response) {
        // on response from the server display answer on the DOM
        // remove previous answer and display current answer
        $('#product').empty();
        $('#product').append(`
            <h2>${response}</h2>
        `);
    })
}

// function to clear user inputs
function clear() {
    // testing button
    console.log('clicked the C');
    // clear inputs
    $('input').val('');
}