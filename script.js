'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

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

//Destructuring objects
const { name: restaurantName, openingHours, categories } = restaurant;
console.log(restaurantName, openingHours, categories);

const { menu = [], starterMenu: starters = [], mainMenu } = restaurant;
console.log(menu, starters);

let abc = 111;
let bcd = 999;
const obj = { abc: 23, bcd: 7, c: 14 };
({ abc, bcd } = obj);

const {
  fri: { open, close },
} = openingHours;
console.log(open, close);

restaurant.orderDelivery({
  time: '22:30',
  address: 'Via del sole 32',
  mainIndex: 2,
  startIndex: 2,
});

//Destructuring arrays
const arr = [2, 3, 4];
const a = arr[0];
const b = arr[0];
const c = arr[0];
const [x, y, z] = arr;
console.log(x, y, z);

let [first, , sec] = restaurant.categories;
console.log(first, sec);

// const temp = first;
// first = sec;
// sec = temp;
[first, sec] = [sec, first];
console.log(first, sec);

const [starter, main] = restaurant.order(2, 0);
console.log(starter, main);

const nested = [2, 4, [5, 6]];
const [i, , [j, k]] = nested;
console.log(i, j, k);

const [p = 1, q = 1, r = 1] = [8, 9];
console.log(p, q, r); //8,9,1

//the spread operator (...)
const arr2 = [7, 8, 9];
const badNewArr = [1, 2, ...arr2];
console.log(badNewArr); // [1,2,7,8,9]

console.log(...badNewArr); // 1 2 7 8 9

const newMenu = [...restaurant.mainMenu, 'Gnocci'];
console.log(newMenu); // [values of restaurant, Gnocci]

//copy array - shallow copy
const mainMenuCopy = [...restaurant.mainMenu];

//join 2 arrays
const arrays = [...restaurant.mainMenu, ...restaurant.starterMenu];

const nameJonas = 'Jonas';
const letters = [...nameJonas, ' ', 'S.'];
console.log(letters); //[ "J", "o", "n", "a", "s", " ", "S."]

const ingredients = [
  prompt("Let's make pasta, ing1:"),
  prompt("Let's make pasta, ing2:"),
  prompt("Let's make pasta, ing3:"),
];
restaurant.orderPasta(...ingredients);

//objects
const newRestaurant = { ...restaurant, founder: 'Giussepppi' };
console.log(newRestaurant);
const restaurantCopy = { ...restaurant };
restaurantCopy.name = 'ROMA';
console.log(restaurant);
console.log(restaurantCopy);

//Rest pattern
const [one, two, ...others] = [1, 2, 3, 4];
console.log(one, two, others);

const [pizza, , risottom, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];
console.log(pizza, risottom, otherFood);

const { sat, ...weekdays } = restaurant.openingHours;
console.log(weekdays);

//Rest Pattern functions
const add = function (...numbers) {
  let sum = 0;
  for (let index = 0; index < numbers.length; index++) {
    sum += numbers[index];
  }
  console.log(sum);
};
add(2, 3);
add(2, 3, 7, 2);

const xz = [23, 5, 7];
add(...xz);

restaurant.orderPizza('mushrroms', 'onion', 'olives', 'spinach');

//Short Circuiting  && ||
console.log(3 || 'Jan'); //3
console.log('' || 'Jan'); //Jan
console.log(undefined || null); //null

//Nullish Coalescing ??
restaurant.numGuests = 0;
const guests = restaurant.numGuests || 10;
console.log(guests); //10 <- bo 0 to falsy value
const guestCorrect = restaurant.numGuests ?? 10;
console.log(guestCorrect); //0

//Logical Assignment operator
const rest1 = { name: 'Carpi', numGuests: 15 };
const rest2 = { name: 'Carpi', owner: 'Antoni' };
rest1.numGuests = rest1.numGuests || 10;
rest2.numGuests = rest2.numGuests || 10;
console.log(rest1);
console.log(rest2);
//Or assingment operator
rest1.numGuests ||= 10;
rest2.numGuests ||= 10;
console.log(rest1);
console.log(rest2);
//Nullish assingment operator
const rest3 = { name: 'Panteo', owner: 'Antoni', numGuests: 0 };
rest3.numGuests ??= 10;
console.log(rest3);
//AND assignment operator
rest2.owner = rest2.owner && '<ANONYMOUS>';
rest1.owner &&= '<ANONYMOUS>';
rest2.owner &&= '<ANONYMOUS>';
console.log(rest1);
console.log(rest2);

//coding chellange 1
const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};
//1
const [players1, players2] = game.players;
console.log(players1, players2);
//2
const [gk, ...fieldPlayers] = players1;
console.log(gk, fieldPlayers);
//3
const allPlayers = [...players1, ...players2];
console.log(allPlayers);
//4
const players1Final = [...players1, 'Thiago', 'Couthino', 'Perisic'];
console.log(players1Final);
//5
const {
  odds: { team1, x: draw, team2 },
} = game;
console.log(team1, draw, team2);
//6
const printGoals = function (...players) {
  console.log(`${players.length} goals were scored`);
};
printGoals('Davies', 'Muller', 'Lewandowski');
printGoals(...game.scored);
//7
team1 < team2 && console.log('Team 1 is more likely to win');
team1 > team2 && console.log('Team 2 is more likely to win');
