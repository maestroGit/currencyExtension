const main = () => {
    // DOM ELEMENTS
    const select = document.querySelectorAll('.currency');
    const amount = document.getElementById('amount');
    const ul = document.getElementById('ul');

    const host = 'api.frankfurter.app';
    const url = 'currencies';

    // API FETCH
    const options = {
        method: 'GET',
        // hearders : {'xxx-Api-key':'token'}
    }

    fetch(`https://${host}/${url}`, options)
        .then(response => response.json())
        .then((data) => {
            displayCurrencies(data);
            displayCurrencielist(data);
        })
        .catch(err => console.log(err));

    const display = (output) => {
        console.log(output);
        const out_input = document.getElementById('output');
        out_input.value = output.toFixed(2);
    };

    const updatevalue = () => {
        let currency1 = select[0].value;
        let currency2 = select[1].value;
        let value = amount.value;
        console.log({ value });
        if (currency1 != currency2) {
            convert(currency1, currency2, value);
        } else {
            alert("Choose Diffrent Currency");
        }
    }

    const time = () => {
        const today = document.getElementById('today');
        fetch(`https://${host}/2020-01-01..`)
            .then(response => response.json())
            .then(data => today.innerHTML = data.end_date);
        console.log();
    }

    const displayCurrencies = (data) => {
        const entries = Object.entries(data);
        for (var i = 0; i < entries.length; i++) {
            select[0].innerHTML += `<option>${entries[i][0]}:${entries[i][1]}</option>`;
            select[1].innerHTML += `<option>${entries[i][0]}:${entries[i][1]}</option>`;
        }
    };

    const convert = (currencyIn, currencyOut, amount) => {
        let from = currencyIn.slice(0, 3);
        let to = currencyOut.slice(0, 3);
        console.log(from)

        fetch(`https://${host}/latest?amount=${amount}&fromm=${from}&to=${to}`, options)
            .then(response => response.json())
            .then((data) => {
                let rates = Object.values(data.rates)[0];
                let outputcurrency = rates * amount;
                console.log(`${amount}  ${from} rate  ${rates} convert to ${to} are ${outputcurrency}`);
                display(outputcurrency);
            })
            .catch(err => console.log(err));
    };

    const displayCurrencielist = (data) => {
        const entries = Object.entries(data);
        let li = document.createElement("li");
        for (var i = 0; i < entries.length; i++) {
            ul.appendChild(li)
            li.innerHTML += `<li>${entries[i][1]} : ${entries[i][0]}</li>`;
            //select[1].innerHTML += `<option value="${entries[i][0]}">${entries[i][0]} : ${entries[i][1]}</option>`;
        }
    };

    time();
    // Events
    //select[0].addEventListener("change", updatevalue);
    select.forEach(item => {
        item.addEventListener("change", updatevalue)
    });

    //console.log('cargado')
}







document.addEventListener("DOMContentLoaded", main());