app.controller('commentController', function($scope, commentFactory){
    $scope.addComment = function(id){
        $scope.newComment._user = id;
        commentFactory.addComment($scope.newComment);
    }
    commentFactory.getComments(function(data){
        $scope.comments = data;
    })
})
