
/*let X = [10,20,30,40,50];
console.log(X);

console.log(X[0]);
console.log(X[1]);  
console.log(X[2]);
console.log(X[3]);
console.log(X[4]);
console.log(X[5]);  //error
*/

let fruits = ["Apple",100,"Grapes","Orange"];
console.log(fruits);

// i want to count the number of elements in the array
//console.log(fruits.length);

fruits[1] = "Mango"; // apple, mango, grapes, orange
console.log(fruits);

fruits[4] = "Banana";  // apple, mango, grapes, orange, banana
console.log(fruits);

fruits.push("Pineapple"); //By default it will add the element at the end of the array
console.log(fruits); // apple, mango, grapes, orange, banana, pineapple

fruits[0] = "Kiwi"; // kiwi, mango, grapes, orange, banana, pineapple

fruits.unshift("Strawberry"); // strawberry, kiwi, mango, grapes, orange, banana, pineapple
console.log(fruits);

fruits.pop(); // removes the last element from the array
console.log(fruits); // strawberry, kiwi, mango, grapes, orange, banana

fruits.shift(); // removes the first element from the array
console.log(fruits); // kiwi, mango, grapes, orange, banana

fruits.slice(1,3); // it will remove the elements from index 1 to index 3-1
console.log(fruits); // kiwi, mango, grapes, orange, banana 


