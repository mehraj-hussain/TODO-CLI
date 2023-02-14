import express from "express";
import fs from "fs/promises"
import chalk from 'chalk';
import readlineSync from 'readline-sync'
import { randomStringGenerator, readFile,writeFile} from "../utils/index.js";

async function createToDo() {
    try {
        console.clear();
        console.log("==============================");
        console.log("\tCreate a ToDo");
        console.log("==============================");

        let email = readlineSync.questionEMail('Enter Your Mail : ');
        while(!email){
            let email = readlineSync.questionEMail('Enter Your Mail : ');
        }

        let password = readlineSync.question('Enter Your Password : ');
        // while(!password){
        //     let password = readlineSync.questionInt('Enter Your Password : ');
        // }

     
        let fileData = await fs.readFile('../data.json');
        fileData = JSON.parse(fileData);

        let passwordFound = fileData.find((ele) => ele.password == password);
        let emailFound = fileData.find((ele) => ele.email == email);
        if (!(emailFound || passwordFound)){
            throw ('User Doesn\'t Exist');
        }


        let toDoName = readlineSync.question("Enter The Task : ")
        while(!toDoName) {
            let toDoName = readlineSync.question("Enter The Task : ")
        }
        let todoData = {
            toDoName,
            isComplete : false,
            todo_id :  randomStringGenerator(12)
        }

        // emailFound.todos.push(todoData);
        // await fs.writeFile("../data.json", JSON.stringify(fileData));
        // console.log(chalk.green("Task Added Successfully"))

emailFound.todos.push(todoData);
await fs.writeFile('../data.json',JSON.stringify(fileData));
console.log(chalk.green('Task Added Successfully'))


    }
    catch(error){
        console.log(error)
    }
}

createToDo();