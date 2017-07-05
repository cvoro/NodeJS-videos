(function() {
    angular
        .module('myApp')
        .controller('videoCtrl', videoCtrl);

    // videoCtrl.$inject = ['videoService'];
    // '$stateParams', '$state',
    videoCtrl.$inject = ['videoService', '$stateParams']

    function videoCtrl(videoService, $stateParams) {
        var video = this;
        video.Videos = [];
        video.date = $stateParams.date;
        video.show = false;

        video.$onInit = function() {
            return videoService.getVideoByDate(video.date).then(function(response) {
                video.Videos = response.data
                return video.Videos;
            }).catch(function(response) {
                video.show = true;
            })
        }


    }

})();