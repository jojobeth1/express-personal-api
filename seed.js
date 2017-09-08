// This file allows us to seed our application with data
// simply run: `node seed.js` from the root of this project folder.

// var db = require('./models');

// var new_campsite = {description: "Sharp rocks. Middle of nowhere."}

// db.Campsite.create(new_campsite, function(err, campsite){
//   if (err){
//     return console.log("Error:", err);
//   }

//   console.log("Created new campsite", campsite._id)
//   process.exit(); // we're all done! Exit the program.
// })



var db = require('./models');

var new_project = [
{
 name: 'Race the cars',
 githubRepoUrl: 'https://github.com/jojobeth1/Game_Project0',
 deployedUrl: 'https://jojobeth1.github.io/Game_Project0/',
 screenshot: ''
},
{
 name: 'Start Portfolio',
 githubRepoUrl: 'https://github.com/jojobeth1/jojobeth1.github.io',
 deployedUrl: 'https://jojobeth1.github.io/',
 screenshot: ''
}
];


<<<<<<< HEAD
db.Project.create(new_project, function(err, project){
=======
db.Projects.create(new_project, function(err, project){
>>>>>>> 6232b3f96279d54db11ae26ff4a0d931f8af9388
   if (err){
     return console.log("Error:", err);
   }
   console.log(project);
<<<<<<< HEAD

=======
   //console.log("Created new campsite", projects._id)
>>>>>>> 6232b3f96279d54db11ae26ff4a0d931f8af9388
   process.exit(); // we're all done! Exit the program.
 })
