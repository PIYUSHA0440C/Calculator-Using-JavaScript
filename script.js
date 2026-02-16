const display = document.getElementById('display')
const buttons = document.querySelectorAll('button')

let expression = ""

const updateDisplay = () => {
    display.textContent = expression || '0'
}

const calculate = () => {
    try {
        expression = eval(
            expression.replace(/X/g,"*")
        ).toString()
    } catch {
        expression = "Error"
    }
    updateDisplay()
}

buttons.forEach(btn => {
    btn.addEventListener('click',()=>{
        const value = btn.textContent
        console.log(value);
        
        if(value === 'C'){
            console.log("dsf");
            expression = ""
        } else if(value === '='){
            console.log("dsf");
            calculate()
            return
        } else {
            expression += value
        }
        updateDisplay()
    })
})

// Keyboard Support
document.addEventListener('keydown', e =>{
    if((e.key >= "0" && e.key <= 9) || "(+-*/.)".includes(e.key)){
        expression += e.key
    } else if(e.key === "Enter"){
        calculate();
        return;
    } else if(e.key === "Backspace"){
        if(expression === "Error"){
            expression = ""
        } else{
            expression = expression.slice(0,-1)
        }
    }
    updateDisplay()
})