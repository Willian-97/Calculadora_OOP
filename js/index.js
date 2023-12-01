class Calculator {

    constructor() {
        this.upperValue = document.querySelector("#upper-number");
        this.resultValue = document.querySelector("#result-number");;
        this.reset = 0;
    }

    checkLastDigit(input, upperValue, reg) {
        if((
            !reg.test(input) &&
            !reg.test(upperValue.substr(upperValue.length - 1))
        )) {
            return true;
        } else {
            return false;
        }
    }

    btnPress() {
        const input = this.textContent;
        const upperValue = calc.upperValue.textContent;
        // verificações
        const reg = new RegExp("^\\d+$");
        
        if(calc.checkLastDigit(input, upperValue, reg)) {
            return false;
        }


        if(upperValue === "0") {
            calc.upperValue.textContent = input;
        } else {
            calc.upperValue.textContent += input;
        }

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