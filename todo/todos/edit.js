import chalk from "chalk";
import readlineSync from "readline-sync"
import fs from "fs/promises"
import { readFile, writeFile } from "fs";


async function editToDo(){

    try {
        console.clear();
        console.log('===============================')
        console.log(chalk.green.bold('\t Update A Todo '))
        console.log('===============================')

        let email = readlineSync.question('Enter Your Email : ');
        while(!email){
            let email = readlineSync.question('Enter Your Email : ');
        }
        
    let fileData = await fs.readFile('../data.json')
    fileData = JSON.parse(fileData);
    
    let emailFound = fileData.find((ele) => ele.email == email);    
    if (!(email)) {
        throw ('User Doesn\'t Exist')
    }

    console.table(emailFound.todos);

    let todoIndex = readlineSync.question("Enter The Serial No. Of The Task You Want To Update");
    while(!todoIndex){
        todoIndex = readlineSync.question("Enter The Serial No. Of The Task You Want To Update");

    }
   
    let toDoName = readlineSync.question("Enter The Task Name : ");
    while(!toDoName){
        toDoName = readlineSync.question("Enter The Task Name : ");
   
    }

    let isComplete = readlineSync.question("Is It Completed? (Y/N) : ")
    while(!isComplete){
        isComplete = readlineSync.question("Is It Completed? (Y/N) : ")
    }
    if (isComplete == y || isComplete == Yes || isComplete == yes || isComplete == YES){
        isComplete = true;
    }else{
        isComplete = false;
    }

    let UpdateTodo = [
        toDoName,isComplete
    ]

    
    
    } catch (error) {
        
    }

}

editToDo();