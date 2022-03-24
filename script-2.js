'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

const weekDays = ['Mond', 'Tues', 'Wed', 'Thur', 'Fri', 'Sat', 'Sun'];

const openingHours = {
  [weekDays[3]]: {
    open: 12,
    close: 22,
  },
  [weekDays[4]]: {
    open: 11,
    close: 23,
  },
  sat: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  //es6 enhanced objects literalas
  openingHours,

  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery({ startIndex = 1, mainIndex = 0, time = '22:00', address }) {
    console.log(
      `Order received ${this.starterMenu[startIndex]} and ${this.mainMenu[mainIndex]} will be deliver to ${address} at ${time}`
    );
  },

  orderPasta(ing1, ing2, ing3) {
    console.log(`Delicious pasta with ${ing1}, ${ing2}, ${ing3}`);
  },

  orderPizza(mainIng, ...otherIngs) {
    console.log(mainIng);
    console.log(otherIngs);
  },
};

//looping arrays: the for of loop
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

for (const item of menu) console.log(item);
for (const item of menu.entries()) console.log(item);
console.log([...menu.entries()]);

//enhanced objects literals
console.log(openingHours);

//optional chaining (?)
if (restaurant.openingHours && restaurant.openingHours.Fri)
  //old way to check is there prop available
  console.log(restaurant.openingHours.Fri.open);

console.log(restaurant.openingHours.mon?.open); //undefined
console.log(restaurant.openingHours?.mon?.open); //undefined

const days = ['Mond', 'Tues', 'Wed', 'Thur', 'Fri', 'Sat', 'Sun'];
for (const day of days) {
  console.log(day);
  const open = restaurant.openingHours[day]?.open ?? 'closed';
  console.log(`On ${day}, we open at ${open}`);
}

//methods
console.log(restaurant.order?.(0, 1) ?? 'Method doesnt exist');
console.log(restaurant.orderRisooto?.(0, 1) ?? 'Method doesnt exist');
//arrays
const users = [{ name: 'Johnas', email: 'Johnas@io' }];
console.log(users[0]?.name ?? 'User array empty');

//loop over array
for (const day of Object.keys(openingHours)) {
  console.log(day); // Thu Fri Sat
}
for (const day of Object.values(openingHours)) {
  console.log(day); // {} {} obikety
}
const entries = Object.entries(openingHours);
console.log(entries);
for (const x of entries) {
  console.log(x);
}
for (const [key, { open, close }] of entries) {
  //destructure
  console.log(`${key}: we open at ${open} and close at ${close}`);
}
