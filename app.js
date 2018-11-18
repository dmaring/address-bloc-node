// console.log(process.argv);
// for (let arg of process.argv) {
//   if (arg[0] !== '/') {
//     console.log(arg);
//   }
// }

const inquirer = require('inquirer');
const MenuController = require('./controllers/MenuControllers');
const menu = new MenuController();

menu.clear();
menu.main();
