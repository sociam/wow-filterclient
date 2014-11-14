angular.module('filterclient', ['btford.socket-io'])
    .factory('mysocket', function (socketFactory) {
        //var myIoSocket = io.connect('http://app-001.ecs.soton.ac.uk:9001/');
        var myIoSocket = io.connect('http://localhost:9001/');
        var socket = socketFactory({
            ioSocket: myIoSocket
        }); 
        return socket;
    })
    .controller('main', function($scope, $rootScope, mysocket) {
        mysocket.addListener("filter", function (filter) {
            $scope.filter = filter;

            // set the non ng-model bound inputs/buttons
            $("input").prop("disabled", !$scope.filter.filter);
        });

        mysocket.addListener("wikipedia_revisions", function (data) {
//            console.log(data);
        });
        mysocket.addListener("wikipedia_images", function (data) {
//            console.log(data);
        });
        mysocket.addListener("spinn3r", function (data) {
//            console.log(data);
        });
        mysocket.addListener("tweets", function (data) {
//            console.log(data);
        });
        mysocket.addListener("trends", function (data) {
//            console.log(data);
        });

        $scope.filter = {
            filter: false
        };

        $scope.$watchCollection("filter", function(newFilter, oldFilter) {
            mysocket.emit("filter", $scope.filter);
        });
    });
