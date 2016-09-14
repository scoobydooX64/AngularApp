(function () {
    
    var module = angular.module("githubViewer")

    var RepoController = function ($scope, $routeParams, github ) {

        var reponame = $routeParams.reponame;
        var username = $routeParams.username;

        var onRepo = function (data) {
            $scope.repo = data;
        };

        var onError = function (reason) {
            $scope.error = reason;
        };

        github.getRepoDetails(username, reponame)
            .then(onRepo, onError);
    }
 
    module.controller("RepoController", RepoController);
}());