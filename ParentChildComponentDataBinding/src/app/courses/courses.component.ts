import { Component } from '@angular/core';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent {

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

  getTotalCourses(){
    return this.courses.length;
  }
  /*The filter() method is an array method in JS that takes a callback function as its argument. 
    The callback function is executed on each element of the array and
                    determines whether the element should be included in the new filtered array.
    Here we used filter() on the  `courses` array. 
    Hence The filter() method creates a new array by filtering out elements.*/
  getTotalFreeCourses(){
    return this.courses.filter(course => course.type === 'Free').length;
  }

  getTotalPremiumCourses(){
    return this.courses.filter(course => course.type === 'Premium').length;
  }

  /* Creating a property to store the `value` (of selected <input> radio-button at webpage),
   which is passed from child-component(i.e., filterComponent) to parent-component(i.e., CoursesComponent).
   Based on this `value` we gonna display associated courses at webpage. */
  /* So, this property will gonna keep track of
               the `value` of which <input> radio-button has been selected in webpage */ 
  courseCountRadioButton: string = 'All';

  /*Creating a property to store the UI <input> string `value` 
          emitted by child-component's(i.e.,SearchComponent) custom-event `(searchTextChanged)` */
  searchText: string = ' ';

  /*Creating a method which will be called when custom-event `(filterRadioButtonSelectionChanged)` 
                      of child-component(i.e., filterComponent) will be raised.
   The parameter `data` will store the data of custom-event `(filterRadioButtonSelectionChanged)`
                                 which emits the `value` of radio-button of type string. */   
  onFilterRadioButtonChanged(data: string){
  	this.courseCountRadioButton = data;
  	console.log(this.courseCountRadioButton);
  }

  /*Creating a method which will be called 
            when child-component's(i.e.,SearchComponent) custom-event `(searchTextChanged)` raised.
   We know that this custom-event `(searchTextChanged)` emits
                         `value` of <input> textbox that user has entered in webpage.
   Hence we store that `value` to the parameter `searchValue` of this method 
                                and then assign to property `searchText`  */
  onSearchTextEntered(searchValue: string){
	  this.searchText = searchValue;
	  console.log(this.searchText);
  }

}
/* (course => course.type === 'free') is callback function which is provided as an argument to the filter()

   A callback method is a function that is passed as an argument to another function.
   
   For each `course` object in the `courses` array, 
            the callback function evaluates whether the `type` property is 'free'. 
   If it is, the `course` object is included in the new filtered array. */