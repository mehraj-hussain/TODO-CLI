import fs from "fs"


function timer(time){
    return new Promise((resolve,reject) => {
        if (time < 0 || !time){
            reject("Require Milliseconds");
        }

            setTimeout(()=>{
                resolve('good to go')
            },time);
        
    })
}

// timer(5000);


function randomStringGenerator(n){

    let string = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let Length = string.length
    let string1 ="";

    for(let i = 0; i <=n ; i++){

        string1 += string.charAt(Math.floor(Math.random()*Length))
    }
    return string1;
}

// randomStringGenerator(8);

 function readFile(fileName){
    return new Promise((resolve, reject) => {
       fs.readFile(fileName,(error, data) => {
            if(error) reject (error);

            resolve(data)

        })

    }) 

}


function writeFile(fileName,data){
    return new Promise ((resolve,reject) =>{
        fs.writeFile(fileName, data, (error,data) => {
            if(error) reject(error);
            else resolve(data);


        })
    })
}


export {timer,readFile, writeFile,randomStringGenerator}


// let a = await readFile("hello.txt")
// console.log(a.toString())




