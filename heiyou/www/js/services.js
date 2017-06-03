angular.module('gooeyApp.services', [])

.factory('gudang', function($http) {
    var baseUrl = 'http://localhost/webservice/';
    return {
        getAll: function() {
            return $http.get(baseUrl+'select.php');
        },
        getId: function (Id){
            return $http.get(baseUrl+'call_id.php?id='+Id); 
        },
        create: function (tambah_lagu){
            return $http.post(baseUrl+'insert.php',tambah_lagu,{
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8;'
                }
            });
        },
        update: function (tambah_lagu){
            return $http.post(baseUrl+'update.php',tambah_lagu,{
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8;'
                }
            });
        },
        delete: function  (id){
            return $http.get(baseUrl+'delete.php?id='+id);
        }
    };
    
});

