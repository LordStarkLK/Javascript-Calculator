class Calculator{
    constructor(currentNumber,previousNumber){
        this.currentNumber = currentNumber;
        this.previousNumber = previousNumber;
    }
    clear(){
        this.currentNumber = '';
        this.previousNumber = '';
        this.operation = undefined;
    }
    delete(){

    }
    appendNumber(number){
        this.currentNumber = number;
    }
    chooseOperation(operation){

    }
    compute(){

    }
    update(){
        console.log(this.currentNumber);
        this.currentNumber.textContent = this.currentNumber;
        console.log(this.currentNumber.textContent);
        
    }
}

const numberButtons = document.querySelectorAll('[data-number]');
const operationButtons = document.querySelectorAll('[data-opeartion]');
const equalsButton = document.querySelector('[data-equals]');
const deleteButton = document.querySelector('[data-delete]');
const clearButton = document.querySelector('[data-clear]');
const currentNumber = document.getElementsByClassName("curNumber");
const previousNumber = document.querySelector("curNumber");

const calculator = new Calculator(currentNumber,previousNumber);
numberButtons.forEach(button => {
    button.addEventListener('click',() => {
        calculator.appendNumber(button.innerText);
        calculator.update();
    })
})