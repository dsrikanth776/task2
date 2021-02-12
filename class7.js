var myMap=new Map();
myMap.set(1,"uno");
myMap.set(2,"dos");
myMap.set(3,"tres");
myMap.set(4,"cuatro");

console.log(myMap);



for(let key of myMap.keys()){

console.log(key);
}

for(let value of myMap.values()){

    console.log('value is {value}');
    }
 
for(let[key,value] of myMap){
    console.log('key is:${key} and value is${value}');

}

const array1 = [1, 4, 9, 16];

// pass a function to map
const map1 = array1.map(x => x * 3);

console.log(map1);
// expected output: Array [3, 12, 27, 48]


let map = new Map();

map.set('1', 'str1');   // a string key
map.set(1, 'num1');     // a numeric key
map.set(true, 'bool1'); // a boolean key

// remember the regular Object  it would convert keys to string
// Map keeps the type, so these two are different:
console.log( map.get(1)   ); // 'num1'
console.log( map.get('1') ); // 'str1'

console.log( map.size ); // 3


let john = { name: "John" };

// for every user, let's store their visits count
let visitsCountMap = new Map();

// john is the key for the map
visitsCountMap.set(john, 123);

console.log( visitsCountMap.get(john) ); // 123

let John = { name: "John" };
let ben = { name: "Ben" };

let visitsCountObj = {}; // try to use an object

visitsCountObj[ben] = 234; // try to use ben object as the key
visitsCountObj[John] = 343; // try to use john object as the key, ben object will get replaced

// That's what got written!
console.log( visitsCountObj["[object Object]"] ); // 343


let recipeMap = new Map([
    ['cucumber', 500],
    ['tomatoes', 350],
    ['onion',    50]
  ]);
  
  // iterate over keys (vegetables)
  for (let vegetable of recipeMap.keys()) {
    console.log(vegetable); // cucumber, tomatoes, onion
  }
  
  // iterate over values (amounts)
  for (let amount of recipeMap.values()) {
    console.log(amount); // 500, 350, 50
  }
  
  // iterate over [key, value] entries
  for (let entry of recipeMap) { // the same as of recipeMap.entries()
    console.log(entry); // cucumber,500 (and so on)
  }



  var persons=[
      {firstname:"sreekanth",lastname:"dabbara"},
      {firstname:"bharath",lastname:"dabbara"},
      {firstname:"kishore",lastname:"nallani"}
  ];
  function getFullName(item){
      var fullname=[item.firstname,item.lastname].join("")
      return fullname;
      
  }
  function MyFunction(){
      console.log(persons.map(getFullName));


  }
  MyFunction()

// varable name is cars
  var cars=["BMW","volva","saab","ford"];
  var i;
  var text="";
  
  for(i=0;i<cars.length;i++)
  {
      text +=cars[i]+"<br>";
  }
  console.log(text);

  let myMap = new Map()

let keyString = 'a string'
let keyObj    = {}
let keyFunc   = function() {}

// setting the values
myMap.set(keyString, "value associated with 'a string'")
myMap.set(keyObj, 'value associated with keyObj')
myMap.set(keyFunc, 'value associated with keyFunc')

myMap.size              // 3

// getting the values
myMap.get(keyString)    // "value associated with 'a string'"
myMap.get(keyObj)       // "value associated with keyObj"
myMap.get(keyFunc)      // "value associated with keyFunc"

myMap.get('a string')    // "value associated with 'a string'"
                         // because keyString === 'a string'
myMap.get({})            // undefined, because keyObj !== {}
myMap.get(function() {}) // undefined, because keyFunc 