app.controller('messageController', function($scope, messageFactory){
    $scope.errors = [];
    $scope.addMessage = function(id){
        $scope.errors = [];
        if(!$scope.newMessage || !$scope.newMessage.content){
            $scope.errors.push('Please type something in message field.');
        } else if($scope.newMessage.content.length < 3){
            $scope.errors.push('Message must be 3 characters long.');
        } else if($scope.newMessage.content.length > 144){
            $scope.errors.push('Your message is too long.');
        } else {
            $scope.newMessage._id = id;
            messageFactory.addMessage($scope.newMessage, function(data){
                $scope.messages.push(data);
            });
            $scope.newMessage = {};
        }
    }
    messageFactory.getAll(function(data){
        $scope.messages = data;
    })
})
