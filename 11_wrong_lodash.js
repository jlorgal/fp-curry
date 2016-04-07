'use strict';

const _ = require('lodash');

const emails = ['user1@telefonica.com', 'user2@telefonica.com'];

let listToTidDomain = function(emails) {
  return _.map(emails, function(email) {
    return _.replace(email, /@telefonica.com/, '@tid.es');
  });
};

console.log(listToTidDomain(emails)); // ['user1@tid.es', 'user2@tid.es']
