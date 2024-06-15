let groceryList = ['apples', 'bananas', 'carrots', 'bread'];

// Add an item to the list
groceryList.push('milk');

// Remove an item from the list
let indexToRemove = groceryList.indexOf('bananas');
if (indexToRemove !== -1) {
    groceryList.splice(indexToRemove, 1);
}

// Print the list
console.log('My grocery list:');
for (let item of groceryList) {
    console.log('- ' + item);
}