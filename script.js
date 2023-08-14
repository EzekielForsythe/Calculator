//Variable to control the bar for the user input.
const userInput = document.getElementById("userInput");


//Variable able to 
let expression = '';

//This function receives the input, then adds the input to a variable called expression. The expression is a string. 

function press(num){
    expression += num;
    userInput.value = expression;
    console.log(expression);
}


function equal(){
    userInput.value = eval(expression);
    console.log(expression);

    expression = '';

}

function erase(){
    expression = '';
    userInput.value = expression;
    console.log(expression);
}