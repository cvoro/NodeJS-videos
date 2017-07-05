(function() {

    angular
        .module('myApp')
        .factory('videoService', videoService);

    videoService.$inject = ['$http', '$q'];

    function videoService($http, $q) {
        return {
            getVideoByDate: getVideoByDate
        };

        function getVideoByDate(date) {
            return $http.post('http://localhost:3000/api/videoDate', { date }).then(Videos).catch(noVideos);

            function Videos(response) {
                return response;
            }

            function noVideos(response) {
                return $q.reject(response);
            }
        };

    }
})();