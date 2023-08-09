import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ConditionalCSSClass-UsingCustomAttributeDirective';
  videos = [
    {title:'My video 1', share: 415, likes: 257, dislikes: 12, thumbnail: 'assets/images/RRR.jpg'},
    {title:'My video 2', share: 215, likes: 325, dislikes: 12, thumbnail: 'assets/images/fifaworldcup.jpg'},
    {title:'My video 3', share: 513, likes: 105, dislikes: 12, thumbnail: 'assets/images/bitcoin.jpg'}
  ]
 /* Creating a copy of Array `videos` using `...` spread operator 
       to sort this array in desending-order in order to get hightest `likes` value
     Hence by this Original `videos` Array will not get updated with sorted array */
  getMostLikedVideo(){
   /* `...` spread operator on a `videos` array, 
         essentially spreads the elements of this array into individual elements.*/
    let videoCopy = [...this.videos];
   /* We gonna pass `compare callback function` - which will sort this `videoCopy` array based on No.of `likes`.
       Hence the `sort()` will loop over `videoCopy` array and for each iteration it will assign this 
       - `currentElement` is the current element in `videoCopy` array i.e., with 1st object. 
       -  `nextElement` is the next element in `videoCopy` array i.e., with 2nd object.		*/
   /* 1.`nextElement.likes - currentElement.likes` this logic gonna sort `videoCopy` in Desending order
      2.BY THIS LOGIC, 
     - the first element(i.e., object) in sorted `videoCopy` array will had `likes` property with hightest value.  
     - the last element(i.e., object) in sorted `videoCopy` array will had `likes` property with lowest value.
       Hence we return its [0] i.e., the first element(i.e., object) in sorted `videoCopy` array inorder 
       to apply `apphighlight` custom Attribute Directive to <element> which has hightest value `likes` property  */
    return videoCopy.sort((currentElement, nextElement) =>	nextElement.likes - currentElement.likes)[0];
  }
 
  mostLikedVideo = this.getMostLikedVideo();	 

}
 
 /* LOGIC APPLIED TO `sort()` call-back function :
   - We made `call-back function` should return a `+ve` number, Inorder to sort the `videoCopy` array in Desending order,
   - But if We made `call-back function` return a `-ve` number,it gonna sort the `videoCopy` array in Assending order 
 /*
 1.The `...` spread operator, also known as the spread syntax, is a feature in JavaScript
    that allows an iterable (such as an array or a string) to be expanded into individual elements.
 2.It provides an easy and concise way to manipulate arrays and function arguments.
 3The spread operator is a powerful tool that helps simplify array and object manipulation in JavaScript
              by providing a concise and flexible syntax.
            # Array Manipulation: When used with an array,
                    the spread operator can be used to create a new array by combining existing arrays or,
                              adding elements to an existing array.
            EXAMPLE-1:                                                   
            const array1 = [1, 2, 3];
            const array2 = [4, 5, 6];
            const combinedArray = [...array1, ...array2];
            console.log(combinedArray); // [1, 2, 3, 4, 5, 6]

            EXAMPLE-2:
            const numbers = [1, 2, 3];
            console.log(...numbers); // 1 2 3
            
            const newArray = [...numbers];
            console.log(newArray); // [1, 2, 3]
            ------
            # Function Arguments: 
              - The spread operator can be used to pass elements of an array as individual arguments to a function.
              - It simplifies the process of calling functions with arrays as arguments. 
            EXAMPLE: 
            function sum(a, b, c) {
              return a + b + c;
            }
            
            const numbers = [1, 2, 3];
            const result = sum(...numbers);
            console.log(result); // 6
            -----
            # Object Manipulation: With objects, the spread operator can be used to create a new object 
                    by copying the properties from an existing object or adding new properties.
                However, it only creates a shallow copy of the object, meaning that nested objects are still referenced. 
            EXAMPLE-1: 
            const obj1 = { x: 1, y: 2 };
            const obj2 = { z: 3, ...obj1 };
            console.log(obj2); // { z: 3, x: 1, y: 2 }
            EXAMPLE-2:
            const person = { name: 'John', age: 30 };
            const copiedPerson = { ...person };
            
            console.log(copiedPerson); // { name: 'John', age: 30 }
*/            
/*The sort() method is a built-in JavaScript array method that allows you to sort the elements of an array in place.
      1.If we want to sort an array of numbers, we can pass a compare function `(a, b) => a - b` as an argument to the sort() method. 
      2.The compare function defines the sorting order based on a specific criterion.

  When the sort() method is called on an array, it starts by comparing the elements in pairs. 
  It compares adjacent elements and swaps them if they are in the wrong order, based on the sorting criterion.

sorting an array of numbers in ascending order:
          const numbers = [3, 1, 8, 2, 5];
          numbers.sort((a, b) => a - b);    // If the result is -ve, `a` is considered smaller, hence no swap is needed  
                                            // If the result is +ve, `b` is considered smaller, hence swap is needed
          console.log(numbers);  // Output: [1, 2, 3, 5, 8]
sorting an array of numbers in descending  order:
          const numbers = [3, 1, 8, 2, 5];
          numbers.sort((a, b) => b - a);
          console.log(numbers);  // Output: [8, 5, 3, 2, 1]
*/
       