// js/core.js

// inject the controller, service and filter into our app's main module
var myTodo = angular.module('myTodo', ['todoController', 'todoService', 'extFilters']);