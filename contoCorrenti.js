"use strict";
class MotherAccount {
    constructor(current, taken = 0, put = 0) {
        this.account = current;
        this.withdrawn = taken;
        this.deposited = put;
        this.total = current - taken + put;
    }
    showAccountDetails() {
        let momBalance = document.getElementById('momAccountHistory');
        if (momBalance) {
            momBalance.append(String(this.total));
            console.log(this.total);
        }
    }
}
const mother = new MotherAccount(45, 76, 200);
mother.showAccountDetails();
class SonAccount {
    constructor(current, taken = 0, put = 0) {
        this.account2 = current;
        this.withdrawn2 = taken;
        this.deposited2 = put;
    }
}
