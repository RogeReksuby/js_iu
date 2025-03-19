// файл script.js
window.onload = function(){ 

    let a = ''
    let b = ''
    let expressionResult = ''
    let selectedOperation = null
    
    // окно вывода результата
    outputElement = document.getElementById("result")
    
    // список объектов кнопок циферблата (id которых начинается с btn_digit_)
    digitButtons = document.querySelectorAll('[id ^= "btn_digit_"]')
    
    function onDigitButtonClicked(digit) {
        if (!selectedOperation) {
            if ((digit != '.') || (digit == '.' && !a.includes(digit))) { 
                a += digit
            }
            outputElement.innerHTML = a
        } else {
            if ((digit != '.') || (digit == '.' && !b.includes(digit))) { 
                b += digit
                outputElement.innerHTML = b        
            }
        }
    }
    
    // устанавка колбек-функций на кнопки циферблата по событию нажатия
    digitButtons.forEach(button => {
        button.onclick = function() {
            const digitValue = button.innerHTML
            onDigitButtonClicked(digitValue)
        }
    });
    
    // установка колбек-функций для кнопок операций
    document.getElementById("btn_op_mult").onclick = function() { 
        if (a === '') return
        selectedOperation = 'x'
    }
    document.getElementById("btn_op_plus").onclick = function() { 
        if (a === '') return
        selectedOperation = '+'
    }
    document.getElementById("btn_op_minus").onclick = function() { 
        if (a === '') return
        selectedOperation = '-'
    }
    document.getElementById("btn_op_div").onclick = function() { 
        if (a === '') return
        selectedOperation = '/'
    }


    
    // кнопка очищения
    document.getElementById("btn_op_clear").onclick = function() { 
        a = ''
        b = ''
        selectedOperation = ''
        expressionResult = ''
        outputElement.innerHTML = 0
    }
    
    document.getElementById("btn_op_percent").onclick = function() {
        if (a == '') 
        {
            return;
        }
        expressionResult = (+a) / 100;
        a = expressionResult.toString();
        b = '';
        selectedOperation = null;
        outputElement.innerHTML = a;
    }
    
    /*
    document.getElementById("btn_on_sign").onclick = function() {
        if (a == '')
        {
            return;
        }

        expressionResult = 0 - (+a);
        a = expressionResult.toString();
        b = '';
        selectedOperation = null;
        outputElement.innerHTML = a;
    }
    */

    document.getElementById("btn_op_del").onclick = function() {
        a = a.toString()
        b = b.toString()
        
        if (a != '' && b == '')
        {
            if (a.length == 1 || (a.length == 2 && a[0] == '-'))
            {
                a = ''
                outputElement.innerHTML = 0
            }
            else
            {
                a = a.substring(0, a.length - 1)
                outputElement.innerHTML = a
            }
        }
        else if (b != '')
        {
            if (b.length == 1 || (b.length == 2 && b[0] == '-'))
                {
                    b = ''
                    outputElement.innerHTML = 0
                }
                else
                {
                    b = b.substring(0, b.length - 1)
                    outputElement.innerHTML = b
                }
        }
    }

    document.getElementById("btn_op_sqrt").onclick = function() {
        if (a != '' && b == '')
        {
            if (a > 0)
            {
                a = Math.sqrt(a)
                outputElement.innerHTML = a
            }
            else
            {
                a = ''
                outputElement.innerHTML = 'Error'
            }
        }
        else if (b != '')
        {
            if (b > 0)
                {
                    b = Math.sqrt(b)
                    outputElement.innerHTML = b
                }
                else
                {
                    b = ''
                    outputElement.innerHTML = 'Error'
                }
        }
    }



    document.getElementById("btn_op_power_two").onclick = function() 
    {
        if (a != '' && b == '')
            {
                a = (+a) * (+a)
                outputElement.innerHTML = a
            }
            else if (b != '')
            {
                b = (+b) * (+b)
                outputElement.innerHTML = b
            }
    }

    function fact(x)
    {
        if (x == 0 || x == 1) 
        {
            return 1
        }
        else
        {
            return x * fact(x - 1)
        }
    }

    document.getElementById("btn_op_fct").onclick = function()
    {
        if (a != '' && b == '')
        {
            if (a % 1 == 0 && a > 0)
            {
                a = fact(a)
                outputElement.innerHTML = a
            }
            else
            {
                a = ''
                outputElement.innerHTML = 'Error'
            }
        }
        else if (b != '')
        {
            if (b % 1 == 0 && b > 0)
            {
                b = fact(b)
                outputElement.innerHTML = b
            }
            else
            {
                b = ''
                outputElement.innerHTML = 'Error'
            }
        }
    }

    // операция смены знака +/-
    document.getElementById("btn_op_sign").onclick = function() 
    {
        if (a != '' && b == '') {
            a = ((-1) * a)
            outputElement.innerHTML = a
        } else if (b != '') {
            b = ((-1) * b)
            outputElement.innerHTML = b
        } else return
    }



    // кнопка расчёта результата
    document.getElementById("btn_op_equal").onclick = function() { 
        if (a === '' || b === '' || !selectedOperation)
            return
        console.log(a, ' ', b, ' ', selectedOperation);    
        switch(selectedOperation) { 
            case 'x':
                expressionResult = (+a) * (+b)
                break;
            case '+':
                expressionResult = (+a) + (+b)
                break;
            case '-':
                expressionResult = (+a) - (+b)
                break;
            case '/':
                expressionResult = (+a) / (+b)
                break;
        }
        
        a = expressionResult.toString()
        b = ''
        selectedOperation = null
    
        outputElement.innerHTML = a
    }
    };