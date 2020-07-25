var numberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log("Number array: ", numberArray);

function evenNumber(value) {
    return value % 2 == 0;
}

var filteredArray = numberArray.filter(evenNumber);
console.log("Filtered Number array: ", filteredArray);

var shoppingList1 = [
    "Milk", "Donuts", "Cookies", "Chocolate", "Peanut Butter", "Pepto Bismol", "Pepto Bismol (Chocolate)", "Pepto Bismol (Cookie)"
];
console.log("Shopping List: ", shoppingList1);

var searchValue = "Bismol";

function containsFilter(value) {
    return value.indexOf(searchValue) !== -1;
}

var filteredShoppingList1 = shoppingList1.filter(containsFilter);
console.log("New Filtered Shopping List: ", filteredShoppingList1);