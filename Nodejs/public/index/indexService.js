(function() {

    angular
        .module('myApp')
        .factory('service', service);

    service.$inject = ['$http', '$q'];

    function service($http, $q) {
        return {
            getDates: getDates
        };

        function getDates() {
            return $http.get('http://localhost:3000/api/dates').then(Dates).catch(noDates);

            function Dates(response) {
                return response;
            }

            function noDates(response) {
                return $q.reject(response);
            }
        };

    }
})();