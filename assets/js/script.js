const currency_one = document.getElementById('currency_one');
const amount_one = document.getElementById('amount-one');

const currency_two = document.getElementById('currency_two');
const amount_two = document.getElementById('amount-two');

const swapBtn = document.getElementById('swap');
const result = document.getElementById('rate');


function calculate(){
    let currency_one_value = currency_one.value;
    let currency_two_value = currency_two.value;

    fetch(`https://open.exchangerate-api.com/v6/latest`)
    .then((res) => res.json())
    .then((data) => {
        console.log(data)
        
        const rate = data.rates[currency_two_value] / data.rates[currency_one_value];

        result.innerHTML = `1 ${currency_one_value} = ${rate} ${currency_two_value}`;

        amount_two.value = (amount_one.value * rate).toFixed(2);
        
    })
    .catch((error) => {
        console.log(error.message);
    });
}



currency_one.addEventListener("change", calculate); //Onchange Event
amount_one.addEventListener("input", calculate);  //OnInput Event

currency_two.addEventListener("change", calculate); 
amount_two.addEventListener("input", calculate); 

swapBtn.addEventListener("click", () =>{
        const temp = currency_one.value;
        currency_one.value = currency_two.value;
        currency_two.value = temp;
        calculate();
}); 




