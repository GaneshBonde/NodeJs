const fs = require('fs')
const path = require('path')
var bln = true;

// Create Folder
fs.mkdir(path.join(path.join(__dirname), '/test'), {}, err => {
    if(err) throw err;
    console.log('Folder Created');
})


// Create and write to file
fs.writeFile(path.join(__dirname,'/test', 'hello.txt'),"Hello World !!!!!", err => {
    if(err) throw err;

    console.log('File is written !!!!');
})

// Create and write to file

fs.writeFile(path.join(__dirname,'/test', 'hello.txt'),"I love Node.JS ", err => {
    if(err) throw err;

    console.log('File is written !!!!');
    fs.appendFile(path.join(__dirname,'/test', 'hello.txt'),"Append to file ", err => {
        if(err) throw err;
    
        console.log('File has been appended !!!!');
        bln=false;
        
    })
    fs.readFile(path.join(__dirname,'/test','hello.txt'), 'utf8', (err,data) => {
        if(err) throw err;
        console.log(data);
    });

    fs.rename(path.join(__dirname,'/test', 'hello.txt'), path.join(__dirname,'/test','helloworld.txt'),(err,data)=>{
        if(err) throw err;
        console.log('File Renamed');
    })

});



