let bill = document.querySelector('#bill')
let people = document.querySelector('#people')

let percent = document.querySelectorAll('.percent')
let percentCustom = document.querySelector('#percentCustom')

let resultTip = document.querySelector('#resultTip')
let resultTotal = document.querySelector('#resultTotal')
let resetBtn = document.querySelector('#resetBtn')

let tip = 0;

const calculation = () => {
    let tipPerPerson = ((bill.value / 100) * tip) / people.value;
    let totalPerPerson = bill.value / people.value + tipPerPerson;
    resultTip.innerText = "$" + tipPerPerson.toFixed(2);
    resultTotal.innerText = "$" + totalPerPerson.toFixed(2);
};

// Add event listeners to each tip button 
const chooseTip = () => {
    const tips = ["5", "10", "15", "25", "50"]
    tips.forEach((amount) => {
      document.getElementById(amount).addEventListener("click", () => {
        tip = amount;
        document.getElementById(amount).classList.add("active").
        calculation();
    })})
};

const customTip = () => {
    let input = document.getElementById("percentCustom").value;  
    if (isNaN(input)) {
      tip = 0;
    } else {
      tip = input;
    }
    calculation();
  };



// reseting clicking on "RESET"-button
resetBtn.addEventListener('click', () => {
    resultTip.innerHTML = "$0.00";
    resultTotal.innerHTML = "$0.00";
    bill.value;
    percentCustom.value;
    people.value;
})

window.addEventListener('load', () => {
    // capture input values onChange
    bill.addEventListener('input', () => calculation())
    people.addEventListener('input', () => calculation())
    percentCustom.addEventListener('input', () => customTip())
    chooseTip()

})