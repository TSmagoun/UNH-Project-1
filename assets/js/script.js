//Set Global variables
const walletSection = document.getElementById("wallet-section");
const walletItems = document.getElementById("wallet-items");
const walletInput = document.getElementById("wallet-input");
const amountInput = document.getElementById("amount-input");
const currencySelect = document.getElementById("currency-select");
const currencyDropDown = document.getElementById("currency-drop-down");
const submitButton = document.getElementById("submit-button");
const contentSection = document.getElementById("content-section");
const audioEl = document.querySelector("#audio");

const apiKeyCoin = "13694fdd04de3586";
const apiKeyGraph = "c5nm9kqad3ib3ravd1f0";

let walletArray = [];

//Set Event Listener for Submit button
walletInput.addEventListener("submit", function(event){
    event.preventDefault()
        audioEl.play();
    const newElement = {
        coinName: currencySelect[currencySelect.selectedIndex].text,
        quantity: amountInput.value
    };
    
    walletArray.push(newElement);

    populateWallet(walletArray);

    localStorage.setItem("storedWallet", JSON.stringify(walletArray));
    
    amountInput.value = "";
    currencySelect.value = "";
});

//Populate wallet function
function populateWallet(walletArray){
    walletItems.innerHTML = "";

    for (let i=0; i < walletArray.length; i++){
        const newEl = document.createElement('li');
        newEl.textContent = walletArray[i].quantity + " - " + walletArray[i].coinName;
        walletItems.appendChild(newEl);
        }
}

//Set the localStorage function
function initStorage() {
    if (localStorage.getItem('storedWallet')){
        walletArray = JSON.parse(localStorage.getItem('storedWallet'));
        populateWallet(walletArray);
    }
    
}

initStorage()