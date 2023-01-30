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
        let toDoName = readlineSync.question('Enter a ToDo Task : ');
        while(!toDoName) {
            let toDoName = readlineSync.question('Enter a ToDo Task : ');
        }




    }
    catch(error){
        console.log(error)
    }
}

createToDo();