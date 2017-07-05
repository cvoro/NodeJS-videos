(function() {

    angular
        .module('myApp')
        .controller('indexCtrl', indexCtrl);

    indexCtrl.$inject = ['service'];

    function indexCtrl(service) {

        var vm = this;
        vm.dates = [];
        vm.getDates = getDates;
        vm.show = false;

        //months
        vm.january = [];
        vm.february = [];
        vm.march = [];
        vm.april = [];
        vm.may = [];
        vm.june = [];
        vm.july = [];
        vm.august = [];
        vm.september = [];
        vm.november = [];
        vm.october = [];
        vm.december = [];
        vm.unselected = [];


        function getDates() {
            return service.getDates().then(function(response) {
                vm.dates = response.data
                return vm.dates;

            })
        }

        vm.$onInit = function() {
            return service.getDates().then(function(response) {
                vm.dates = response.data;
                var january = 0;
                var february = 0;
                var march = 0;
                var april = 0;
                var may = 0;
                var june = 0;
                var july = 0;
                var august = 0;
                var september = 0;
                var october = 0;
                var november = 0;
                var december = 0;
                var unselected = 0;
                for (var i = 0; i < response.data.length; i++) {
                    var d = response.data[i].date;
                    var y = d.split('-')[1]
                    switch (y) {
                        case '01':
                            vm.january[january] = response.data[i].date;
                            january++
                            break;
                        case '02':
                            vm.february[february] = response.data[i].date
                            february++
                            break;
                        case '03':
                            vm.march[march] = response.data[i].date
                            march++
                            break;
                        case '04':
                            vm.april[april] = response.data[i].date
                            april++
                            break;
                        case '05':
                            vm.may[may] = response.data[i].date
                            may++
                            break;
                        case '06':
                            vm.june[june] = response.data[i].date
                            june++
                            break;
                        case '07':
                            vm.july[july] = response.data[i].date
                            july++
                            break;
                        case '08':
                            vm.august[august] = response.data[i].date
                            august++
                            break;
                        case '09':
                            vm.september[september] = response.data[i].date
                            september++
                            break;
                        case '10':
                            vm.october[october] = response.data[i].date
                            october++
                            break;
                        case '11':
                            vm.november[november] = response.data[i].date
                            november++
                            break;
                        case '12':
                            vm.december[december] = response.data[i].date
                            december++
                            break;
                        default:
                            vm.unselected[unselected] = response.data[i].date
                            unselected++
                            break;
                    }
                }
                return vm.dates;
            }).catch(function(response) {
                vm.show = true;
            })
        }
    }
})();