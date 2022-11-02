// DOM ELEMENTS
const select = document.querySelectorAll('.currency');
const options = {
    method: 'GET',
}

const host = 'api.frankfurter.app';
const url = 'currencies';

fetch(`https://${host}/latest?amount=100&from=EUR&to=USD`, options)
    .then(response => response.json())
    .then((data) => {
        display(data);
    });

fetch(`https://${host}/${url}`, options)
    .then(response => response.json())
    .then((data) => {
        displayCurrencies(data);
    });

const display = (data) => { console.log(`100 EUR = ${data.rates.USD} USD`) };


function updatevalue() {
    let currency1 = select[0].value;
    //let currency2 = select[1].value;
    let value = number.value;
    // if (currency1 != currency2) {
    //     convert(currency1, currency2, value);
    // } else {
    //     alert("Choose Diffrent Currency");
    // }
}
const displayCurrencies = (data) => {
    const entries = Object.entries(data);
    console.log(entries);
    for (var i = 0; i < entries.length; i++) {
        select[0].innerHTML += `<option>${entries[i][0]} : ${entries[i][1]}</option>`;
        //select[1].innerHTML += `<option value="${entries[i][0]}">${entries[i][0]} : ${entries[i][1]}</option>`;
    }
};