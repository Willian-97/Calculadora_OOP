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

    sum(n1, n2){
        return parseFloat(n1) +  parseFloat(n2);
    }


    subtraction(n1, n2){
        return parseFloat(n1) - parseFloat(n2);
    }

    multiplication(n1, n2){
        return parseFloat(n1) * parseFloat(n2);
    }

    division(n1, n2){
        return parseFloat(n1) / parseFloat(n2);
    }


    // atualiza valores
    refreshValues(total){
        this.upperValue.textContent = total;
        this.resultValue.textContent = total;
    }

    resolution() {
        let upperValueArray = (this.upperValue.textContent).split(" ");
        let result = 0;

        for(let i = 0; i <= upperValueArray.length; i++){
            let operation = 0;
            let actualItem = upperValueArray[i];

            if(actualItem === "X"){
                result = calc.multiplication(upperValueArray[i - 1], upperValueArray[i + 1]); 
                operation = 1;

            } else if (actualItem == "/"){
                result = calc.division(upperValueArray[i - 1], upperValueArray[i + 1]);
                operation = 1;

            } else if (!upperValueArray.includes("X") && !upperValueArray.includes("/")){

                if(actualItem == "+"){
                    result = calc.sum(upperValueArray[i - 1], upperValueArray[i + 1]);
                    operation = 1;

                } else if (actualItem == "-") {
                    result = calc.subtraction(upperValueArray[i - 1], upperValueArray[i + 1]);
                    operation = 1;

                }

            }

            // atualiza valores do array para proxima opração
            if(operation){
                upperValueArray[i - 1] = result;
                upperValueArray.splice(i, 2);
                i = 0;
            }
        }
        
        if(result){
            calc.reset = 1;
        }
        
        calc.refreshValues(result);
    }

    clearValue() {
        this.upperValue.textContent = 0;
        this.resultValue.textContent = 0;
    }

    btnPress() {
        let input = this.textContent;
        let upperValue = calc.upperValue.textContent;
        // verificações
        const reg = new RegExp("^\\d+$");

        // limpa o display para proxima operação
        if(calc.reset && reg.test(input)){
            upperValue ='0';
        }

        // limpa a prop de reset
        calc.reset = 0;

        if (input === "AC") {

            calc.clearValue();   
        }else if(input === "=") {
            calc.resolution();
        
        } else {
            if (calc.checkLastDigit(input, upperValue, reg)) {
                return false;
            }

            // adiciona espaços aos operadores
            if(!reg.test(input)){
                input = ` ${input} `;
            } 

            if (upperValue == "0") {
                if(reg.test(input)){
                    calc.upperValue.textContent = input;                
                }
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