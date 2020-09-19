const path = require('path');


// Base File name
console.log(path.basename(__filename));

// complete file address
console.log(__filename);

// directory name
console.log(path.dirname(__filename));

// File extension
console.log(path.extname(__filename));

// Create Path object
console.log(path.parse(__filename)); 
console.log(path.parse(__filename).base);

// Concatenate paths
console.log(path.join(__dirname,'test','hello.html'));
