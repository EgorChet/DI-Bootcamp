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


// flag-icons
// A curated collection of all country flags in SVG — plus the CSS for easier integration. See the demo.

// Install
// You can either download the whole project as is or install it via npm or Yarn:

// npm install flag-icons
// # or
// yarn add flag-icons
// Usage
// First, you need to import css:

// import "/node_modules/flag-icons/css/flag-icons.min.css";
// or use CDN:

// <link
//   rel="stylesheet"
//   href="https://cdn.jsdelivr.net/gh/lipis/flag-icons@7.0.0/css/flag-icons.min.css"
// />
// For using the flags inline with text add the classes .fi and .fi-xx (where xx is the ISO 3166-1-alpha-2 code of a country) to an empty <span>. If you want to have a squared version flag then add the class fis as well. Example:

// <span class="fi fi-gr"></span> <span class="fi fi-gr fis"></span>
// You could also apply this to any element, but in that case you'll have to use the fib instead of fi and you're set. This will add the correct background with the following CSS properties:

// background-size: contain;
// background-position: 50%;
// background-repeat: no-repeat;
// Which means that the flag is just going to appear in the middle of an element, so you will have to set manually the correct size of 4 by 3 ratio or if it's squared add also the flag-icon-squared class.

// Development
// Run the yarn to install the dependencies after cloning the project and you'll be able to:

// To build *.scss files

// $ yarn build
// To serve it on localhost:8000

// $ yarn start
// To have only specific countries in the css file, remove the ones that you don't need from the _flag-icons-list.scss file and build it again.

// Credits
// This project wouldn't exist without the awesome and now deleted collection of SVG flags by koppi.
// Thank you Andrejs Abrickis for providing the flag-icons name on npm.