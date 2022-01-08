// Write your solution in this file!
var customerName = 'bob'

function setBestCustomer() {
    bestCustomer = 'not bob';
  return bestCustomer;
}

function upperCaseCustomerName(){
    customerName = customerName.toUpperCase()
}

function overwriteBestCustomer(){
    return bestCustomer = 'maybe bob';
}

const leastFavoriteCustomer = 'michael';
function changeLeastFavoriteCustomer(){
    leastFavoriteCustomer = 'Matthew';
    return leastFavoriteCustomer;
}