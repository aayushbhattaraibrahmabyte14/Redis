Why Node js is Single threaded?
Node js runs on single thread. This means that the Node js processes one operation at a time on the main thread(event loop).  

Helmet is a package used in Node.js applications to enchance security by automatically adding 12 HTTP security headers These headers help protect your application from various web vulnerabilities, such as clickjacking and HTTP Strict Transport security. You can easily set it up
by installing the packages with npm install helmet and using it in your application with app.use(helmet).


Node js the popular JavaScript runtime that helps developers build complex backend systems, With so manay capabilities, It can get quite challenging to work with and hence design patterns are used. Design patterns helps developers write high quality testable and maintainable code.


The design patterns are made by gang of four..
Anti patterns are the bad 
Top Node js design patterns are:
1. Immediately invoked function Expressions(IIFE):
IIFE are the functions that are invoked as soon as they declared. This common design patterns can be used in Node.js for Encapsulation and Privacy, Where in Encapsulation where code are encapsulated within the local scope. In privacy, Variables and functions cannot be used outside the scope..

Code example of IIFE design pattern:
(function (parameter) {
const a = parameter;
const b = 20
const answer = a * b;
console.log("answer is: ", answer)
})(4);

