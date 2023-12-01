class Calculator {

    constructor() {
        this.upperValue = document.querySelector("#upper-number");
        this.resultValue = document.querySelector("#result-number");;
        this.reset = 0;
    }

    btnPress() {
        console.log(this);
    }
}

// start obj

const calc = new Calculator;

// start btns

const buttons = document.querySelectorAll(".btn");


// map all buttons
for(let i = 0; buttons.length > i; i++){
    buttons[i].addEventListener("click", calc.btnPress);
}