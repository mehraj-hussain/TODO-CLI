import chalk from "chalk";
import readlineSync from "readline-sync";
import loading from "loading-cli";
import {timer }from "./utils/index.js";

//User Login
//User Registration
//Delete User

//Insert Todo
//Edit Todo
//Delete Todo
//View Todos
async function displayMenu() {
  try {
    console.clear();
    console.log("==============================");
    console.log("\t  TODO CLI");
    console.log("==============================");
    console.log(
      "Press 0 to Exit \nPress 1 to Sign Up \npress 2 to Sign In \npress 3 to Delete Account \npress 4 to Create Task \npress 5 to Update Task \npress 6 to Read All Tasks \npress 7 to Delete Task"
    );

    let mehraj = readlineSync.questionInt("Please Enter Your Choice :  ");
    switch (mehraj) {
      case 0:
        return console.log("Exit");
        break;

      case 1:

      await SignUp(); //User Regitration
        break;

        case 2:
            await SignIn(); //User Login
            break;

      case 3:
        console.log("User Deletion")

        break;

      case 4:
        console.log("Create Todo")

        break;

      case 5:
        console.log("Read all Todos")

        break;

      case 6:
        console.log("Update Todo")

        break;

      case 7:
        console.log("Delete  Todo")

        break;

    
      default:
       
            console.log("Invalid Option")
        break;
    }
    let Continue = readlineSync.question("Do you want to continue? (Y/N): ");
    if (Continue === "y" || Continue === "Y" || Continue === "yes" || Continue === "Yes" || Continue === "YES") {
      const load = loading({
        "text": "Redirecting You To Menu",
        "color": "blue",
        "interval": 250,
        "stream": process.stdout,
        "frames": ["🧡", "💛", "💚", "💙", "💜", "🖤", "🤍"]
    }).start();
   await timer (2000);
   load.stop();
   displayMenu();
  }
  else{
    console.log("Thanks for Using My CLI.")
  }
  
  } catch (error) {
    console.error(error)
  }
}
displayMenu()