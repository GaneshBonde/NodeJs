const url = require('url');


const myUrl = new URL("https://wwww.mywebsite.com:8000/hello.html?id=101&status=active");

// Serialized Url
console.log(myUrl.href);
console.log(myUrl.toString());

// Host {root dommain}
console.log(myUrl.host);

// HostName
console.log(myUrl.hostname);

// PathName
console.log(myUrl.pathname);

// Serialized query
console.log(myUrl.search);

// Params Object
console.log(myUrl.searchParams);

// Add Params
myUrl.searchParams.append('abc','123');
console.log(myUrl.searchParams);

// Loop through
myUrl.searchParams.forEach((value,name) => console.log(`${name} : ${value}`))

