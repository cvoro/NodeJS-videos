(function() {

    angular
        .module('myApp')
        .factory('blackListService', blackListService);

    blackListService.$inject = ['$http', '$q'];

    function blackListService($http, $q) {
        return {
            getAllBlackListVideos: getAllBlackListVideos,
            SetVideoOffBL: SetVideoOffBL,
            deleteBlVideo: deleteBlVideo
        };

        function getAllBlackListVideos() {
            return $http.get('http://localhost:3000/api/blackListVideo').then(Videos).catch(noVideos);

            function Videos(response) {
                return response;
            }

            function noVideos(response) {
                return $q.reject(response);
            }
        };

        function SetVideoOffBL(id) {
            return $http.post('http://localhost:3000/api/videoOffBL', { id }).then(Videos).catch(noVideos);

            function Videos(response) {
                return response;
            }

            function noVideos(response) {
                return $q.reject(response);
            }
        }

        function deleteBlVideo(id) {
            return $http.delete('http://localhost:3000/api/deleteBl/' + id).then(Videos).catch(noVideos);

            function Videos(response) {
                return response;
            }

            function noVideos(response) {
                return $q.reject(response);
            }
        }

    }
})();