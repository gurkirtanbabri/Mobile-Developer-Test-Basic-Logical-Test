/* 
Question 4
Let’s see we an api url www.example.com/api/get/1 
Write a sample code to call this rest api and display the result.

note:-  "www.example.com/api/get/1" is not a real url you can check this code with working url its working ;


*/

const fetch = require("node-fetch");

fetch("https://www.example.com/api/get/1")
  .then((res) => res.text())
  .then((body) => console.log(body)
  );
