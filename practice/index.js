//Create an array that contains six types of unique meats.
//Create a second array that contains four types of unique vegetables.
//Create a third array that contains five types of unique desserts.

let meats = ["grilled beef","chicken","steak","pork","marinated beef","lamb"]
let vegetables = ["broccoli","lettuce","potato","carrot","corn","tomato"]
let desserts = ["yogurt","tres leches","flan","pudding","fruits"]
meats.pop()             //Remove the last element from the meats array created in Step 1. 
console.log(meats)
vegetables.pop() //Remove the last element from the vegetables array created in Step 2.
console.log(vegetables)
let mondayDessert = desserts[2]//Create a string variable that contains one item from the dessert array.
//Combine the meat&vegetable array plus the new dessert value into a new array named "mondayMenu"
let mondayMenu = meats.concat(vegetables).concat(mondayDessert) 
console.log("Mondays Menu: "+ mondayMenu) //Output the contents of the mondayMenu array


//click fn and f5 then click node.js to open the debug concole for js
