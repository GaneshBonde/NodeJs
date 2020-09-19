const http = require('http')

// Create Server Object 
http.createServer((req,res) => {
    // Write Resonpse
    res.write('Hello World !!!')
    res.end()
}).listen(5000, () => {
    console.log('Server is Running ......');
})