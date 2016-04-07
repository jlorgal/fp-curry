'use strict';

const R = require('ramda');

const tasks = [
  {name: 'primera', user: 'user1', completed: true},
  {name: 'segunda', user: 'user1', completed: false},
  {name: 'tercera', user: 'user2', completed: true},
  {name: 'cuarta', user: 'user2', completed: false},
  {name: 'quinta', user: 'user1', completed: true},
  {name: 'sexta', user: 'user1', completed: false}
];

let completed = R.filter(R.whereEq({completed: true}));
let groupedByUser = R.groupBy(R.prop('user'));
let completedByUser = R.compose(groupedByUser, completed);
console.log(completedByUser(tasks)); // {
                                     //   user1: [
                                     //     {name:'primera',user:'user1',completed:true},
                                     //     {name:'quinta',user:'user1',completed:true}
                                     //   ],
                                     //   user2: [
                                     //     {name:'tercera',user:'user2',completed:true}
                                     //   ]
                                     // }

let completedByUserNames = R.compose(R.map(R.map(R.prop('name'))), completedByUser);
console.log(completedByUserNames(tasks)); // {user1:['primera','quinta'],user2:['tercera']}
