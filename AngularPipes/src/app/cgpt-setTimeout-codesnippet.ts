/*The `setTimeout()` method is a built-in JavaScript function 
            that allows you to schedule the execution of a function or the evaluation of an expression
                                                 after a specified delay in milliseconds.*/
//The syntax for setTimeout() is as follows:
setTimeout(function, delay, param1, param2, ...);

/*`function`: The function or expression to be executed after the specified delay.
`delay`: The delay in milliseconds before the function or expression is executed.
`param1, param2, ...` : Optional parameters that can be passed to the function when it is executed*/

function greet(name) {
    console.log('Hello, ' + name + '!');
  }
 
/*It's important to note that setTimeout() returns a unique identifier (a number) 
    that can be used to clearTimeout() to cancel the execution of the scheduled function before it runs:*/
  setTimeout(greet, 2000, 'John');
  
  var timeoutId = setTimeout(function() {
    console.log('This will not be executed.');
  }, 5000);
  
  // Cancel the execution before it happens
  clearTimeout(timeoutId);
  
/*In this example, the `setTimeout()` call schedules a function to execute after 5000 milliseconds (5 seconds).
     However, immediately after that, we use `clearTimeout()` with the identifier returned by `setTimeout()` to cancel the execution.
As a result, the function will not be executed at all.*/