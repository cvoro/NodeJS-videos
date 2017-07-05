(function() {
    angular
        .module('myApp')
        .controller('playVideoCtrl', playVideoCtrl);

    playVideoCtrl.$inject = ['playVideoService', '$stateParams']

    function playVideoCtrl(playVideoService, $stateParams) {
        var play = this;
        play.Video = [];
        play.SetVideoToBL = SetVideoToBL;
        play.id = $stateParams.id;
        play.show = false;


        play.$onInit = function() {
            return playVideoService.getVideoById(play.id).then(function(response) {
                play.Video = response.data
                return play.Video;
            }).catch(function(response) {
                play.show = true;
            })
        }

        function SetVideoToBL(id, $index) {
            play.Video.splice($index, 1)
            return playVideoService.SetVideoToBL(id).then(function(response) {
                return response;
            }).catch(function(response) {
                play.show = true;
            })
        }


    }

})();