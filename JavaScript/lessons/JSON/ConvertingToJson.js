

//Reading a JSON String

const jsonData = '{ "book": { "name": "JSON Primer", "price": 29.99, "inStock": true, "rating": null } }';
 
const jsObject = JSON.parse(jsonData);
 
console.log(jsObject);

/* output:
{
  book: { name: 'JSON Primer', price: 29.99, inStock: true, rating: null }
}
*/

//Accessing JavaScript Objects after converting from JSON

// Using the dot notation
const book = jsObject.book;    
console.log(book);
console.log(book.name, book.price, book.inStock);
 
// Using the bracket notation
const book2 = jsObject['book'];
console.log(book2);
console.log(book2["name"], book2["price"], book2["inStock"]);

/* output:
{ name: 'JSON Primer', price: 29.99, inStock: true, rating: null }
JSON Primer 29.99 true
*/

//writing JSON String

const jsObject = { book: 'JSON Primer', price: 29.99, inStock: true, rating: null };
const jsonData = JSON.stringify(jsObject);
console.log(jsonData);

/* output:
{ "book": "JSON Primer", "price": 29.99, "inStock": true, "rating": null }
*/


//Converting between JSON and JScript - accessing Values 
const jsonData = '{"parent":{"name":"Sally","age":45,"children":[{"name":"Kim","age":3},{"name":"Lee","age":1}]}}';

// convert JSON string to JavaScript object
const jsObject = JSON.parse(jsonData);

// update JavaScript object
jsObject.parent.age = 35;

// convert JavaScript object to JSON string
const jsObjectToJson = JSON.stringify(jsObject);

// display JSON string
console.log(jsObjectToJson);