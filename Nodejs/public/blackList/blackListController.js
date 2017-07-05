(function() {
    angular
        .module('myApp')
        .controller('blackListCtrl', blackListCtrl);

    blackListCtrl.$inject = ['blackListService']

    function blackListCtrl(blackListService) {
        var bl = this;
        bl.Video = [];
        bl.SetVideoOffBL = SetVideoOffBL;
        bl.deleteBlVideo = deleteBlVideo;
        bl.show = false;

        bl.$onInit = function() {
            return blackListService.getAllBlackListVideos().then(function(response) {
                bl.Video = response.data
                return bl.Video;
            }).catch(function(response) {
                bl.show = true;
            })
        }

        function SetVideoOffBL(id, $index) {
            bl.Video.splice($index, 1)
            return blackListService.SetVideoOffBL(id).then(function(response) {}).catch(function(response) {
                bl.show = true;
            })
        }

        function deleteBlVideo(id, $index) {
            bl.Video.splice($index, 1)
            return blackListService.deleteBlVideo(id).then(function(response) {}).catch(function(response) {
                bl.show = true;
            })
        }


    }

})();