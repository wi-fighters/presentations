// Access nested Objects and Arrays

// Example 1: nested object

const user = {
    id: 1,
    email: 'jack@dev.com',
    personalInfo: {
        name: 'John',
        address: {
            street: 'Example street 1',
            city: 'Berlin',
            'zip code': 12345
        }
    },
    hobbies: ['swimming', 'gaming', 'coding']
};

// access the data of the user
// console.log("user from object\n", user);

// access the name of the user
// console.log("user name:", user.personalInfo.name);


// access object data with for-in-loop

// for (key in user) {
//     if (user.hasOwnProperty(key)) {
//         let value = user[key];
//         console.log(value);
//         // console.log(key + ": " + value);
//     }
// }


console.log("==================");

// Example 2: nested array with objects inside ==============================

const users = [
    { name: 'Jack', email: 'jack@mail.com', hobbies: ['sport', 'music'] },
    { name: 'Anna', email: 'anna@email.com', hobbies: ['art', 'music'] },
    { name: 'Jan', email: 'jan@mail.com', hobbies: ['architecture'] }
];

// access the data of all users
// console.log("users:\n", users);


// access the name of a user from users
// console.log("a user from users:", users[1].name);

// console.log(`${users[1].name}'s hobby:`, users[1].hobbies);



// access users with a map method

// users.map(function (user) {
//     // console.log(user);
//     // console.log(`${user.name}'s hobbies: ${user.hobbies.join(", ")}`);
//     // console.log("user email:", user.email);
// });


console.log("==================");


// Example 3: nested Array ===================================

const nestedArr = [
    {
        hobbies: [
            { music: ['jazz', 'rock', 'pop'] },
            { sport: ['swimming', 'surfing', 'cycling', 'football', 'chess'] },
            'art',
            'dance',
            'gaming'
        ]
    }
];

// access 
// console.log(nestedArr[0].hobbies);

// access only music
// console.log(nestedArr[0].hobbies[0]);
// console.log(nestedArr[0].hobbies[1].sport[3]);


// for-of-loop

// for (let value of nestedArr) {
//     console.log(value);
// }



// for-in-loop

// for (key in nestedArr) {
//     if (nestedArr.hasOwnProperty(key)) {
//         let value = nestedArr[key];
//         console.log(value);
//         // console.log(key + ": " + value);
//     }
// }



// for-each-loop

// nestedArr.forEach(function (value) {
//     console.log(value);
// });
