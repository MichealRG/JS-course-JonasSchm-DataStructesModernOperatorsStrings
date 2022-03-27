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

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery: function ({
    startIndex = 1,
    mainIndex = 0,
    time = '22:00',
    address,
  }) {
    console.log(
      `Order received ${this.starterMenu[startIndex]} and ${this.mainMenu[mainIndex]} will be deliver to ${address} at ${time}`
    );
  },

  orderPasta: function (ing1, ing2, ing3) {
    console.log(`Delicious pasta with ${ing1}, ${ing2}, ${ing3}`);
  },

  orderPizza: function (mainIng, ...otherIngs) {
    console.log(mainIng);
    console.log(otherIngs);
  },
};

//set
const ordersSet = new Set(['Pasta', 'Pizza', 'Pizza', 'Risotto', 'Pasta']);
console.log(ordersSet);
console.log(new Set('Jonas'));
console.log(ordersSet.size);
console.log(ordersSet.has('Bread'));
console.log(ordersSet.has('Pizza'));
console.log(ordersSet.add('Garlic bread'));
console.log(ordersSet);
console.log(ordersSet.delete('Risotto'));
for (const order of ordersSet) console.log(order);
// console.log(ordersSet.clear()); //undefined
// console.log(ordersSet); //Set[]

console.log([...ordersSet]);

//maps
const rest = new Map();
rest.set('name', 'Classico Italiano');
rest.set(1, 'Fienze, Italy');
rest.set(2, 'Lisbon, Portugal');
console.log(rest);
rest
  .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
  .set('open', 11)
  .set('close', 23)
  .set(true, 'We are open')
  .set(false, 'We are closed');

console.log(rest.get('name'));
console.log(rest.get(true));
console.log(rest);

const time = 21;
console.log(rest.get(time > rest.get('open') && time < rest.get('close')));
console.log(rest.has('categories'));
rest.delete(2);
console.log(rest);
console.log(rest.size);
// console.log(rest.clear());

rest.set([1, 2], 'hello there');
rest.get([1, 2]); //undefined

rest.set(document.querySelector('h1'), 'Heading');
console.log(rest);

//map iterations
const question = new Map([
  ['question', 'What is the best programming lang?'],
  [1, 'C'],
  [2, 'Java'],
  [3, 'JS'],
  ['correct', 3],
  [true, 'Correct!'],
  [false, 'Try again'],
]);
console.log(question);

console.log(Object.entries(openingHours));
const horusMap = new Map(Object.entries(openingHours));

console.log(horusMap);

console.log(question.get('question'));
for (const [key, value] of question) {
  if (typeof key === 'number') console.log(`Answer ${key}: ${value}`);
}
const answer = Number(prompt('Your answer'));
console.log(answer);
console.log(question.get(question.get('correct') === answer));

console.log([...question]); //array of arrays
console.log(question.keys());
console.log([...question.keys()]);
console.log(question.values());
