// const coffeeMenu = require(./coffee_data);

//Prompt 2 - Prints an array of all the drinks on the menu.

const printName = (item) => {
  return item.name;
};
console.log(coffeeMenu.map(printName));

// 3. Print an array of all the drinks on the menu.

function getName(element) {
  return element.name;
}
const listOfDrinks = coffeeMenu.map(getName);

// 4. Print an array of drinks that cost 5 and under.

function isUnder5Dollars(element) {
  return element.price <= 5; // if true - keep the element
}

const filteredMenu = coffeeMenu.filter(isUnder5Dollars);

console.log("filtered menu", filteredMenu);
coffeeMenu.find();

// 5. Print an array of drinks that are priced at an even number.

// 6. Print the total if you were to order one of every drink.
//total if you were to order one of every drink.
//[1, 2, 3, 4, 5] => 15

function addPrices(total, currentElement) {
  return total + currentElement.price;
}

console.log("total price", coffeeMenu.reduce(addPrices, 0));

// 7. Print an array with all the drinks that are seasonal.

const isBroken = (item) => {
  return item.condition === "seasonal";
};
const brokenItems = coffeeMenu.filter(isBroken);
console.table(brokenItems);

// 8. Print all the seasonal drinks with the words "with imported beans" after the item name. For example: "affogato with imported beans".
