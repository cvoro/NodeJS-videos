(function() {

    angular
        .module('myApp')
        .factory('playVideoService', playVideoService);

    playVideoService.$inject = ['$http', '$q'];

    function playVideoService($http, $q) {
        return {
            getVideoById: getVideoById,
            SetVideoToBL: SetVideoToBL
        };

        function getVideoById(id) {
            return $http.post('http://localhost:3000/api/videoID', { id }).then(Videos).catch(noVideos);

            function Videos(response) {
                return response;
            }

            function noVideos(response) {
                return $q.reject(response);
            }
        };

        function SetVideoToBL(id) {
            return $http.put('http://localhost:3000/api/videoInBL', { id }).then(SetToBl).catch(noSetToBl);

            function SetToBl(response) {
                return response;
            }

            function noSetToBl(response) {
                return $q.reject(response);
            }
        };


    }
})();