import chalk from "chalk";
import readlineSync from "readline-sync";
import loading from "loading-cli";
import timer from "./utils/index.js"

console.clear()
console.log("==============================");
console.log('\t  TODO CLI')
console.log("==============================");
console.log('Press 0 to Exit \nPress 1 to Sign Up \npress 2 to Sign In \npress 3 to Delete Account \npress 4 to Add Task \npress 5 to Edit Task \npress 6 to View All Tasks \npress 7 to Delete Task');

//User Login 
//User Registration
//Delete User

//Insert Todo
//Edit Todo 
//Delete Todo
//View Todos

let option = readlineSync.questionInt('\nEnter Your Option : ');
switch(option){
    case 0 : 
    console.log('Exit')

    break;

    case 1:
        



    break;

    case 3 :
        
    break;

    case 4 :

    break;

    case 5 :

    break ;

    case 6 :

    break;

    case 7:

    break;

    default :

    break;



}