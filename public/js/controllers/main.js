// js/controllers/main.js
    
angular.module('todoController', [])

    // inject the Todo service factory and isEmptyObjectFilter into our controller
    .controller('mainController', function($scope, $http, Todos, isEmptyObjectFilter) {
        $scope.formData = {};
    
        // GET =====================================================================
        // when landing on the page, get all todos and show them
        Todos.get()
            .success(function(data) {
                $scope.todos = data;
                console.log(data);
            })
            .error(function(data) {
                console.log('Error: ' + data);
            });

        // CREATE ==================================================================
        // when submitting the add form, send the text to the node API
        $scope.createTodo = function() {
            
            // Validate the input: Check if there is something entered
            if(!isEmptyObjectFilter($scope.formData)) {
             
                Todos.create($scope.formData)
                    .success(function(data) {
                    $scope.formData = {}; // clear the form so our user is ready to enter another
                    $scope.todos = data; // assign our new list of todos
                    console.log(data);
                    })
                    .error(function(data) {
                        console.log('Error: ' + data);
                    });
                
            }
        };

        // UPDATE ==================================================================
        // toggle the active status of a todo after checking it
        $scope.toggleTodo = function(id) {
            Todos.toggle(id)
                .success(function(data) {
                    $scope.todos = data;
                    console.log(data);
                })
                .error(function(data) {
                    console.log('Error: ' + data);
                });
        };

        // DELETE ==================================================================
        // delete a todo after checking it
        $scope.deleteTodo = function(id) {
            Todos.delete(id)
                .success(function(data) {
                    $scope.todos = data;
                    console.log(data);
                })
                .error(function(data) {
                    console.log('Error: ' + data);
                });
        };
    });