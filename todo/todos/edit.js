import chalk from "chalk";
import readlineSync from "readline-sync"
import fs from "fs/promises"
import { readFile, writeFile } from "fs";


async function editToDo(){
console.clear();
    console.log('==========================');
    console.log('\tEDIT TODO');
    console.log('==========================');


    let email = readlineSync.question('Enter Your Email : ');
    while(!email){
        let email = readlineSync.question('Enter Your Email : ');
    }

    let password = readlineSync.question('Enter Your Email : ');
    while(!password){
        let password = readlineSync.question('Enter Your Email : ');
    }

let fileData = await fs.readFile('data.json')
fileData = JSON.parse(fileData);

let emailFound = fileData.find((ele) => ele.email == email);
let passwordFound = fileData.find((ele) => ele.password == password);

if (!(email && password)) {
    throw ('User Doesn\'t Exist')
}



}

editToDo();