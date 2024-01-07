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
// Simulated currency data with flags and rates
// Define a list of your selected currencies and their flags
// Place your API key here
const apiKey = '42a9546e92ae9f1acbf93d86'; // Replace with your actual API key from ExchangeRate-API

// Define a list of selected currencies and their flags
const currencyList = [
  { code: "USD", name: "US Dollar", flag: "🇺🇸" },
  { code: "EUR", name: "Euro", flag: "🇪🇺" },
  { code: "ILS", name: "Israeli New Shekel", flag: "🇮🇱" },
  { code: "RUB", name: "Russian Ruble", flag: "🇷🇺" },
  { code: "GBP", name: "British Pound", flag: "🇬🇧" },
  { code: "JPY", name: "Japanese Yen", flag: "🇯🇵" },
  { code: "CNY", name: "Chinese Yuan", flag: "🇨🇳" },
  { code: "INR", name: "Indian Rupee", flag: "🇮🇳" },
  { code: "BRL", name: "Brazilian Real", flag: "🇧🇷" },
  { code: "CAD", name: "Canadian Dollar", flag: "🇨🇦" }
];

// Get references to HTML elements
const baseCurrencySelect = document.getElementById('baseCurrency');
const targetCurrencySelect = document.getElementById('targetCurrency');
const amountInput = document.getElementById('amount');
const convertButton = document.getElementById('convertButton');
const resultElement = document.getElementById('result');
const switchButton = document.getElementById('switchButton');

// Function to populate currency dropdowns with predefined list and flags
function populateCurrencyDropdowns() {
  currencyList.forEach(currency => {
    const option1 = document.createElement('option');
    option1.value = currency.code;
    option1.textContent = `${currency.flag} ${currency.code} - ${currency.name}`;
    baseCurrencySelect.appendChild(option1.cloneNode(true)); // Clone the option for the second dropdown
    targetCurrencySelect.appendChild(option1);
  });

  // Set initial base and target currencies
  baseCurrencySelect.value = 'ILS'; // Default to US Dollar
  targetCurrencySelect.value = 'RUB'; // Default to Euro
}

// Call populateCurrencyDropdowns on page load
document.addEventListener('DOMContentLoaded', populateCurrencyDropdowns);

// Convert currencies using the API
async function convertCurrency() {
  const baseCurrency = baseCurrencySelect.value;
  const targetCurrency = targetCurrencySelect.value;
  const amount = parseFloat(amountInput.value);

  if (!isNaN(amount)) {
    try {
      const response = await fetch(`https://v6.exchangerate-api.com/v6/${apiKey}/pair/${baseCurrency}/${targetCurrency}/${amount}`);
      const data = await response.json();
      
      if (data.result === 'success') {
        const convertedAmount = data.conversion_result;
        resultElement.textContent = `${amount} ${baseCurrency} = ${convertedAmount} ${targetCurrency}`;
      } else {
        resultElement.textContent = 'Error converting currencies.';
      }
    } catch (error) {
      resultElement.textContent = 'An error occurred while fetching the conversion rate.';
      console.error('Error:', error);
    }
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