// import { readFile, write} from "../utils";


import readLineSync from "readline-sync";

import { writeFile ,readFile} from "../utils/index.js";


async function deleteUser(){
    
    try{ console.clear();
         console.log("==========================");
    console.log('\tDelete User');
    console.log("==========================");

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

// let emailFound = fileData.find((ele) => ele.email == email)
    
// if(!emailFound){
//         throw("No Such User Exist")
//     }
//     fileData.splice(find,1)
//     console.log("Successfully User Deleted")
  


    // let index = fileData.findIndex((ele) => ele.email == email)
    // if(index === -1){
    //     throw("No Such User Exist")
    // }
    // //there can't be multiple users with same name in the data.json    fileData.splice(index, 1) // remove 1 element from index
    // console.log("Successfully User Deleted")
    

    let index = fileData.findIndex((ele) => ele.email == email)
if(index === -1){
    throw("No Such User Exist")
}
fileData.splice(index, 1) // remove 1 element from index

console.log("Successfully User Deleted")

//writing the updated data to data.json file
await writeFile("../data.json", JSON.stringify(fileData))

    



}
catch(err){
    console.error(err)
}

}

// deleteUser()
export default deleteUser;