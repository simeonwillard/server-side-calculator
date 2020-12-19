console.log('client.js');

$(document).ready(readyNow);

let num1 = 0;
let num2 = 0;
let operation = '';
let dataToSend = {};

// num1 = $('#firstNumber').val();
// num2 = $('#secondNumber').val();

function readyNow() {
    console.log('jQuery is loaded');

    $('#plusBtn').on('click', addNumbers);
    $('#minusBtn').on('click', subtractNumbers);
    $('#multiplyBtn').on('click', multiplyNumbers);
    $('#divideBtn').on('click', divideNumbers);
    $('#equalsBtn').on('click', result);
    $('#clearBtn').on('click', clear);      
}

function addNumbers() {
    console.log('clicked the plus');
    operation = '+';
    
    console.log('operator is ', operation);
}

function subtractNumbers() {
    console.log('clicked the minus');
    operation = '-';
    
    console.log('operator is ', operation);
}

function multiplyNumbers() {
    console.log('clicked the star');
    operation = '*';
    
    console.log('operator is ', operation);
}

function divideNumbers() {
    console.log('clicked the whack');

    operation = '/';
    
    console.log('operator is ', operation);
}

function result() {
    console.log('clicked equals');
    dataToSend = {
        value1: $('#firstNumber').val(),
        value2: $('#secondNumber').val(),
        operator: operation
    }
    console.log(dataToSend)
    $.ajax({
        url: '/calculate',
        type: 'POST',
        data: dataToSend
    }).then(function (response) {
        console.log(response);
        console.log('received ', dataToSend);
        displayHistory();
    });
}

function displayHistory() {
    console.log('in displayHistory');
    $.ajax({
        url: '/history',
        type: 'GET'
    }).then(function (response) {
        $('#history').append(`
            <li>${response}</li>
        `);
    })
}

function clear() {
    console.log('clicked the C');

    // no ajax
}