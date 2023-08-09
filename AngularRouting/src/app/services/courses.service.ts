import { Injectable } from '@angular/core';

@Injectable()
export class CoursesService {

    courses = [
      { 
        id:101, name: "JavaScript for beginners", author: "John Heikela", duration: 48, type: "Free",
        price: 0.00, rating: 3.5, image: "assets/courses/javascript.jpeg",
        description: "In this course you will learn the fundamentals of JavaScript.This course purely designed for beginners"
      },
      { 
        id:102, name: "React for beginners", author: "Steve Smith", duration: 18.5, type: "Premium",
        price: 129.00, rating: 4.5, image: "assets/courses/react.jpeg",
        description: "In this course you will learn the fundamentals of React.This course purely designed for beginners."
      },
      { 
        id:103, name: "Angular for beginners", author: "Mark Vought", duration: 28, type: "Premium",
        price: 199.00, rating: 4.0, image: "assets/courses/angular.jpeg",
        description: "In this course you will learn all concepts of Angular.This course purely designed for beginners."
      },
      { 
        id:104, name: "Python for beginners", author: "Mark Lutz", duration: 32, type: "Free",
        price: 0.00, rating: 5.0, image: "assets/courses/python.jpeg",
        description: "In this course you will learn all concepts of Python.This course purely designed for beginners."
      },
      { 
        id:105, name: "Angular with .NET Core", author: "Mark Vought", duration: 56, type: "Premium",
        price: 249.00, rating: 3.5, image: "assets/courses/angular.jpeg",
        description: "In this course you will learn the fundamental of Angular Frameworkwith .NET Core.This course purely designed for beginners."
      },
      { 
        id:106, name: "Docker for beginners", author: "Adrian Mouat", duration: 68, type: "Free",
        price: 0.00, rating: 4.5, image: "assets/courses/docker.jpeg",
        description: "This course provides a comprehensive introduction to Docker, covering topics such as container basics, image creation, networking, orchestration, and security."
      },
      { 
        id:107, name: "Kubernetes for beginners", author: "Kelsey Hightower", duration: 45, type: "Premium",
        price: 125.00, rating: 4.0, image: "assets/courses/kubernetes.jpeg",
        description: "This course provides practical and comprehensive guide to understanding and working with Kubernetes. It covers essential concepts, deployment strategies, managing applications, scaling, and troubleshooting."
      },
      { 
        id:108, name: "MongoDB for beginners", author: "Kristina Chodorow", duration: 18, type: "Free",
        price: 0.00, rating: 3.8, image: "assets/courses/mongodb.jpeg",
        description: "This course provides in-depth explanations, practical examples, and best practices for using MongoDB effectively in various use cases."
      },
      { 
        id:109, name: "AWS for beginners", author: "Ryan Kroonenburg and Mark Richman", duration: 18, type: "Premium",
        price: 299.00, rating: 5.0, image: "assets/courses/aws.jpeg",
        description: "This course offer practical examples and in-depth explanations of AWS services and architectures, making them valuable resources for developers and architects."
      },
      { 
        id:110, name: "AI for beginners", author: "Stuart Russell and Peter Norvig", duration: 90, type: "Premium",
        price: 499.00, rating: 5.0, image: "assets/courses/ai.jpeg",
        description: "This course provides deep learning, covering topics such as neural networks, convolutional networks, recurrent networks, and generative models. It has become a go-to resource for understanding and applying deep learning techniques."
      }
     
    ];

    getAllCourses(): any{
      /*a new Promise named `courseList` is created using the Promise constructor. . 
      The Promise constructor takes a function as its argument, which is called the executor function.
       the executor function takes two parameters, `resolve` and `reject`, which are functions provided by the Promise constructor.*/
      const coursesList = new Promise((resolve, reject) =>{
        //Expects 2 Arguments - callback function & Timeinterval
        //The resolve function is called after 5sec to fulfill the Promise with the value `this.courses`.
          setTimeout(() => {resolve(this.courses)}, 5000) //After 5sec `setTimeout` callback functn will be executed
      });
      return coursesList;
    }
}
/* `Promises` are used in JavaScript to handle asynchronous operations, such as making HTTP requests or reading files*/