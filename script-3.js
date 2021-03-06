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

//coding chellange 3
const gameEvents = new Map([
  [17, '??? GOAL'],
  [36, '???? Substitution'],
  [47, '??? GOAL'],
  [61, '???? Substitution'],
  [64, '???? Yellow card'],
  [69, '???? Red card'],
  [70, '???? Substitution'],
  [72, '???? Substitution'],
  [76, '??? GOAL'],
  [80, '??? GOAL'],
  [92, '???? Yellow card'],
]);

//1
const events = new Set([...gameEvents.values()]);
console.log(events);
const array = [...new Set([...gameEvents.values()])];
console.log(array);

//2
gameEvents.delete(64);
console.log(gameEvents);

//3
// console.log();
// let amountOfEvents = new Map();
// console.log(gameEvents.values());
// for ([key, eventt] of gameEvents) {
//   console.log(eventt);
//   amountOfEvents.set(
//     eventt,
//     amountOfEvents.has(eventt) ? amountOfEvents.get(eventt) + 1 : 0
//   );
// }
// console.log(amountOfEvents);
console.log(`An event happend on avg, every ${90 / gameEvents.size} minutes`);
const timeMeatch = [...gameEvents.keys()].pop();
console.log(
  `An event happend on avg, every ${timeMeatch / gameEvents.size} minutes`
);

//4
for (const [key, ev] of gameEvents) {
  console.log(
    key <= 45 ? `First Half ${key}: ${ev}` : `Second Half ${key}: ${ev}`
  );
}

//strings
const airline = 'Tap Air Portugal';
const plane = 'A320';

console.log(plane[0]);
console.log(plane[1]);
console.log(plane[2]);
console.log('B737'[0]);
console.log('B737'.length);
console.log(airline.indexOf('r'));
console.log(airline.lastIndexOf('r'));
console.log(airline.indexOf('Portugal')); //8
console.log(airline.indexOf('portugal')); //-1

console.log(airline.slice(4)); //to end of string
console.log(airline.slice(4, 7)); //to 7 index
console.log(airline.slice(0, airline.indexOf(' '))); //do spacji
console.log(airline.slice(airline.lastIndexOf(' ') + 1)); //od ostatniej spacji do konca

console.log(airline.slice(-2)); //al
console.log(airline.slice(1, -1));

const checkMiddleSeat = function (seat) {
  //B | E middle seat
  const s = seat.slice(-1);
  if (s === 'B' || s === 'E') console.log('Middle SEAT!');
};

checkMiddleSeat('11B');
checkMiddleSeat('23C');
checkMiddleSeat('3E');

console.log(airline.toUpperCase());
const passanger = 'jOnAS';
console.log(
  passanger[0].toUpperCase() + passanger.slice(1).toLocaleLowerCase()
);
const email = 'hello@jonas.io';
const loginEmail = '   Hello@Jonas.Io \n';
const lowerTrimmedEmail = loginEmail.toLocaleLowerCase().trim();
console.log(lowerTrimmedEmail);

//replacing
const priceUE = '288.33???';
const priceUS = priceUE.replace('???', '$').replace('.', ',');
console.log(priceUS);
const annoucment =
  'Please passanger come to boarding door 24. Boarding door 24!';
console.log(annoucment.replace('door', 'gate'));
console.log(annoucment.replaceAll('door', 'gate'));
console.log(annoucment.replace(/door/g, 'gate'));

//booleans
const plane1 = 'Airbus A32@neo';
console.log(plane1.includes('A32'));
console.log(plane1.includes('Boeing'));
console.log(plane1.startsWith('neo'));
console.log(plane1.endsWith('neo'));

//practice exercises
const checkBackage = function (items) {
  const backage = items.toLocaleLowerCase();
  if (backage.includes('knife') || backage.includes('gun')) {
    console.log('You are not allowed aboard');
  } else {
    console.log('Welcome aboard');
  }
};
checkBackage('I have a laptop, some foof and a pocket knife');
checkBackage('Socks and camera');
checkBackage('Got some snacks and a gun for protection');

//split
console.log(`a+very+nice+string`.split('+'));
const [firstName, lastName] = 'Jonas Schmit'.split(' ');
const newName = ['Mr.', firstName, lastName.toUpperCase()].join(' ');
console.log(newName);

const passanger2 = 'jassica ann smith davis';
const capitilizeString = function (name) {
  const names = name.split(' ');
  const namesUpper = [];
  for (const n of names) {
    namesUpper.push(n[0].toUpperCase() + n.slice(1));
  }
  console.log(namesUpper.join(' '));
};
capitilizeString(passanger2);

//padding
const message = 'GO to gate 23';
console.log(message.padStart(25, '+').padEnd(30, '+'));
const messageShort = 'GO';
console.log(messageShort.padStart(25, '+'));
const maskCredictCard = function (number) {
  const stringNumber = number + '';
  const last = stringNumber.slice(-4);
  return last.padStart(stringNumber.length, '*');
};
console.log(maskCredictCard('34234234234234'));
console.log(maskCredictCard(34234234234234));

//repeat
const message2 = 'Bad weather... All departures delayed...';
console.log(message2.repeat(5));
//coding chellange 4
document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));
const testArray = `    underscore_case
  first_name
    Some_Variable  
calculate_AGE   
  delayed_departure`;

document.querySelector('button').addEventListener('click', () => {
  const convertMe = document.querySelector('textarea').value;
  convertTocamelCase(convertMe);
});

const convertTocamelCase = strings => {
  const arrayOfStrings = strings.split('\n');
  const cammelCasedStrings = [];
  let maxLength = 0;
  for (const [key, singleString] of Object.entries(arrayOfStrings)) {
    const trimmedString = singleString.trim().toLowerCase();
    // const indexOfUnderscore = trimmedString.indexOf('_');
    // const cammelCasedString =
    //   trimmedString.slice(0, indexOfUnderscore) +
    //   trimmedString[indexOfUnderscore + 1].toUpperCase() +
    //   trimmedString.slice(indexOfUnderscore + 2);
    const splitedParts = trimmedString.split('_');
    const cammelCasedString =
      splitedParts[0] +
      splitedParts[1][0].toUpperCase() +
      splitedParts[1].slice(1);
    maxLength =
      cammelCasedString.length > maxLength
        ? cammelCasedString.length
        : maxLength;
    cammelCasedStrings.push(cammelCasedString);
  }
  for (const [key, value] of cammelCasedStrings.entries()) {
    console.log(
      `${value.padEnd(maxLength + 5)} ${'???'.repeat(Number(key) + 1)}`
    );
  }
  console.log(cammelCasedStrings);
};

convertTocamelCase(testArray);
