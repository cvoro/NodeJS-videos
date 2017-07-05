(function() {


    angular
        .module('myApp')
        .config(['$urlRouterProvider', '$stateProvider', function($urlRouterProvider, $stateProvider) {
            $urlRouterProvider.otherwise('/home');

            $stateProvider
                .state('video', {
                    url: '/video/:date',
                    templateUrl: 'videos/video.html',
                    controller: 'videoCtrl',
                    controllerAs: 'video'
                })
                .state('play', {
                    url: '/play/:id',
                    templateUrl: 'playVideo/playVideo.html',
                    controller: 'playVideoCtrl',
                    controllerAs: 'play'
                })
                .state('blackList', {
                    url: '/black_list',
                    templateUrl: 'blackList/blackList.html',
                    controller: 'blackListCtrl',
                    controllerAs: 'bl'
                })
                .state('home', {
                    url: '/home',
                    templateUrl: 'home/home.html'
                })
                .state('edit', {
                    url: '/edit/:id',
                    templateUrl: 'editBlackList/editBl.html',
                    controller: 'editBlCtrl',
                    controllerAs: 'edit'
                });
        }]);

})();