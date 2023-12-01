class Calculator {

    constructor() {
        this.upperValue = document.querySelector("#upper-number");
        this.resultValue = document.querySelector("#result-number");;
        this.reset = 0;
    }

    checkLastDigit(input, upperValue, reg) {
        if ((
            !reg.test(input) &&
            !reg.test(upperValue.substr(upperValue.length - 1))
        )) {
            return true;
        } else {
            return false;
        }
    }

    clearValue() {
        this.upperValue.textContent = 0;
        this.resultValue.textContent = 0;
    }

    btnPress() {
        let input = this.textContent;
        const upperValue = calc.upperValue.textContent;
        // verificações
        const reg = new RegExp("^\\d+$");

        if (input === "AC") {

            calc.clearValue();

        } else {
            if (calc.checkLastDigit(input, upperValue, reg)) {
                return false;
            }

            // adiciona espaços aos operadores
            if(!reg.test(input)){
                input = ` ${input} `;
            } 

            if (upperValue === "0") {
                calc.upperValue.textContent = input;
            } else {
                calc.upperValue.textContent += input;
            }
        }

    }
}

// start obj

const calc = new Calculator;

// start btns

const buttons = document.querySelectorAll(".btn");


// map all buttons
for (let i = 0; buttons.length > i; i++) {
    buttons[i].addEventListener("click", calc.btnPress);
}