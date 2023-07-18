"use strict";
class MotherAccount {
    constructor(current, taken = 0, put = 0) {
        this.account = current;
        this.withdrawn = taken;
        this.deposited = put;
        this.total = current - taken + put; //QUESTO CALCOLA IL CONTO CORRENTE RISPETTO A TAKEN E PRESO
        this.history = [this.total];
    }
    showAccountDetails() {
        let momBalance = document.getElementById("momAccountHistory");
        if (momBalance !== null) {
            momBalance.innerHTML = "";
            this.history.forEach((transaction) => {
                const transactionElement = document.createElement("div");
                transactionElement.textContent = String(transaction);
                momBalance.prepend(transactionElement);
            });
        }
    }
}
const mother = new MotherAccount(0); // QUESTO FA PARTIRE L'ACCOUNT DI MAMMA DA 0
mother.showAccountDetails();
// Retrieve the HTML elements
const addAmountInput = document.getElementById("addAmount");
const addButton = document.getElementById("addButton");
const removeAmountInput = document.getElementById("removeAmount");
const removeButton = document.getElementById("removeButton");
//------------------------------------------------------------------------- THIS IS THE ADD BUTTON FUNCTION
if (addButton !== null) {
    addButton.addEventListener("click", () => {
        const amount = parseFloat(addAmountInput.value);
        if (!isNaN(amount)) {
            const increasedAmount = amount * 1.1;
            mother.deposited += increasedAmount;
            mother.total = mother.account - mother.withdrawn + mother.deposited;
            mother.history.unshift(mother.total);
            updateAccountBalance();
            mother.showAccountDetails();
        }
        addAmountInput.value = "";
    });
}
// --------------------------------------------------------------------- THIS IS THE REMOVE BUTTON FUNCTION
if (removeButton !== null) {
    removeButton.addEventListener("click", () => {
        const amount = parseFloat(removeAmountInput.value);
        if (!isNaN(amount)) {
            mother.withdrawn += amount;
            mother.total = mother.account - mother.withdrawn + mother.deposited;
            mother.history.unshift(mother.total);
            updateAccountBalance();
            mother.showAccountDetails();
        }
        removeAmountInput.value = "";
    });
}
// --------------------- THIS FUNCTION ADDS THE NEW TOTAL TO ACCOUNT HISTORY IN THE HTML AND SHOWS RED (NEGATIVE) or GREEN (POSITIVE) BALANCE
function updateAccountBalance() {
    let momAccountHistory = document.getElementById("momAccountHistory");
    if (momAccountHistory !== null) {
        if (mother.total > 0) {
            momAccountHistory.textContent = `Account Balance: ${mother.total}`;
            momAccountHistory.className = "text-success";
        }
        else if (mother.total <= 0) {
            momAccountHistory.textContent = `Account Balance: ${mother.total}`;
            momAccountHistory.className = "text-danger";
        }
    }
}
/* ----------------------------------------------------------- SON ACCOUNT -------------------------------------------------- */
/* ----------------------------------------------------------- SON ACCOUNT -------------------------------------------------- */
/* ----------------------------------------------------------- SON ACCOUNT -------------------------------------------------- */
/*
class SonAccount {
    account2?: number;
    withdrawn2?: number;
    deposited2?: number;
    total2?: number;
    history2: number[];
  
    constructor(current: number, taken: number = 0, put: number = 0) {
      this.account2 = current;
      this.withdrawn2 = taken;
      this.deposited2 = put;
  
      this.total2 = current - taken + put;
      this.history2 = [this.total2];
    }
  
    showAccountDetails() {
      let momBalance2 = document.getElementById("momAccountHistory2");
      if (momBalance2) {
        momBalance2.innerHTML = "";
        this.history2.forEach((transaction) => {
          const transactionElement = document.createElement("div");
          transactionElement.textContent = String(transaction);
          momBalance.prepend(transactionElement);
        });
      }
    }
  }
  
  const mother = new MotherAccount(0, 0, 0);
  mother.showAccountDetails();
  
  // Retrieve the HTML elements
  const addAmountInput = document.getElementById("addAmount2") as HTMLInputElement;
  const addButton = document.getElementById("addButton2");
  const removeAmountInput = document.getElementById(
    "removeAmount2"
  ) as HTMLInputElement;
  const removeButton = document.getElementById("removeButton2");
  const accountBalance = document.getElementById("accountBalance2");
  
// -----------------QUESTA FUNZIONE SERVE AD AGGIUNGERE L'AMMONTO ----------------
addButton.addEventListener("click", () => {
    const amount = parseFloat(addAmountInput.value);
    if (!isNaN(amount)) {
      mother.deposited += amount;
      mother.total = mother.account - mother.withdrawn + mother.deposited;
      mother.history.unshift(mother.total);
      updateAccountBalance();
      mother.showAccountDetails();
    }
    addAmountInput.value = "";
  });
  
  
// -----------------QUESTA FUNZIONE SERVE A RIMUOVERE L'AMMONTO ----------------
  removeButton.addEventListener("click", () => {
    const amount = parseFloat(removeAmountInput.value);
    if (!isNaN(amount)) {
      mother.withdrawn += amount;
      mother.total = mother.account - mother.withdrawn + mother.deposited;
      mother.history.unshift(mother.total);
      updateAccountBalance();
      mother.showAccountDetails();
    }
    removeAmountInput.value = "";
  });
  
  function updateAccountBalance() {
    let momAccountHistory = document.getElementById("momAccountHistory2");
  
    if (`${mother.total}` > 0) {
      momAccountHistory.textContent = `Account Balance: ${mother.total}`;
      momAccountHistory.className = "text-success";
    } else if (`${mother.total}` <= 0) {
      momAccountHistory.textContent = `Account Balance: ${mother.total}`;
      momAccountHistory.className = "text-danger";
    }
  }

  */
