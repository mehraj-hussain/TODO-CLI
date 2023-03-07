import chalk from "chalk";
import readLineSync from "readline-sync";
// import fs from "fs/promises";
import { writeFile ,readFile} from "../utils/index.js";

async function registerUser() {
    try {
        console.clear();
        console.log('===============================')
        console.log(chalk.yellowBright.bold('\t User Sign Up '))
        console.log('===============================')

        let userName = readLineSync.question('Enter Your Name : ');
        while (!userName) {
            userName = readLineSync.question('Enter Your Name : ');        
        }

        let email = readLineSync.questionEMail('Enter Your Email : ');
        
        let phone = readLineSync.question('Enter Your Phone Number : ');
        while(!phone){
            phone = readLineSync.question('Enter Your Phone Number : ');
        };

        let location = readLineSync.question('Enter Your Location : ');
        while(!location){
            location = readLineSync.question('Enter Your Location : ');
        };

        let password = readLineSync.question('Enter Your Password : ',{
            hideEchoBack : true,
        }); 
        
        let confirmPassword = readLineSync.question('Enter Your Password to confirm : ',{
            hideEchoBack : false ,
        });

        while(password != confirmPassword){
            console.log(chalk.red('Your Passwords Don\'t Match'))
            readLineSync.question('Enter Your Password : ',{
            hideEchoBack : true,
        });
        confirmPassword = readLineSync.question('Enter Your Password to confirm : ',{
            hideEchoBack : true,
        });
        };


        let fileData = await readFile('../data.json');
        fileData = JSON.parse(fileData);

        let emailFound = fileData.find((ele) => {
            ele.email == email
        }) 
        if(emailFound) {
            throw ('User Already Exists');
        }

       
        
        let userData = {userName, email, phone, location, password, confirmPassword,todos : [] }
       // console.log(userData);

        fileData.push(userData);
        fileData = JSON.stringify(fileData)
        // console.log(fileData)
       
        await writeFile('../data.json',fileData);
        console.log(chalk.magentaBright.underline('User Signed Up Successfully'));

    }
    
    catch(error){
        console.error(error)
        
    }

}

registerUser()
// export default registerUser;