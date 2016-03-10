// js/services/todos.js
angular.module('todoService', [])

    // super simple service
    // each function returns a promise object 
    .factory('Todos', function($http) {
        return {
            get : function() {
                return $http.get('/api/todos');
            },
            create : function(todoData) {
                return $http.post('/api/todos', todoData);
            },
            toggle : function(id) {
                return $http.put('api/todos/' + id);  
            },
            delete : function(id) {
                return $http.delete('/api/todos/' + id);
            }
        }
    });