'use strict';

const R = require('ramda');

const emails = ['user1@telefonica.com', 'user2@telefonica.com'];

let toTidDomain = R.replace(/@telefonica.com/, '@tid.es');
let listToTidDomain = R.map(toTidDomain);

console.log(listToTidDomain(emails)); // ['user1@tid.es', 'user2@tid.es']
