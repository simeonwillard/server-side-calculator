console.log('client.js');

$(document).ready(readyNow);

let num1 = 0;
let num2 = 0;

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

    let dataToSend = {
        value1: $('#firstNumber').val(),
        value2: $('#secondNumber').val(),
        operator: '+'
    };
    console.log(dataToSend);
    $.ajax({
        url: '/calculate',
        type: 'POST',
        data: dataToSend
    }).then(function (response){
        console.log(response);
        console.log('received ', dataToSend);
    });
    $('input').val('');
}

function subtractNumbers() {
    console.log('clicked the minus');
    let dataToSend = {
        value1: $('#firstNumber').val(),
        value2: $('#secondNumber').val(),
        operator: '-'
    };
    console.log(dataToSend);
    $.ajax({
        url: '/calculate',
        type: 'POST',
        data: dataToSend
    }).then(function (response){
        console.log(response);
        console.log('received ', dataToSend);
    });
    $('input').val('');

    
}

function multiplyNumbers() {
    console.log('clicked the star');
    let dataToSend = {
        value1: $('#firstNumber').val(),
        value2: $('#secondNumber').val(),
        operator: '*'
    };
    console.log(dataToSend);
    $.ajax({
        url: '/calculate',
        type: 'POST',
        data: dataToSend
    }).then(function (response){
        console.log(response);
        console.log('received ', dataToSend);
    });
    $('input').val('');


}

function divideNumbers() {
    console.log('clicked the whack');

    let dataToSend = {
        value1: $('#firstNumber').val(),
        value2: $('#secondNumber').val(),
        operator: '/'
    };
    console.log(dataToSend);
    $.ajax({
        url: '/calculate',
        type: 'POST',
        data: dataToSend
    }).then(function (response){
        console.log(response);
        console.log('received ', dataToSend);
    });
    $('input').val('');
}

function result() {
    console.log('clicked equals');

    $.ajax
}

function clear() {
    console.log('clicked the C');

    // no ajax
}