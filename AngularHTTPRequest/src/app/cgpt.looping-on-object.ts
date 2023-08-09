/* Here's an example of how you can loop over an object that contains properties which themselves are objects:*/
const person = {
    name: 'John',
    age: 30,
    address: {
      street: '123 Main St',
      city: 'Example City',
      country: 'Example Country'
    },
    hobbies: ['reading', 'coding', 'gaming']
  };
  
  // Loop over the properties of the person object
  for (const key in person) {
    if (person.hasOwnProperty(key)) {
      console.log(`${key}: ${person[key]}`);
      
      // Check if the property is an object
      if (typeof person[key] === 'object' && person[key] !== null) {
        // Loop over the properties of the nested object
        for (const nestedKey in person[key]) {
          if (person[key].hasOwnProperty(nestedKey)) {
            console.log(`\t${nestedKey}: ${person[key][nestedKey]}`);
          }
        }
      }
    }
  }
  
/*The output of the above code will be:*/
 name: John
age: 30
address: [object Object]
	street: 123 Main St
	city: Example City
	country: Example Country
hobbies: reading,coding,gaming
/*The code first loops over the top-level properties of the person object using a `for...in` loop. 
    It checks if each property is directly owned by the object using the `hasOwnProperty()` method. 
    For each property, it logs the key-value pair to the console.

If the property value is an object (as determined by typeof person[key] === 'object' && person[key] !== null),
     it enters a nested loop to loop over the properties of the nested object. 
     It logs the nested key-value pairs with an indentation to differentiate them.*/