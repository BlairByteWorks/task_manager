# task_manager

Project Overview
A modular task management application built using JavaScript ES6 modules, classes, and object-oriented programming principles. The application extends a base Task class with a TimedTask subclass that adds due date functionality and automatic overdue detection.
Features
1.	Create, fill and cancel tasks.
2.	Add tasks with optional due dates.  
3.	Built-in over due handling of overdue tasks.  
4.	Indicators of the overdue tasks (red border, warning badge)  
5.	Status: This option allows one to filter tasks by status (All, Active, Completed).  
6.	Instantaneous task statistics such as the number of overdue tasks.  
7.	LocalStorage persistence of data between sessions.   
8.	Responsive design for all devices
Technologies Used
•	HTML5 - Semantic markup structure
•	CSS3 - Modern styling with gradients, transitions, and animations
•	JavaScript ES6+ - Classes, inheritance, modules, and modern syntax
•	LocalStorage API - Client-side data persistence
•	Docker - Containerization for easy deployment
•	Nginx - Web server for production hosting
Technical Implementation
Object-Oriented Design
Task Class 
•	Properties: `id`, `title`,`done`
•	Methods: `toggle()`, `toJSON()`, `from()`
•	Input validation and type coercion
TimedTask Class
•	Inherits from Task using `extends` keyword
•	Additional property: `dueDate`
•	Computed property: `isOverdue` getter
•	Overridden methods: `toJSON()`, `from()`
•	Automatic overdue detection
Module Structure
Separation of concerns with dedicated modules:
•	Task.js - Base Task class definition
•	TimedTask.js - Extended TimedTask class with due dates
•	store.js - Data persistence layer with localStorage
•	view.js - DOM rendering and UI updates
•	utils.js - Helper functions (uid generation, HTML escaping)
•	app.js - Main application logic and event handlers
Key Concepts Demonstrated
•	ES6 Classes - Constructor functions and methods
•	Inheritance - Extending classes with `extends` and `super`
•	Polymorphism - Handling both Task and TimedTask instances
•	Computed Properties - Getters for derived values
•	Module imports/exports - Code organization
•	Event delegation - Efficient DOM event handling
•	State management - Centralized application state
•	DOM manipulation - Dynamic UI updates
•	Data persistence - localStorage serialization
•	Type checking – `instanceof` operator
Links

GitHub Repository: https://github.com/BlairByteWorks/task_manager

Live GitHub Pages URL: https://blairbyteworks.github.io/task_manager/

Published Docker Image: https://hub.docker.com/r/blairbytesworks/week6_task_manager
