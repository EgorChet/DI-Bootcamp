// Daily Challenge: Currency Converter
// Last Updated: September 22nd, 2023

// What You Will Learn :
// Fetch API
// async await

// Instructions
// You will create a currencies converter:
// In this application we’re going receive data from two asynchronous sources.

// You will use :
// This documentation
// Create your own API key by signing up - you will be able to make more requests :)

// Note
// The program should take the currency which the user currently has and the currency in which they would like to receive, as well as the amount of money. Afterwards, the program will output the correct exchange rate based on the data from the APIs.

// First, you need to fetch all the supported currencies, in order to add the currencies options (ie FROM - To) in the currency converter. Check out this page on Supported Codes Endpoint from the ExchangeRate API documentation.

// To convert from a currency, to another one, you need to fetch conversion rate from the Pair Conversion API endpoint. Check out this page on Pair conversion requests from the ExchangeRate API documentation.
// Hint: You could also supply an optional AMOUNT variable in the query of the request.

// Bonus: Add this “switch” button on the page, when clicked on it will switch the currencies and display the new amount converted.
// Example : if the conversion was from EUR to GBP, as soon as the button is clicked on, the conversion should be from GBP to EUR.const
// Replace 'YOUR-API-KEY' with your actual API key
const apiKey = '42a9546e92ae9f1acbf93d86';

// Get references to HTML elements
const baseCurrencySelect = document.getElementById('baseCurrency');
const targetCurrencySelect = document.getElementById('targetCurrency');
const amountInput = document.getElementById('amount');
const convertButton = document.getElementById('convertButton');
const resultElement = document.getElementById('result');
const switchButton = document.getElementById('switchButton');

// Function to populate currency dropdowns
function populateCurrencyDropdowns(currencies) {
    currencies.forEach(currency => {
        const option1 = document.createElement('option');
        const option2 = document.createElement('option');
        option1.value = currency;
        option1.textContent = currency;
        option2.value = currency;
        option2.textContent = currency;
        baseCurrencySelect.appendChild(option1);
        targetCurrencySelect.appendChild(option2);
    });

    // Set initial base and target currencies
    baseCurrencySelect.value = 'ILS'; // Israeli New Shekel
    targetCurrencySelect.value = 'RUB'; // Russian Ruble
}

// Fetch supported currencies and populate the dropdowns
fetch(`https://v6.exchangerate-api.com/v6/${apiKey}/latest/USD`)
    .then(response => response.json())
    .then(data => {
        if (data.result === 'success') {
            const currencies = Object.keys(data.conversion_rates);
            populateCurrencyDropdowns(currencies);
        } else {
            console.error('Error fetching supported currencies.');
        }
    });

// Function to convert currencies
function convertCurrency() {
    const baseCurrency = baseCurrencySelect.value;
    const targetCurrency = targetCurrencySelect.value;
    const amount = parseFloat(amountInput.value);

    if (!isNaN(amount)) {
        fetch(`https://v6.exchangerate-api.com/v6/${apiKey}/pair/${baseCurrency}/${targetCurrency}/${amount}`)
            .then(response => response.json())
            .then(data => {
                if (data.result === 'success') {
                    const convertedAmount = data.conversion_result;
                    resultElement.textContent = `${amount} ${baseCurrency} = ${convertedAmount} ${targetCurrency}`;
                } else {
                    resultElement.textContent = 'Error converting currencies.';
                }
            });
    } else {
        resultElement.textContent = 'Please enter a valid amount.';
    }
}

// Event listener for the Convert button
convertButton.addEventListener('click', convertCurrency);

// Event listener for the Switch button
switchButton.addEventListener('click', () => {
    const temp = baseCurrencySelect.value;
    baseCurrencySelect.value = targetCurrencySelect.value;
    targetCurrencySelect.value = temp;
});
