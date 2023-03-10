// import { readFile, write} from "../utils";


import chalk from "chalk";
import readLineSync from "readline-sync";

import { writeFile ,readFile} from "../utils/index.js";


async function loginuser(){
    try{ 
        console.clear();
        console.log('===============================')
        console.log(chalk.yellowBright.bold('\t User Sign In '))
        console.log('===============================')


    var email = readLineSync.question("Enter the Email :  ")
    while(!email) {
        email = readLineSync.question("Enter The Email : ")
    }

    
    let password = readLineSync.question('Enter Your Password : ',{
        hideEchoBack : true,
    }); 
    while(!password) {
    password = readLineSync.question('Enter Your Password : ',{
        hideEchoBack : true,
    })
}
var fileData = await readFile("../data.json");
fileData = JSON.parse(fileData)
//console.log(fileData)

let emailFound = fileData.find((ele) => ele.email == email)
    if(!emailFound){
        throw("Unauthorised Access")
    }
    console.log(chalk.magentaBright.underline('User Signed In Successfully'));
  

    
}
catch(err){
    console.error(err)
}

}

loginuser()
// export default loginuser;